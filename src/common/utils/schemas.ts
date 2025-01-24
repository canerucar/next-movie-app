import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Geçerli bir e-posta adresi girin").required("E-posta zorunludur"),
  password: yup.string()
    .min(8, "Şifre en az 8 karakter olmalıdır")
    .matches(/[A-Z]/, "En az bir büyük harf içermelidir")
    .matches(/[0-9]/, "En az bir sayı içermelidir")
    .required("Şifre zorunludur"),
});

export {
  LoginSchema
}