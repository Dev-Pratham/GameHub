import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Genres } from "./UseGenres";
//seperation of concerns

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  description: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const UseGames = (
  selectedGenres: Genres | null,
  requestConfig?: AxiosRequestConfig
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", {
        params: { genres: selectedGenres?.id },
        signal: controller.signal,
        ...requestConfig,
      })
      .then((response) => {
        setGames(response.data.results);
        setloading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setloading(false);
      });

    return () => controller.abort();
  }, [selectedGenres]);

  return { games, error, loading };
};

export default UseGames;
