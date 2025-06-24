import { useState } from "react";

import "./App.css";
import axios from "axios";

function App() {

  return (
    <div>
      <a
        onClick={() => setParams(document.location.hash)}
        href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=hatjqubn1mwj09m17p6tdfmj983tim&redirect_uri=http://localhost:5173/auth&scope=user%3Aread%3Aemail+user%3Aread%3Afollows+moderator%3Aread%3Achatters+channel%3Aread%3Avips+moderation%3Aread"
        target="_blank"
      >
        Connect with Twitch
      </a>

    </div>
  );
}

export default App;
