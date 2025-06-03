import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [question, setquestion] = useState("");
  const [answer, setanswer] = useState("");


  async function genrateAnswer() {
   setanswer ('loading...')
    const response = await axios({
      url: "",
      method: "post",
      data: {
        "contents": [{
          "parts": [{ "text": question }]
        },
        ],
      },
    });
    
      setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  } 
  return (
    <><h1>Chat AI</h1>
      <textarea value={question} onChange={(e) => setquestion(e.target.value)}
        cols="30" rows="10"></textarea>
      <button onClick={genrateAnswer}>Genrate Answer</button>
      <p>{answer}</p>
    </>
  )
}

export default App
