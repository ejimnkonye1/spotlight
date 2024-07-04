import React, { useState } from 'react';
import axios from 'axios';

const GeminiMovieSearch = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

       const apiKey = 'AIzaSyCDFdpqOUoEXqDj_b9gDdM7LApK9nLkx1M'
  const apiUrl = `https://api.gemini.com/v1/movies/search?api_key=${apiKey}&query=${query}`;

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(apiUrl);
      const result = response.data.movies.slice(0, 10); // Adjust based on the actual response structure
      setSearchResults(result);
      console.log('Search results:', response.data.movies); // Adjust based on the actual response structure
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Gemini Movie Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        ) : (
          !loading && <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default GeminiMovieSearch;
