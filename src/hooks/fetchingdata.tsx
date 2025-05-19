import { API_KEY } from "../utils/api_key";

const apiKey = API_KEY;

export async function fetchData(url: string) {
  const response = await fetch(url, {
    headers: {
      "x-apisports-key": apiKey,
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  });
  if (!response.ok) {
    throw new Error("Something went wrong when fetching fixtures");
  }
  const data = await response.json();
  return data;
}
