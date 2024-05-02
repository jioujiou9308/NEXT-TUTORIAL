import React from 'react'
import style from '../styles/About.module.css'
import style2 from '../styles/About.module.scss'


const About = () => {
    return (
        <>
            <h2>About</h2>
            <butto className='btn btn-success'>Primary</butto>
            <div className={style.isHighlight}>about module css test</div>
            <div className={style2.highlightscss}>about module css test</div>
        </>
    )
}

export default About