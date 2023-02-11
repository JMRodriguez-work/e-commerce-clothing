import React from 'react'
import { Link } from 'react-router-dom'

const NavBarMobile = () => {
  return (
    <>
        <Link to="/products/1">Mujer</Link>
        <Link to="/products/2">Hombre</Link>
        <Link to="/products/3">Niños</Link>
    </>
  )
}

export { NavBarMobile }