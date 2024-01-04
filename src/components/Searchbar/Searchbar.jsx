/* eslint-disable react/prop-types */
const Searchbar = ({ location, setLocation, searchLocation }) => {
  return (
    <>
      <form className="w-1/2 m-auto max-lg:w-full">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 text-gray-200 ps-10 bg-gray-900 rounded-full "
            placeholder="Search country name..."
            required
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
          />
          <button
            type="submit"
            className="text-black font-extrabold absolute end-2.5 bottom-2.5   text-xl bg-red-100 rounded-full px-4 py-2  "
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Searchbar;
