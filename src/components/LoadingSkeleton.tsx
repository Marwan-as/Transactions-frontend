import React from "react";

interface LoadingSkeletonProps {
  className: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 animate-pulse ${className}`}>
      <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
      <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
      <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
    </div>
  );
};

export default LoadingSkeleton;
