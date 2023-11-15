import './App.css';
import RiderForm from './RiderForm';
import ClimbForm from './ClimbForm';
import Results from './Results';
import { useState } from 'react';

function App() {

  const [riderWeight, setRiderWeight] = useState(null)
  const [climbHeight, setClimbHeight] = useState(null)
  const [climbDistance, setClimbDistance] = useState(null)
  const [targetTime, setTargetTime] = useState(null)

  return (
    <div className="App">
      <div className="mt-5 my-10">
        <header className="text-5xl font-bold">
          KOMculator
        </header>
        <span className="text-md">The Watts you need to be the 👑</span>
      </div>
      <RiderForm 
        riderWeight={riderWeight}
        setRiderWeight={setRiderWeight}
      />
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
