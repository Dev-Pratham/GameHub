import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import genres from "@/data/genres";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}
const UseGenres = () => {
  // const [genres, setGeners] = useState<Genres[]>([]);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   const controller = new AbortController();
  //   apiClient
  //     .get<FetchGenresResponse>("/genres", { signal: controller.signal })
  //     .then((response) => {
  //       setLoading(false);
  //       setGeners(response.data.results);
  //     })
  //     .catch((error) => {
  //       if (error instanceof Error) return;
  //       setError(error.message);
  //       setLoading(false);
  //     });
  //   ``;

  //   return () => controller.abort();
  // }, []);

  // return { genres, error, loading };
  //This is for static data
  //We will not use the apiClient here
  return { genres: genres, error: null, loading: false };
};

export default UseGenres;

//now creating genere list component
