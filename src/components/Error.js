import styled from '@emotion/styled'
import React from 'react'

const DivError = styled.div`
    font-family: 'Bebas Neue', cursive;
`;
export const Error = ({mensaje}) => {
    return (
        <DivError className='error'>
            {mensaje}
        </DivError>
    )
}
