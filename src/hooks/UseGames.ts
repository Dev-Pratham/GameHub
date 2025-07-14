import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Genres } from "./UseGenres";
import { SortOption } from "@/components/SortSelector";
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
  ratings_count: number;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const UseGames = (
  //have passed the selected genres as a parameter because we want to refetch the games
  // whenever the selected genres change
  selectedGenres: Genres | null,
  selectedPlatforms: Platform | null,
  selectedSort: SortOption | null,
  searchTerm: string | "",
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
        // params: { genres: selectedGenres?.id },
        signal: controller.signal,
        ...requestConfig, //spread the request config to allow passing additional params
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
  }, [
    selectedGenres?.id,
    selectedPlatforms?.id,
    selectedSort?.value,
    searchTerm,
  ]);

  return { games, error, loading };
};

export default UseGames;
