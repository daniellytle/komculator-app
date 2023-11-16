import { useState, useEffect } from "react";

import { useDebounce } from "usehooks-ts";
import { useQuery } from "react-query";

const StravaSegmentSearch = ({
  setClimbHeight,
  setTargetTime
}) => {

  const [segmentId, setSegmentId] = useState(null)
  const [segmentTitle, setSegmentTitle] = useState(null)

  const debouncedSegmentId = useDebounce(segmentId, 500)

  const getSegmentData = async () => {
		const res = await fetch(`https://strava.com/stream/segment/${debouncedSegmentId}`, {
      mode: "no-cors"
    });
		return res.json();
	};

  const { isLoading, isError, data, error } = useQuery({
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    retry: false,
    queryKey: [debouncedSegmentId],
    queryFn: getSegmentData,
  })

  return (
    <div class="flex justify-center -mx-3 mb-3">
      <div class="w-full px-3 mb-6 md:mb-0 max-w-sm">
        <label
          class="text-left block uppercase tracking-wide text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          Enter <span className="text-orange-500">Strava Segment ID</span>
        </label>
        <input
          class="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Segment URL"
          onChange={(e) => setSegmentId(e.target.value)}
        />
        {isError && <span className="text-red-400">{error.message}</span>}
        {isLoading && <span className="text-gray-300">Loading..</span>}
      </div>
    </div>
  )
}

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
        {/* <StravaSegmentSearch
          setClimbHeight={setClimbHeight}
          setTargetTime={setTargetTime}
        /> */}
        <div class="flex justify-center -mx-3 mb-3">
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
