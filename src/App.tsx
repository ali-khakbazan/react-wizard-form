import "./App.css";
import {
  WizardForm as WizardFormSimple,
  WizardStep as WizardStepSimple,
} from "./components/simple-version/wizard-form";

import {
  WizardForm as WizardFormAdvanced,
  WizardStep as WizardStepAdvanced,
} from "./components/advanced-version/wizard-form";

function App() {
  return (
    <div>
      <section className="mb-20">
        <div className="pb-5">
          <h1 className="text-4xl font-bold text-black/80 text-center mb-1">
            React Wizard Form
          </h1>

          <p className="text-black/70 text-center">
            A complete and simple component for creating Multi step forms in
            React
          </p>
        </div>

        <hr />
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-3xl font-semibold text-black/80 mb-1">
            Simple Version
          </h2>
          <p className="text-black/70">simple version with no dependency</p>
        </div>

        <WizardFormSimple>
          <WizardStepSimple title="First Step">
            {({ next }) => (
              <div className="gap-y">
                <p>First Step Content</p>

                <div className="step-btns">
                  <button className="btn next-btn" onClick={next}>
                    Next
                  </button>
                </div>
              </div>
            )}
          </WizardStepSimple>

          <WizardStepSimple title="Second Step">
            {({ next, prev }) => (
              <div className="gap-y">
                <p>Second Step Content</p>

                <div className="step-btns">
                  <button className="btn prev-btn" onClick={prev}>
                    Prev
                  </button>
                  <button className="btn next-btn" onClick={next}>
                    Next
                  </button>
                </div>
              </div>
            )}
          </WizardStepSimple>

          <WizardStepSimple title="Third Step">
            {({ prev }) => (
              <div className="gap-y">
                <p>Third Step Content</p>

                <div className="step-btns">
                  <button className="btn prev-btn" onClick={prev}>
                    Prev
                  </button>
                  <button
                    className="btn next-btn"
                    onClick={() => console.log("do what you want")}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </WizardStepSimple>
        </WizardFormSimple>
      </section>

      <section className="mt-14">
        <div className="mb-5">
          <h2 className="text-3xl font-semibold text-black/80 mb-1">
            Advanced Version
          </h2>
          <p className="text-black/70">
            advanced version with React Spring & Tailwindcss
          </p>
        </div>

        <WizardFormAdvanced>
          <WizardStepAdvanced title="First Step">
            {({ next }) => (
              <div className="gap-y">
                <p>First Step Content</p>

                <div className="step-btns">
                  <button className="btn next-btn" onClick={next}>
                    Next
                  </button>
                </div>
              </div>
            )}
          </WizardStepAdvanced>

          <WizardStepAdvanced title="Second Step">
            {({ next, prev }) => (
              <div className="gap-y">
                <p>Second Step Content</p>

                <div className="step-btns">
                  <button className="btn prev-btn" onClick={prev}>
                    Prev
                  </button>
                  <button className="btn next-btn" onClick={next}>
                    Next
                  </button>
                </div>
              </div>
            )}
          </WizardStepAdvanced>

          <WizardStepAdvanced title="Third Step">
            {({ prev }) => (
              <div className="gap-y">
                <p>Third Step Content</p>

                <div className="step-btns">
                  <button className="btn prev-btn" onClick={prev}>
                    Prev
                  </button>
                  <button
                    className="btn next-btn"
                    onClick={() => console.log("do what you want")}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </WizardStepAdvanced>
        </WizardFormAdvanced>
      </section>

      <section className="mt-12">
        <hr />

        <div className="flex flex-col items-center py-5">
          <h2 className="text-black/80 font-semibold text-2xl py-3">Links:</h2>

          <a className="text-blue-500 font-semibold" href="https://github.com">
            Github Repository
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
