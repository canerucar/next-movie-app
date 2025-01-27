export type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
  placeholder?: string;
}