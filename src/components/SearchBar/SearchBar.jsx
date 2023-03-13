import { useState } from "react";
import styles from './SearchBar.module.css'
export default function SearchBar({onSearch}) {

   const [character , setCharacter ]= useState("")
   const handleChange = e =>{
      const{value} = e.target;
      console.log(value)
      setCharacter(value);
      
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
        />
        <button 
        onClick={()=>onSearch(character)}
        className={styles.button}
        >Agregar</button>
      </div>
   );
}
