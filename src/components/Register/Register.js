import Logo from "../../images/logo.svg";
import AuthForm from "../AuthForm/AuthForm";

export default function Login({ isRegister }) {
  return <AuthForm isRegister={isRegister} />;
}
