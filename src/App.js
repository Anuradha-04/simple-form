import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
      <div className="bg-white p-5 shadow-lg rounded w-full max-w-lg">
        <h2 className="text-4xl font-bold mb-4 text-center">Edit address </h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-800 mb-2" >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-2">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-2">
              Billing Address
            </label>
            <input
              className="w-full p-[10%] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="billingAddress"
              placeholder="Address"
            />
          </div>
          <div className='flex'>
          <button
            className="w-full border mr-2 border-black shadow-inner py-2 rounded hover:bg-blue-600 "
            type="submit"
          >
            Cancel
          </button>
          <button
            className="w-full shadow-inner bg-purple-900 text-white py-2 rounded hover:bg-purple-600  focus:ring-opacity-50"
            type="submit"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
