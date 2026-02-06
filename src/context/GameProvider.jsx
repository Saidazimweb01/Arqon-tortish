import React, { createContext, useEffect, useReducer } from 'react'
import reducer from './gameReducer'
import { initialState } from './initialState'

export const GameContext = createContext()


function GameProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        dispatch({ type: "START" })
    }, [])


    function chekedInp(side) {
        if (state.questions[side]?.answer == Number(state.answers[side])) {
            dispatch({ type: "CHECK", payload: side })
        }
        else {
            alert("Hato")
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch({ type: "TIMER" })
        }, 1000)

        return () => clearInterval(timer)
    })


    return (
        <GameContext.Provider value={{ state, dispatch, chekedInp }}>

            {children}
        </GameContext.Provider>
    )
}

export default GameProvider