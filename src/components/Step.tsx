interface StepProps {
  step: number;
  description: string;
}

export const Step = (props: StepProps) => {
  return (
    <div className="relative flex items-center justify-center w-full gap-3 p-4 overflow-hidden rounded-lg shadow-md bg-accent-3 ring-1 ring-inset ring-accent-1">
      <div className="text-2xl font-bold text-accent-2">{props.step}</div>
      <div className="text-sm leading-5 text-white">{props.description}</div>
    </div>
  );
};
