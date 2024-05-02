import React from 'react'
import Footer from '../component/Footer'

const About = () => {
    return (
        <div className='content'>About</div>
    )
}

export default About


About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}