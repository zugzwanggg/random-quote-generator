import { useEffect, useState } from 'react'
import './App.scss'
import axios from 'axios';

function App() {
  
  const [isLoading,setIsLoading] = useState(false)
  const [quoteData, setQuoteData] = useState([])

  console.log(quoteData)
  useEffect(()=>{
    setIsLoading(true)
    axios.get('https://api.quotable.io/quotes/random')
    .then(res=>setQuoteData(res.data))
    .finally(()=>setIsLoading(false))
  }, [0])

  return (
    <div className='container'>
      <h3 style={{textAlign: 'center', color: 'rgb(193, 95, 95)', marginBottom: '2rem'}}>Random quote</h3>
      {isLoading 
      ?
      <h1>Loading...</h1>
      :
      quoteData.map(quote => {
        return <div key={quote.content} className="quote">
        <h2>{quote.content}</h2>
        <strong>©{quote.author}</strong>
      </div>
      })
      }
      <button onClick={()=>window.location.reload()}>Next</button>
    </div>
  )
}

export default App
