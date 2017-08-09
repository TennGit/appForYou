import React from 'react'
import styled from 'styled-components'
import './App.css'
import DailyTableContainer from './containers/DailyTableContainer'

const App = () => (
    <Div className="App">
        <DailyTableContainer />
    </Div>
)

const Div = styled.div`
    padding: 30px;
`

export default App
