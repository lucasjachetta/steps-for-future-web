import Logo from "../../assets/Logo.svg"
import s from "./LoginStyles";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Link } from "react-router-dom";

function Login() {
  return (
    <s.MainContainer>
         <s.LeftContainer>
            <img src={Logo} width={400} height={400} />
            <h1>Steps for Future</h1>
         </s.LeftContainer>

         <s.RightContainer>
            <s.CenterContainer>
              <Input placeholder="Email"/>
              <Input placeholder="Senha"/>
              
              <Link to="/logged-plans">
                  <Button variant = 'secondary'>Entrar</Button>
              </Link>

              <Link to="/register">
                  <Button>Cadastre-se</Button>
              </Link>

            </s.CenterContainer>
         </s.RightContainer>
    </s.MainContainer>
  );
}

export default Login;
