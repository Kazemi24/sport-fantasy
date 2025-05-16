import { createFileRoute } from "@tanstack/react-router";
import { FixturesTable } from "../components/FixturesTable";

export const Route = createFileRoute("/fixturetable")({
  component: FixturesTable,
});
