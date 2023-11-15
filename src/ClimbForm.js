function ClimbForm({
  climbHeight,
  climbDistance,
  targetTime,
  setClimbHeight,
  setClimbDistance,
  setTargetTime,
}) {
  return (
    <>
      <form class="w-full">
        <div class="flex justify-center -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0 max-w-sm">
            <label
              class="text-left block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Climb Height (m)
            </label>
            <input
              class="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="400"
              onChange={(e) => setClimbHeight(Number(e.target.value))}
            />
          </div>
        </div>
        {/* <div class="flex justify-center -mx-3 mb-6">
                    <div class="w-full px-3 mb-6 md:mb-0 max-w-sm">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Distance (miles)
                        </label>
                        <input class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="2000"
                            onChange={(e) => setClimbDistance(Number(e.target.value))}
                        />
                    </div>
                </div> */}
        <div class="flex justify-center -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0 max-w-sm">
            <label
              class="text-left block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Target Time (min)
            </label>
            <input
              class="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder="20"
              onChange={(e) => setTargetTime(Number(e.target.value))}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default ClimbForm;
