import React, { useContext } from 'react'
import { GameContext } from '../context/GameProvider'

function Finish() {
    const { state } = useContext(GameContext)

    return (
        <>

            <h2>O'yin tugadi</h2>
            <p>Yutgan jamoa: {state.winner}</p>
            <p>Ochko {state.score.left} : {state.score.right}</p>
        </>
    )
}

export default Finish