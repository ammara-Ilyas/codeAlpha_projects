// "use client";
"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
interface ProgressType {
  width: number;
}
const ProgressBar: React.FC<ProgressType> = ({ width }) => {
  const [progress, setProgress] = React.useState(width);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(width), 3000);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-full" />;
};
export default ProgressBar;
