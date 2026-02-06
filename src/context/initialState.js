export const initialState = {
    questions: {
        left: null, right: null
    },
    round: 1, ropePosition: 0, winner: "", answers: {
        left: "", right: ""
    },
    score: {
        left: 0, right: 0
    },
    status: "playing",
    timeLeft: 15
}