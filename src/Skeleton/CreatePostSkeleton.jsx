import React from "react";

const CreatePostSkeleton = () => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <div className="h-6 w-40 bg-gray-300 animate-pulse mb-4"></div>

      {/* Form Skeleton */}
      <div className="space-y-4">
        {/* Textarea Skeleton */}
        <div className="h-24 w-full bg-gray-300 rounded-md animate-pulse"></div>

        {/* Image Input Skeleton */}
        <div className="h-10 w-full bg-gray-300 rounded-md animate-pulse"></div>

        {/* Image Preview Skeleton */}
        <div className="w-full h-40 bg-gray-300 rounded-md animate-pulse"></div>

        {/* Button Skeleton */}
        <div className="w-full h-10 bg-gray-300 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};

export default CreatePostSkeleton;
