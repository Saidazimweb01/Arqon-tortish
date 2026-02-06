import RandomQuestions from "../utils/generateQuestions";

export default function reducer(state, action) {
    switch (action.type) {
        case "START":
            return {
                ...state, questions: {
                    left: RandomQuestions(),
                    right: RandomQuestions()
                }, status: "playing"
            }

        case "CHECK":
            const newLeft = [action.payload] == "left" ? state.score.left + 1 : state.score.left
            const newRight = [action.payload] == "right" ? state.score.right + 1 : state.score.right

            const diff = Math.abs(newLeft - newRight)

            if (diff >= 3) {
                return { ...state, winner: newLeft > newRight ? "Blue" : "Red", score: { left: newLeft, right: newRight }, status: "finish" }
            }

            const ropeChange = action.payload == "left" ? -5 : 5
            return { ...state, questions: { left: RandomQuestions(), right: RandomQuestions() }, score: { ...state.score, [action.payload]: state.score[action.payload] + 1 }, round: state.round + 1, ropePosition: state.ropePosition + ropeChange, timeLeft: 15, answers: { left: "", right: "" } }

        case "VALUE":
            return { ...state, answers: { ...state.answers, [action.side]: action.payload } }

        case "TIMER":
            if (state.timeLeft == 0) {

                return {
                    ...state, timeLeft: 15,
                    questions: { left: RandomQuestions(), right: RandomQuestions() }, round: state.round + 1,
                }
            }

            return { ...state, timeLeft: state.timeLeft - 1 }
        default:
            throw new Error("Action yoq")
    }
}