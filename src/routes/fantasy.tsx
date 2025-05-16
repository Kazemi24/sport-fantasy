import { createFileRoute } from "@tanstack/react-router";
import { Fantasy } from "../components/Fantasy";

export const Route = createFileRoute("/fantasy")({
  component: Fantasy,
});
