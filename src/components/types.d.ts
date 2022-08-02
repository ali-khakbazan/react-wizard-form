import { Dispatch, PropsWithChildren, ReactNode, SetStateAction } from "react";

export type WizardFormProps = PropsWithChildren<{
  title?: string;
}>;

export type ChildrenArgs = {
  next?: () => void;
  prev?: () => void;
};

export type WizardStepProps = {
  title: string;
  children: ({ next, prev }: ChildrenArgs) => ReactNode;
};

export type WizardFormChildrenContentProps = {
  next?: () => void;
  prev?: () => void;
  values?: any;
  setValues?: Dispatch<SetStateAction<any>>;
};

export type WizardFormLastChildProps = {
  submit: () => void;
  prev?: () => void;
  values: any;
};
