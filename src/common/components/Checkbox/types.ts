export type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string | React.ReactNode;
  className?: string;
}