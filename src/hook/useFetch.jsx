"use client";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getComments = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(url);
        const data = await res.json();
        setData(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getComments();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
