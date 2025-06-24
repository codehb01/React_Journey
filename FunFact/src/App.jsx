import React from "react";
import { useEffect } from "react";
import { useState } from "react";

/**
 * A React component that fetches a random fun fact from the uselessfacts API,
 * displaying it in a pink box with a loading indicator and error message if
 * necessary.
 *
 * State:
 *
 * - facts: the text of the fun fact, initially an empty string
 * - loading: whether the component is currently loading a fact, initially true
 * - error: any error message, initially null
 *
 * Side effects:
 *
 * - fetches a random fact from the API on mount
 *
 * Props: none
 *
 * Returns a JSX element containing a pink box with a heading, a loading
 * indicator, an error message, and/or a box containing the fun fact.
 */
function App() {
  const [facts, setFacts] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en"
        );
        if (!response.ok) throw new Error("Error in fetching facts");
        const factsData = await response.json();
        setFacts(factsData);
        setError(null);
      } catch (error) {
        setError(error.message);
        setFacts("");
      } finally {
        setLoading(false);
      }
    };
    fetchFacts();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-800">
      <div className="bg-pink-400 max-w-md p-10 w-full rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Fun Fact</h1>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-900">{error}</p>}
        {!loading && !error && (
          <div className="bg-white p-4 rounded shadow-md hover:bg-gray-100 transition">
            <p className="font-semibold">{facts.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
