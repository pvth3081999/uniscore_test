import React from "react";

type Props = {
  hieght?: string;
  pt?: string;
  width?: number;
};

export const Loading = ({ hieght = "4", pt = "2", width = 100 }: Props) => {
  return (
    <div className={`space-y-4 pt-${pt}`}>
      <div
        className={`h-${hieght} bg-gray-200/15 animate-pulse rounded-md opacity-25`}
        style={{ width: `${width}px` }}
      ></div>
    </div>
  );
};

export const SpinnerLoading = () => {
  return (
    <div className="flex justify-center">
      <div className="animate-spin rounded-full border-4 border-t-transparent border-gray-500 w-6 h-6"></div>
    </div>
  );
};
