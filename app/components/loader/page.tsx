import { Loader2 } from "lucide-react";

export function LoadingComponent() {
  return (
    <div className="flex justify-center items-center h-64">
      <Loader2 className="animate-spin h-8 w-8 text-gray-600 font-semibold" />
    </div>
  );
}
