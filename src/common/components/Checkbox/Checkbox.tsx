import { CheckboxProps } from './types';

export default function Checkbox({ 
  checked, 
  onChange, 
  label, 
  className 
}: CheckboxProps) {
  return (
    <label className={className}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}