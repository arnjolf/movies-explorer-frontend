import AuthForm from "../AuthForm/AuthForm";

export default function Register({
  isRegister,
  handleRegister,
  serverError,
  onServerError,
  isLoading,
}) {
  return (
    <AuthForm
      isRegister={isRegister}
      submitAction={handleRegister}
      isLoading={isLoading}
      serverError={serverError}
      onServerError={onServerError}
    />
  );
}
