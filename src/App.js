import RiderForm from "./RiderForm";
import ClimbForm from "./ClimbForm";
import Results from "./Results";
import { useState } from "react";

function App() {
  const [riderWeight, setRiderWeight] = useState(null);
  const [climbHeight, setClimbHeight] = useState(null);
  const [climbDistance, setClimbDistance] = useState(null);
  const [targetTime, setTargetTime] = useState(null);

  return (
    <div className="text-center">
      <div className="mt-5 my-10">
        <header className="text-5xl font-bold mb-2">KOMculator</header>
        <span className="text-md">The Watts you need to be the 👑</span>
        <a
          className="block text-blue-500 underlined"
          target="_blank"
          href="https://www.trainingbible.com/joesblog/2008/01/climbing-power-formula.html"
        >
          🔗 Formula
        </a>
      </div>
      <RiderForm riderWeight={riderWeight} setRiderWeight={setRiderWeight} />
      <ClimbForm
        climbHeight={climbHeight}
        climbDistance={climbDistance}
        targetTime={targetTime}
        setClimbHeight={setClimbHeight}
        setClimbDistance={setClimbDistance}
        setTargetTime={setTargetTime}
      />
      <Results
        riderWeight={riderWeight}
        climbHeight={climbHeight}
        climbDistance={climbDistance}
        targetTime={targetTime}
      />
    </div>
  );
}

export default App;
