import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size:50px;
    color: ${({ theme }) => theme.colors.primary};`

const CSSJS = () => {
    return (
        <>
            <div style={{ color: 'red' }}>CSSJS</div>
            <h2 >CSSJS</h2>
            <Title>CSSJS</Title>
        </>
    )
}

export default CSSJS