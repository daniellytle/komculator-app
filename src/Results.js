

function Results({ riderWeight, climbHeight, climbDistance, targetTime }) {
  const PIZZA_KJ = 1192.44

  const validData = () => {
    return (
      typeof riderWeight == "number" &&
      typeof climbHeight == "number" &&
      // typeof climbDistance == 'number' &&
      typeof targetTime == "number"
    );
  };

  const requiredWatts = () => {
    if (!validData()) {
      return;
    }
    // bike + rider weight (kg) x 9.8 x elevation gain (meters) / time (seconds) = power (watts). Add 10% for rolling and air resistance.
    // https://www.trainingbible.com/joesblog/2008/01/climbing-power-formula.html
    return Math.round((riderWeight * 9.8 * climbHeight) / (targetTime * 60));
  };

  const requiredKilojoules = () => {
    if (!validData()) {
      return;
    }
    return Math.round(requiredWatts() * targetTime);
  };

  const requiredPizzaSlices = () => {
    if (!validData()) {
      return;
    }

    return Math.round(requiredKilojoules() / PIZZA_KJ);
  };

  return (
    <>
      {validData() ? (
        <div class="mx-3 text-center">
          <div className="text-xl font-bold uppercase mb-3 text-gray-400">Estimated Effort</div>
          <h1 class="text-4xl text-orange-600 mb-3">
            <span class="font-bold text-5xl">{requiredWatts()}</span> Watts for{" "}
            {targetTime} minutes
          </h1>
          <h1 class="text-3xl text-orange-600">
            That's{" "}
            <span class="font-bold text-4xl">{requiredKilojoules()}</span> KJ or{" "}
            <span class="font-bold text-4xl">{requiredPizzaSlices()}</span> slices of pizza!
          </h1>
        </div>
      ) : (
        <div className="text-2xl text-gray-300 text-center">
          Enter all fields to get a result
        </div>
      )}
    </>
  );
}

export default Results;
