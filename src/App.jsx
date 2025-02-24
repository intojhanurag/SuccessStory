import './App.css'
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero';
import Footer from './components/Footer'

function App(){
  return (
    <div>
      <Header/>
      <Hero/>
      <Routes>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;