import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedComponent = () => {

    const isLogged = useSelector((state)=>state.accountReducer.isLoggedIn)
  

    if(!isLogged){
      return <Navigate to="/"/>

    }
  return (
    <>
    <Outlet/>
    </>
  )
}

export default ProtectedComponent