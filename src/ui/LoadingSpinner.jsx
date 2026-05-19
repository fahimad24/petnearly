import { Spinner } from "@heroui/react";

export const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center gap-4 py-20">
    <Spinner color="success" size="xl" />
    <span className="text-sm text-muted">Loading pets...</span>
  </div>
);
