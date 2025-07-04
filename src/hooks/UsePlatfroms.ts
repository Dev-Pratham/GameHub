import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface platforms {
  id: number;
  name: string;
  slug: string;
}

interface FetchPlatformsResponse {
  count: number;
  results: platforms[];
}

const usePlatforms = () => {
  //creating hook to get platforms from local storage

  const [platforms, setPlatfroms] = useState<platforms[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchPlatformsResponse>("/platforms/lists/parents", {
        signal: controller.signal,
      })
      .then((response) => {
        setPlatfroms(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { platforms, error };
};

export default usePlatforms;
