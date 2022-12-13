import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedComponent = () => {

    const isLogged = useSelector((state)=>state.accountReducer)
    const navigate = useNavigate()

    if(!isLogged){
navigate("/")
    }
  return (
    <>
    <Outlet/>
    </>
  )
}

export default ProtectedComponent