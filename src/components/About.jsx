import React, { useState } from "react";
import ImageSkeleton from "../Skeleton/ImageSkeleton";

const About = () => {
  const [loading, setLoading] = useState(true);
  return (
    <section className="bg-white">
      <div className="gap-14 items-center py-6 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-20 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            About Us
          </h2>
          <p className="mb-4">
            Welcome to HS Web, a platform where creativity meets community!
            Here, we celebrate the power of visuals—whether through stunning
            photography, captivating videos, or inspiring artwork. Our mission
            is to provide a space for everyone to share their stories, passions,
            and unique perspectives through images. Join a global community of
            creators, explorers, and storytellers. Whether you're here to
            showcase your talents,HS is the perfect place to express yourself
            and get inspired.
          </p>
          <p>
            Feel free to personalize it further with your website's name or any
            unique features your platform offers!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {loading && <ImageSkeleton />}
          <img
            className="w-full rounded-lg"
            onLoad={() => setLoading(false)}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            onLoad={() => setLoading(false)}
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
