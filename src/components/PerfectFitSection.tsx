import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CarouselItem {
  id: number;
  name: string;
  quote: string;
  image: string;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4, // Changed to 4 for super large desktop
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4, // Set to 4 for desktop
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PerfectFitSection: React.FC = () => {
  const items: CarouselItem[] = [
    {
      id: 1,
      name: "Vela",
      quote: "ClickUp made our production team two-thirds more efficient.",
      image: "../../assets/img/collaborate.png",
    },
    {
      id: 2,
      name: "Convene",
      quote: "We have all of our tasks in one place.",
      image: "../../assets/img/collaborate.png",
    },
    {
      id: 3,
      name: "DIGGS",
      quote: "ClickUp is serving us so we can serve our pet guardians.",
      image: "../../assets/img/collaborate.png",
    },
    {
      id: 4,
      name: "Finance",
      quote: "It's a lot easier to manage.",
      image: "../../assets/img/collaborate.png",
    },
  ];

  return (
    <div className="carousel-container my-10">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={false} // Set to false to hide tracking dots
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px" // This can help with spacing
      >
        {items.map((item) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <div
              key={item.id}
              className="carousel-item relative flex flex-col justify-end bg-cover bg-center rounded-lg h-96 p-4 mx-2" // Add margin to create space
              style={{ backgroundImage: `url(${item.image})` }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundColor: "white",
                }}
              />
              <div className={`relative z-10 text-center transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"} mb-4`}>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-lg italic mt-2">{item.quote}</p>
              </div>
              <div className={`relative z-10 transition-opacity duration-300 bg-transparent ${isHovered ? "opacity-100" : "opacity-0"} mb-4`}>
                <button className="bg-white text-black py-2 px-4 rounded-lg border-gray-300 border-[1px]">
                  Play Video
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default PerfectFitSection;
