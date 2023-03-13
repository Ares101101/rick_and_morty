// import styles from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'
export default function NavBar({onSearch}) {
    return (
       <div className={styles.contenedor} >
         <NavLink to = "/home">
            <button className={styles.button}>Home</button>
         </NavLink>
         <NavLink to ="/about" >
            <button className={styles.button}>About</button>
         </NavLink>
         <SearchBar onSearch={onSearch}/>
       </div>
    );
 }
 


 