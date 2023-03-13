import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css"

export default function Detail (props){

    const { detailID } = useParams();
    console.log(useParams())
    const [character, setCharacter] = useState({})
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailID}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailID]);

      console.log(character)
    return(
        <div >
            <h1>Detail</h1>
            <h2>{character.name} </h2>
            <img src={character.image} alt={character.name} />
            {character.origin && <h3>{character.origin.name}</h3>}
        </div>
    )
}