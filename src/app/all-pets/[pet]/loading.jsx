import { LoadingSpinner } from "@/ui/LoadingSpinner";

const Loading = () => {
  return (
    <main className="min-h-screen bg-backTone py-10">
      <div className="mx-auto max-w-5xl px-4">
        <LoadingSpinner />
      </div>
    </main>
  );
};

export default Loading;
