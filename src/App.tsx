import './App.css'
import Header from './components/Header/index.tsx'
import Gallery from './components/Gallery/index.tsx'

import data from '../data.json'

function App() {

  return (
    <>
      <Header {...data.header} />
      <Gallery {...data.gallery} />
    </>
  )
}

export default App
