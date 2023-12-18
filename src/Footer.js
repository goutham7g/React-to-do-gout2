import React from 'react'

const Footer = ({length}) => {
   
  return (
    <footer> {length} List {length ===1 ? "item" : "Items"} </footer>
  )
}

export default Footer
