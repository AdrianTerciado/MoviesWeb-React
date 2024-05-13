import { BrowserRouter } from 'react-router-dom'
import './styles/styles.scss';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { ResultContext } from './context/ResultContext'
import { MongoContext } from './context/MongoContext'
import { useState } from 'react'

function App() {

  const [result, setResult] = useState([]);
  const [database, setDatabase] = useState([]);

  const updateResult = (newResult) => {
    setResult(newResult)
  };

  const updateDatabase = (newResult) => {
    setDatabase(newResult)
  };

  const resultData = {
    result,
    updateResult
  }

  const mongoDatabase = {
    database,
    updateDatabase
  }

  return (
    <>
      <BrowserRouter >
        <ResultContext.Provider value={resultData}>
          <Header></Header>
          <MongoContext.Provider value={mongoDatabase}>
            <Main></Main>
          </MongoContext.Provider>
        </ResultContext.Provider>
        <Footer></Footer>
      </BrowserRouter >
    </>
  )
}

export default App
