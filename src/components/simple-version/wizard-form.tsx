import "./styles.css";
import { WizardFormProps, WizardStepProps } from "../types";
import React, {
  Children,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { CheckIcon } from "../icons";

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

  return (
    <WizardStepHandler.Provider value={{ next: handleNext, prev: handlePrev }}>
      <div>
        <div className="step-bar-box">
          {wizardSteps?.map((step, idx) => {
            const isActive = idx + 1 === activeStep;
            const isPassed = idx + 1 < activeStep;
            const styles = {
              title: isActive
                ? "text-black"
                : !isActive && !isPassed
                ? "text-gray"
                : idx + 1 < activeStep
                ? "text-black"
                : "",
              step: isActive
                ? "bg-primary text-white"
                : !isActive && idx + 1 > activeStep
                ? "bg-gray  text-white"
                : isPassed
                ? "bg-green"
                : "",
            };

            return (
              <div key={`wizard-step-${idx}`} className="single-step-bar">
                <div className={`single-step-bar-number-label ${styles.step}`}>
                  {isPassed ? (
                    <CheckIcon
                      svg={{ width: "1.3rem", height: "1.3rem" }}
                      path={{ fill: "#fff" }}
                    />
                  ) : (
                    <p className={isActive ? "text-white" : "text-gray"}>
                      {idx + 1}
                    </p>
                  )}
                </div>

                <p className={`single-step-bar-title-label ${styles.title}`}>
                  {step.title}
                </p>

                {idx + 1 !== wizardSteps.length && (
                  <hr className="step-bar-border border border-gray3 w-full h-[0] outline-none bg-transparent" />
                )}
              </div>
            );
          })}
        </div>

        <div>
          <div className={`fade`}>
            <div>
              {Children?.toArray(children)?.map((el, idx) => (
                <div
                  className={idx === activeStep - 1 ? "visible" : "hidden"}
                  key={`wizard-form-element-${idx}`}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WizardStepHandler.Provider>
  );
};

export const WizardStep: React.FC<WizardStepProps> = ({ title, children }) => {
  const { next, prev } = useContext(WizardStepHandler);

  return <>{children({ next, prev })}</>;
};
