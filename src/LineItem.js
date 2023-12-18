import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({item, handelCheck, handleDelete}) => {
  return (
    <li className="item" >
          <input type="checkbox"
          onChange={() => handelCheck(item.id)}
          checked = {item.checked}
           />
          <label 
          style={(item.checked)? {textDecoration: 'line-through'}: null}
          onClick={() => handelCheck(item.id)}>{item.item}</label>
          <FaTrashAlt
          roll = "button"
          onClick={() =>handleDelete(item.id)}
          tabIndex="0" 
          />
        </li>
  )
}

export default LineItem