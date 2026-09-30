import './App.css'
import Header from './components/Header/index.tsx'
import Reel from './components/Reel/index.tsx'
import Work from './components/Work/index.tsx'
import data from '../data.json'
import Footer from './components/Footer/index.tsx'

function App() {
  return (
    <div className='lg:mx-12 font-geist-mono'>
      <Header {...data.header} />
      <Reel {...data.reel} />
      <Work items={data.work} />
      <Footer />
    </div>
  )
}

export default App
