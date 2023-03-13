import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({name, species, gender, image, onClose,id }) {
   return (
      <div className={styles.conteiner}>
         <div className={styles.closeB}>
            <button onClick={onClose} >X</button>
         </div>
         <Link  to={`/detail/${id}`}>
            <div className={styles.dataCon}>
               <h3>{name} </h3>
               <h4>{species} </h4>
               <h4>{gender} </h4>
            </div>
            <div className={styles.image}>
               <img  src={image} alt={image} /> 
            </div>
         </Link>
         
      </div>
   );
}
