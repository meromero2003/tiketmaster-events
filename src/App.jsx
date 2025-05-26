import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Events from './components/Events'
import SignUpForm from './components/SignUpForm'
import  Routes  from './routes'

function App() {
  /*const [searchText, setSearchText] = useState('');

  function handleNavbarSearch(text){
      setSearchText(text);
  };


  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchText={searchText}/>
    </>
  )*/
return <Routes/>
}

export default App
