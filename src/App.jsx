import { useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [params, setParams] = useState("Nada")
  const api = axios.create({
    baseURL: "https://api.twitch.tv/helix"
  })

  function getUsers() {
    api.get("/users", )
  }

  return (
    <div>
      <a onClick={() => setParams(document.location.hash)} href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=hatjqubn1mwj09m17p6tdfmj983tim&redirect_uri=http://localhost:5173&scope=user%3Aread%3Aemail+user%3Aread%3Afollows+moderator%3Aread%3Achatters+channel%3Aread%3Avips+moderation%3Aread" target='_blank'>Connect with Twitch</a>

      <p>{ params.slice(14, params.indexOf("&scope")) }</p>
    </div>
  )
}

export default App
