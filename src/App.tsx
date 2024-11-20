import './App.css'
import Header from './components/Header/index.tsx'
import Gallery from './components/Gallery/index.tsx'

import data from '../data.json'
import About from './components/About/index.tsx'

function App() {

  return (
    <div className='lg:mx-12'>
      <Header {...data.header} />
      <Gallery {...data.gallery} />
      <About {...data.about} />
    </div>
  )
}

export default App
