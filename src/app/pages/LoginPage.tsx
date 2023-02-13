import { login } from "../auth/login";
import { LoginForm } from "../forms/LoginForm";
import { ROUTES } from "../routes";
import { useNavigate } from "react-router-dom";

export function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Kirjaudu sisään</h1>
      <LoginForm
        onSubmit={async (data) => {
          const result = await login(data.username, data.password);
          if (result) {
            navigate(ROUTES.root);
          }
        }}
      />
    </div>
  );
}
