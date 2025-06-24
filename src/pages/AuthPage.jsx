import { useState } from "react";
import "../App.css";
import axios from "axios";

function AuthPage() {
  const [params, setParams] = useState("Nada");
  window.onload = () => setParams(document.location.hash);

  return (
    <div>
      <p>Autenticação realizada com sucesso!</p>
      <p>{params.slice(14, params.indexOf("&scope"))}</p>
      <a href="http://localhost:5173/viewers">Clique aqui para seguir</a>
    </div>
  );
}

export default AuthPage;
