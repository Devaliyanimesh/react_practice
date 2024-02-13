import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function ProtectedRouter({ Component }) {
    // console.log("🚀 ~ file: ProtectedRouter.jsx:4 ~ ProtectedRouter ~ Component:", typeof Component)
    const navigate1 = useNavigate()
    useEffect(() => {
        let ProData = JSON.parse(localStorage.getItem("LoginData"))
        // Object.keys(normal).length
        if (ProData && Object.keys(ProData).length === 0 && ProData.usertype !== "Admin") {
            navigate1("/")
        }
    })

    return (
        <>
            {Component}
        </>
    )
}
