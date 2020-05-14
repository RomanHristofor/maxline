import React from 'react'
import {Translate} from 'react-localize-redux'
import styled from 'styled-components'

function Loader() {
    return (
        <Main>
            <h2>
                <Translate id="loading" />
            </h2>
        </Main>
    )
}

export default Loader;

const Main = styled.div`
  display: flex;
  width: 350px;
`