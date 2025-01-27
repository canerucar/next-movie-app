import { SelectProps } from '@/common/components/Select/types';

export default function Select({ 
  value, 
  onChange, 
  options, 
  className, 
  placeholder 
}: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}