# React Wizard Form

#### A simple React Seperated Inputs for all cases

A complete and simple component for creating Multi step forms in React

## Demo

https://codesandbox.io/s/react-wizard-from-f4top8

## Usage

```javascript
import { WizardForm, WizardStep } from "./components/react-wizard-form";

function App() {
  return (
    <div>
      <WizardForm>
        <WizardStep title="First Step">
          {({ next }) => (
            <div>
              <p> step1 content </p>
              <button onClick={next}> Next </button>
            </div>
          )}
        </WizardStep>

        <WizardStep title="Second Step">
          {({ next, prev }) => (
            <div>
              <p> step2 content </p>

              <button onClick={next}> Next </button>
              <button onClick={prev}> Prev </button>
            </div>
          )}
        </WizardStep>
      </WizardForm>
    </div>
  );
}

export default App;
```

### Props And Types

```typescript
type WizardFormProps = PropsWithChildren<{
  title?: string;
}>;

type ChildrenArgs = {
  next?: () => void;
  prev?: () => void;
};

type WizardStepProps = {
  title: string;
  children: ({ next, prev }: ChildrenArgs) => ReactNode;
};

type WizardFormChildrenContentProps = {
  next?: () => void;
  prev?: () => void;
  values?: any;
  setValues?: Dispatch<SetStateAction<any>>;
};

type WizardFormLastChildProps = {
  submit: () => void;
  prev?: () => void;
  values: any;
};
```

## API Reference

| Parameter         | Type              | Required | Description                                                             |
| :---------------- | :---------------- | :------- | :---------------------------------------------------------------------- |
| `WizardFormProps` | `WizardFormProps` | **YES**  | wrapper component props (you can find detail in Props And Type section) |
| `WizardStepProps` | `WizardStepProps` | **YES**  | step component props (you can find detail in Props And Type section)    |

## Installation

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
