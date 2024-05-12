import { BrowserRouter } from 'react-router-dom'
import './styles/styles.scss';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { ResultContext } from './context/ResultContext'
import { useState } from 'react'

function App() {

  const [result, setResult] = useState([]);

  const updateResult = (newResult) => {
    setResult(newResult)
  };

  const resultData = {
    result,
    updateResult
  }

  return (
    <>
      <BrowserRouter >
        <ResultContext.Provider value={resultData}>
          <Header></Header>
          <Main></Main>
        </ResultContext.Provider>
        <Footer></Footer>
      </BrowserRouter >
    </>
  )
}

export default App
