import TeamPanel from "./components/TeamPanel";
import Rope from "./components/Rope";
import { useContext } from "react";
import { GameContext } from "./context/GameProvider";
import Finish from "./components/Finish";

export default function App() {
  const { state } = useContext(GameContext)


  if (state.status == "finish") return <Finish />
  return (
    <>
      <h2>Round: {state.round}</h2>
      <h2>Time:{state.timeLeft}</h2>
      <div className="app">
        <TeamPanel side="left" color="blue" />

        <div>
          <Rope />
        </div>

        <TeamPanel side="right" color="red" />
      </div>
    </>
  );
}
