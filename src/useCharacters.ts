import { useState, useEffect } from "react";

export default function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://breakingbadapi.com/api/characters`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Negative response code received`);
        }

        return res.json();
      })
      .then((result) => {
        setLoading(false);
        setCharacters(result);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return {
    characters,
    error,
    loading,
  };
}
