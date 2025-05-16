import { createFileRoute } from "@tanstack/react-router";
import { LeagueTable } from "../components/LeagueTable";

export const Route = createFileRoute("/leaguetable")({
  component: LeagueTable,
});
