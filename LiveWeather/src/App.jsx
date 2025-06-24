import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]); //storing user data
  const [loading, setLoading] = useState(true); //loading status
  const [error, setError] = useState(null); //error status

  // to fetch data useEffect

  /**
   * Fetches user data from a public API and updates the component state.
   * Sets loading status while data is being fetched, populates the users
   * state with the fetched data on success, or sets an error message on failure.
   * Resets the loading status once the operation is complete.
   */

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) throw new Error("Error in fetching User data!");
        const userData = await response.json();
        setUsers(userData);
        setError(null);
      } catch (error) {
        setError(error.message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-blue-100 max-w-md w-full p-10 rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-4">User List</h1>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading && !error && (
          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user.id}
                className="bg-white p-4 rounded shadow-md hover:bg-gray-100 transitio"
              >
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-700">{user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
