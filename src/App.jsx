import { useState } from 'react'
import './App.css'
// import axios from "axios"
function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnser] = useState('');

  async function getdata() {
    setAnser('loading...');

    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBwsZ--ARiCirub3P2WLuYQDkK3gfii8js",
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        contents: [
          {
            parts: [
              {
                text: question
              }
            ]
          }
        ]
      }
    });
    setAnser(response['data']['candidates'][0]['content']['parts'][0]['text']);

  }
  return (
    <>
      <div className='cointainer'>

        {/* header div */}
        <div className='header'>
          <h1 className='chat'>Chat-with-AI</h1>
        </div>

        <div className='body'>
          <pre>{answer}</pre>
        </div>

        <div className='footer'>
          <input type='search' value={question} onChange={(e) => setQuestion(e.target.value)} placeholder='Ask me anything...'/>

          <div className='btn'>
            <button onClick={getdata}>Search</button>
          </div>

        </div>

      </div>
    </>
  )
}



export default App
