function RiderForm({ riderWeight, setRiderWeight }) {
  return (
    <form className="w-full">
      <div class="flex justify-center -mx-3 mb-6">
        <div class="w-full px-3 mb-6 md:mb-0 max-w-sm">
          <label
            className="text-left block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-weight"
          >
            Rider Weight (kg)
          </label>
          <input
            className="appearance-none block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-weight"
            type="number"
            placeholder="190"
            onChange={(e) => setRiderWeight(Number(e.target.value))}
          />
        </div>
      </div>
    </form>
  );
}

export default RiderForm;
