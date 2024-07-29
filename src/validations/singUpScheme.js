import { object, string, ref } from 'yup';

export const signupSchema = object().shape({
    email: string().required('Email? requerido!').email('No es un email válido!'),
    password: string().required('Contraseña? requerido!').min(6, 'La contraseña debe ser de al menos 6 dígitos'),
    confirmPassword: string()
        .oneOf([ref('password'), null], 'Las contraseñas deben coincidir')
        .required(),
});
