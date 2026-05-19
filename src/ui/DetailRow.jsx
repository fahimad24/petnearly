import { cn } from "@heroui/styles";

export const DetailRow = ({ label, value, className }) => {
  return (
    <div>
      <div className="text-xs text-gray-500">{label}</div>
      <div className={cn("font-medium text-gray-800", className)}>{value}</div>
    </div>
  );
};
