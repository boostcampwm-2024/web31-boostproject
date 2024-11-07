export type ButtonProps = {
  label: string;
  isDisabled: boolean;
  onClick: () => void;
};

export default function ExampleButton({ label, isDisabled = false, onClick }: ButtonProps) {
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {label}
    </button>
  );
}
