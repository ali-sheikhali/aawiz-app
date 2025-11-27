import { FormEventHandler } from "react";

type Props = {
  children: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function FormWrapper({ children, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className=" flex flex-col gap-6">
      {children}
    </form>
  );
}
