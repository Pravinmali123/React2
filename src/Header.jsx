import { Link } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <>
        <div>Header</div>

    <Link href="/"><h2>Home</h2></Link>
    <Link href='/about'><h2>about</h2></Link>
    <Link href='/contact'><h2>contact</h2></Link>
    </>

  )
}

export default Header