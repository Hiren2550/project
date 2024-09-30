import React from "react";

const ProfileSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Profile Header Skeleton */}
      <div className="flex items-center mb-6 border-b border-gray-300 pb-4">
        {/* Avatar Skeleton */}
        <div className="w-24 h-24 rounded-full bg-gray-300 animate-pulse"></div>
        <div className="ml-4 flex-grow mt-5">
          <div className="w-48 h-6 bg-gray-300 animate-pulse mb-2"></div>
          <div className="w-28 h-8 bg-gray-300 animate-pulse rounded mt-2"></div>
          <div className="flex mt-2 space-x-6">
            <span className="w-16 h-6 bg-gray-300 animate-pulse"></span>
            <span className="w-16 h-6 bg-gray-300 animate-pulse"></span>
          </div>
          <div className="mt-2 w-64 h-4 bg-gray-300 animate-pulse"></div>
        </div>
      </div>

      {/* Tabs Navigation Skeleton */}
      <div className="flex space-x-4 border-b border-gray-300 mb-4">
        <span className="w-20 h-6 bg-gray-300 animate-pulse"></span>
        <span className="w-20 h-6 bg-gray-300 animate-pulse"></span>
      </div>

      {/* Posts Grid Skeleton */}
      <div className="grid grid-cols-3 gap-4">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="relative w-full h-0 pb-[100%] bg-gray-300 animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSkeleton;
