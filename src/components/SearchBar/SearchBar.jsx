import { useState } from "react";
import styles from './SearchBar.module.css'
export default function SearchBar({onSearch}) {

   const [character , setCharacter ]= useState("")
   const handleChange = e =>{
      const{value} = e.target;
      console.log(value)
      setCharacter(value);   
   }
   const handleSubmit = () => {     
      setCharacter("")
   }
   return (
      <div>
        <input 
        type='search' 
        name='search'
        id= 'search'
        onChange={handleChange}
        className={styles.input}
        placeholder="Search.."
        value={character}
        />
        <button 
        onClick={()=>{
         onSearch(character);
         handleSubmit();
      }}
        className={styles.button}
        >Agregar</button>
      </div>
   );
}
