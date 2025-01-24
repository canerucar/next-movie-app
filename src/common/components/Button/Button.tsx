import Image from 'next/image';
import styles from '@/common/components/Button/Button.module.css';
import { ButtonProps } from '@/common/components/Button/types';

export default function Button({ 
  children, 
  variant = 'primary', 
  icon,
  iconAlt,
  className,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]} ${className || ''} flexCenter`} 
      {...props}
    >
      {children}
      {icon && <Image src={icon} alt={iconAlt || 'button icon'} />}
    </button>
  );
} 