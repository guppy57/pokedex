export default function SearchBar(): JSX.Element {
  return (
    <form className="mt-4 lg:max-w-screen-md md:max-w-screen-sm sm:mx-auto sm:flex max-w-screen-md">
      <div className="min-w-0 flex-1">
        <label htmlFor="url" className="sr-only">
          Search Query
        </label>
        <input
          id="url"
          type="text"
          name="query"
          required
          className="block w-full rounded-md border px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-hyper-blue-primary"
          placeholder="Search for a Pokemon..."
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-3">
        <button className="block w-full rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-red-400 sm:px-10">
          Search
        </button>
      </div>
    </form>
  );
}
