import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import img1 from "./../../../Images/slider1.png";
import img2 from "./../../../Images/slider2.jpg";
import img3 from "./../../../Images/slider3.jpg";
import img4 from "./../../../Images/slider4.jpg";
import img5 from "./../../../Images/slider5.jpg";
import img6 from "./../../../Images/slider6.png";
const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: img3,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 3,
  },
  {
    src: img4,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 4,
  },
  {
    src: img5,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 5,
  },
  {
    src: img6,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 6,
  },
];

function Crousal(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="w-100" />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Crousal;
