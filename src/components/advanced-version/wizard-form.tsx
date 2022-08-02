import {
  Children,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useTransition, animated } from "react-spring";
import { CheckIcon } from "../icons";
import { WizardFormProps, WizardStepProps } from "../types";

const WizardStepHandler = createContext({ next: () => {}, prev: () => {} });

export const WizardForm: React.FC<WizardFormProps> = ({ children }) => {
  const wizardSteps = useMemo(
    () => Children.toArray(children).map((item: any) => item.props),
    [children]
  );

  const [activeStep, setActiveStep] = useState(1);

  const handleNext = useCallback(() => {
    setActiveStep((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveStep((prev) => prev - 1);
  }, []);

  const transitions = useTransition(activeStep, {
    from: { opacity: 0, position: "absolute" as const, display: "block" },
    enter: { opacity: 1, position: "relative" as const, display: "block" },
    leave: { opacity: 0, position: "absolute" as const, display: "none" },
    expires: false,
  });

  return (
    <WizardStepHandler.Provider value={{ next: handleNext, prev: handlePrev }}>
      <div>
        <div className="w-full flex items-center gap-x-5">
          {wizardSteps?.map((step, idx) => {
            const isActive = idx + 1 === activeStep;
            const isPassed = idx + 1 < activeStep;
            const styles = {
              title: isActive
                ? "text-black1"
                : !isActive
                ? "text-gray2"
                : idx + 1 < activeStep
                ? "text-white"
                : "",
              step: isActive
                ? "bg-primary text-white"
                : !isActive && idx + 1 > activeStep
                ? "bg-gray1 text-gray2"
                : isPassed
                ? "bg-green1"
                : "",
            };

            return (
              <div
                key={`wizard-step-${idx}`}
                className="flex items-center gap-x-1.5 grow"
              >
                <div
                  className={`w-7 h-7 min-w-[1.75rem] min-h-[1.75rem] flex items-center justify-center rounded-full text-sm ${styles.step}`}
                >
                  {isPassed ? (
                    <CheckIcon
                      svg={{ width: "1.3rem", height: "1.3rem" }}
                      path={{ fill: "#fff" }}
                    />
                  ) : (
                    idx + 1
                  )}
                </div>

                <p className={`text-sm whitespace-nowrap ${styles.title}`}>
                  {step.title}
                </p>

                {idx + 1 !== wizardSteps.length && (
                  <hr className="border border-gray3 w-full h-[0] outline-none bg-transparent" />
                )}
              </div>
            );
          })}
        </div>

        <div className="relative">
          {transitions(({ opacity, position, display }, item) => (
            <animated.div
              style={{
                opacity: opacity,
                position: position,
                inset: "0",
                display: display,
              }}
              className={`fade`}
            >
              <div>
                {Children?.toArray(children)?.map((el, idx) => (
                  <div
                    className={idx === activeStep - 1 ? "block" : "hidden"}
                    key={`wizard-form-element-${idx}`}
                  >
                    {el}
                  </div>
                ))}
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </WizardStepHandler.Provider>
  );
};

export const WizardStep: React.FC<WizardStepProps> = ({ title, children }) => {
  const { next, prev } = useContext(WizardStepHandler);

  return <>{children({ next, prev })}</>;
};
