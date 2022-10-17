import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Slide from "./Slide";
import Overlay from "./Overlay";
import SlideNav from "./SlideNav";
import SlidePag from "./SlidePag";

const propTypes = {
  slides: PropTypes.instanceOf(Array).isRequired,
};

export default function Slideshow({ slides }) {
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(slides[0]);

  const onPrev = async () => setIndex(index - 1 < 0 ? slides.length - 1 : index - 1);
  const onNext = async () => setIndex(index + 1 === slides.length ? 0 : index + 1);

  useEffect(() => setSlide(slides[index]), [index]);

  return (
    <Overlay>
      <Slide slide={slide} />
      <SlideNav onPrev={onPrev} onNext={onNext} />
      <SlidePag index={index} setIndex={setIndex} length={slides.length} />
    </Overlay>
  );
}

Slideshow.propTypes = propTypes;
