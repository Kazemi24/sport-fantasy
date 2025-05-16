import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-red-700">
        Welcome to Sport Fantasy
      </h1>
    </div>
  );
}
