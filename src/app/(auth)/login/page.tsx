"use client"
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginSchema } from '@/common/utils/schemas';
import { IFormInput } from '@/app/(auth)/login/type';
import Footer from '@/common/components/Footer/Footer';
import Button from '@/common/components/Button/Button';
import Input from '@/common/components/Input/Input';

import styles from '@/app/(auth)/login/page.module.css';
import ChevronRightIcon from '@public/icons/chevronRight.svg';

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = (data: IFormInput) => {
    router.push("/movies");
  };

  return (
    <div className={styles.loginWrapper}>
      <header>
        <h1 className={styles.loginHeaderTitle}>Movies App</h1>
      </header>
      <section className={styles.loginContainer}>
        <div className={styles.loginContainerWrapper}>
          <h2 className={styles.loginContainerTitle}>Giriş Yap</h2>
          <form className={styles.loginContainerform} onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="E-posta"
              type="email"
              id="email"
              error={errors.email?.message}
              {...register("email")}
            />
            <Input
              label="Şifre"
              type="password"
              id="password"
              error={errors.password?.message}
              {...register("password")}
            />
            <Button 
              type="submit"
              icon={ChevronRightIcon}
              iconAlt="Chevron Right"
            >
              Giriş
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}