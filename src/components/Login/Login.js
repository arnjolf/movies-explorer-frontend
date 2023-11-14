import AuthForm from "../AuthForm/AuthForm";

export default function Login({
  isRegister,
  handleAuth,
  serverError,
  onServerError,
  isLoading,
}) {
  return (
    <AuthForm
      isRegister={isRegister}
      submitAction={handleAuth}
      isLoading={isLoading}
      serverError={serverError}
      onServerError={onServerError}
    />
  );
}
