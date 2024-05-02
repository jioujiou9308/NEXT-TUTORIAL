import React from 'react'
import style from '../styles/Contact.module.css'
import style2 from '../styles/Contact.module.scss'
const Contact = () => {
  return (
    <>
      <h2>Contact</h2>
      <div className={style.isHighlight}>contact module test</div>
      <div className={style2.highlightscss}>contact module test</div>
    </>
  )
}

export default Contact