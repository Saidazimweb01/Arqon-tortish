import { useContext } from "react";
import { GameContext } from "../context/GameProvider";

export default function TeamPanel({ side, color }) {
  const { state, chekedInp, dispatch } = useContext(GameContext)

  return (
    <div className={`panel ${color}`}>
      <h2>{side === "left" ? "1-Komanda" : "2-Komanda"}</h2>
      <h3>{state.questions[side]?.text} = ?</h3>

      <input value={state.answers[side]} onChange={(e) => dispatch({ type: "VALUE", payload: e.target.value, side: side })} />
      <button onClick={() => chekedInp(side)}>Javob</button>

      <p>Score: {state.score[side]}</p>
    </div>
  );
}
