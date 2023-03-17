import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar'
import { useState } from 'react'
import { Route, Routes, useLocation, MemoryRouter, useNavigate } from 'react-router-dom';
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from './components/Forms/Forms'; 
function App () {
  const [characters, setCharacters] = useState([]);
  let {pathname} = useLocation();


  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
           console.log(pathname)
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
  }

  const onClose = id =>{
    setCharacters(characters.filter(char => char.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
     {pathname==='/'? "" :<NavBar onSearch={onSearch}/>}
     {pathname==='/'? "" : <hr />}
      <Routes>
        <Route path = "/about" element={<About/>} />
        <Route path = "/home" element={
          <Cards characters={characters} onClose={onClose} />
        } />
        <Route path='/detail/:detailID' element={<Detail/>} />
        <Route path='/' element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App
