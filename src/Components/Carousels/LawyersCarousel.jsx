import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LawyerDisplayCard from "../Cards/LawyerDisplayCard";
import pic1 from "../../assets/JudgesOnly/jag.jpeg";
import pic2 from "../../assets/JudgesOnly/p3.jpeg";
import pic4 from "../../assets/JudgesOnly/p4.jpeg";
import pic3 from "../../assets/JudgesOnly/pi1.jpeg";

const LawyersCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const lawyersData = [
    {
      name: "Rita C. Stebbins",
      specialty: "Family Law",
      image: pic1,
      location: "London",
      tel: "+233-000-0000",
      address: "emock@gmail.com/street",
    },
    {
      name: "Carolann J. Thorsen",
      specialty: "Criminal Defense",
      image: pic2,
      location: "London",
      tel: "+233-000-0000",
      address: "emock@gmail.com/street",
    },
    {
      name: "Betty A. Powell",
      specialty: "Business Litigation",
      image: pic4,
      location: "London",
      tel: "+233-000-0000",
      address: "emock@gmail.com/street",
    },
  ];

  return (
    <div className="md:w-[100%] md:h-[100%] md:absolute  sm:w-[100%] sm:h-[100%] sm:absolute">
      <Carousel responsive={responsive} arrows>
        {lawyersData.map((lawyer) => {
          return (
            <div
              className="md:w-[27vw] md:h-[73vh] sm:w-[100vw] sm:h-[73vh]"
              style={{
                // width: "27vw",
                background: "blue",
                // height: "73vh",
              }}
            >
              {" "}
              <LawyerDisplayCard
                name={lawyer.name}
                position={lawyer.specialty}
                Image={lawyer.image}
                location={lawyer.location}
                phoneNumber={lawyer.tel}
                email={lawyer.address}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default LawyersCarousel;
