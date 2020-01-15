import * as Yup from 'yup';

export const ResetPasswordData = {
  email: '',
};

export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
});
