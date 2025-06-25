import { useState } from "react";
import "../App.css";
import axios from "axios";

function AuthPage() {
  const [params, setParams] = useState("Nada");
  const [users, setUsers] = useState([]);

  window.onload = () => setParams(document.location.hash);

  const api = axios.create({
    baseURL: "https://api.twitch.tv/helix",
  });

  api.defaults.headers.common = {
    Authorization: `Bearer ${params.slice(14, params.indexOf("&scope"))}`,
    "Client-Id": "hatjqubn1mwj09m17p6tdfmj983tim",
  };

  function getUsers() {
    api
      .get("/users?username=ojoojao")
      .then((response) => setUsers(response.data.data[0]))
      .catch((err) => console.error("Erro: " + err));
  }

  return (
    <div>
      <p>Autenticação realizada com sucesso!</p>
      <p>{params.slice(14, params.indexOf("&scope"))}</p>
      <button onClick={getUsers} type="button">
        Users
      </button>
      <p>{JSON.stringify(users)}</p>
      <a href="http://localhost:5173/viewers">Clique aqui para seguir</a>
    </div>
  );
}

export default AuthPage;
