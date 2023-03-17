import React from "react"
import styles from './Forms.module.css'

export default function Form(props) {
    const [userData ,  setUserData]= React.useState({
        username :"",
        password :"",
    }) 
    const handleUsernChange =e=>{
        const {value}= e.target
        console.log(value)
        setUserData({
            ...userData,
            username :value      
        })
    }
    const handlePasswChange= e =>{
        const {value} = e.target;
        setUserData({
            ...userData,
            password : value
        })
    }
    return (
        <div>
            <form>
                <label >Username</label>
                <input
                type="text"
                onChange={handleUsernChange}
                />
                <label >Password</label>
                <input 
                type="text" 
                onChange={handlePasswChange}
                />
                <button>login</button>
            </form> 
        </div> 
            
    )
}