const PostListSkeleton = () => {
  return (
    <div className="space-y-5">
      {/* Repeat skeleton for multiple posts */}
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="max-w-md mx-auto bg-white rounded-lg shadow-md my-5 py-2 animate-pulse"
        >
          {/* Header Skeleton */}
          <div className="flex items-center py-4 px-2">
            <div className="avatar placeholder">
              <div className="bg-gray-300 h-12 w-12 rounded-full"></div>
            </div>
            <div className="ml-3">
              <div className="bg-gray-300 h-4 w-24 rounded"></div>
            </div>
          </div>

          {/* Post Image Skeleton */}
          <div className="bg-gray-300 h-64 w-full"></div>

          {/* Interaction Icons Skeleton */}
          <div className="flex justify-between items-center py-2 px-2">
            <div className="flex space-x-3 justify-center items-center">
              <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
              <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
              <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
            </div>
          </div>

          {/* Likes and Caption Skeleton */}
          <div className="pb-2 px-2">
            <div className="bg-gray-300 h-4 w-16 rounded mb-2"></div>
            <div className="bg-gray-300 h-4 w-48 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostListSkeleton;
