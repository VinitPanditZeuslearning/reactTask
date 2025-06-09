import React from 'react'
import styled from 'styled-components'

const VerLin = styled.div`
size: 20px;
border-left: 1px solid #000000;
`

export default function VerticalLine({ size }) {
    return (
        <VerLin style={{height: size ? `${size}px` : '10px'}}>

        </VerLin>
    )
}
