import React, {useState} from 'react'

export default function Register(){
    const [firstName,setFirstName] =  useState('')
    setTimeout (()=>{
        setFirstName('Gasana')
    }, 2000)
    return(
        <>
        <p>Welcome to our registration from</p>

        <h1>Your name is {firstName}</h1>
        </>
    )
}