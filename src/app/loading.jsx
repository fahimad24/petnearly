import Image from "next/image";
import { PiPawPrintFill } from "react-icons/pi";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-backTone">
      <div className="relative flex items-center justify-center">
        <div className="absolute top-0 left-0 flex items-center justify-center">
          <div className="w-21 h-21 rounded-full border-4 border-accent/30 border-t-accent animate-spin" />
        </div>

        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
          <PiPawPrintFill size={60} className="text-accent" />
        </div>
      </div>

      <p className="mt-6 text-sm text-light-text">Loading...</p>
    </div>
  );
}
