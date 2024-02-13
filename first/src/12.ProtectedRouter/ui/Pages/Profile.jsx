import React from 'react'

export default function Profile() {

    let ProData = JSON.parse(localStorage.getItem("LoginData")) || []
   
    return (
        <>
            {
                Object.values(ProData).map((e, i) => {
                    return (
                        <h1 key={i}>{e}</h1>
                    )
                })
            }
        </>
    )
}
