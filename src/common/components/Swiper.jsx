import PropTypes from "prop-types";
import { Children, useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styled from "@emotion/styled";
import _ from "lodash";
import downIcon from "../assets/icons/down-64x64.png";

const incr = async (value, length) => (value < length - 1 ? value + 1 : value);
const decr = async (value) => (value === 0 ? 0 : value - 1);

const propTypes = {
  children: PropTypes.node.isRequired,
  childrenPerPage: PropTypes.number.isRequired,
};

export default function Swiper({ children, childrenPerPage }) {
  const ref = useRef();
  const [index, setIndex] = useState(0);
  const pages = _.chunk(Children.toArray(children), childrenPerPage);

  const onWheel = async ({ deltaY }) => setIndex(
    deltaY > 0
      ? await incr(index, pages.length)
      : await decr(index)
  );

  useEffect(() => ref.current.scrollTo(index), [index]);

  const toOne = async () => setIndex(1);

  return (
    <SwiperDiv onWheel={onWheel}>
      <Parallax ref={ref} pages={pages.length} enabled={false}>
        {pages.map((child, i) => (
          <ParallaxLayer key={i} offset={i}>
            {child}
          </ParallaxLayer>
        ))}
      </Parallax>
      <DownImg
        className="icon animate__animated animate__delay-1s animate__shakeY"
        src={downIcon}
        onClick={toOne}
        hidden={pages.length < 2 || index}
      />
    </SwiperDiv>
  );
}

Swiper.propTypes = propTypes;

const SwiperDiv = styled.div`
  position: relative;
  
  & div {
    margin-bottom: 1em;
  }
`;

const DownImg = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 50%;
  border-radius: 100%;
  padding: .5em;
  width: calc(3vh + 3vw);
  height: calc(3vh + 3vw);
  
  &:hover {
    background-color: var(--bg-opac-75);
  }
`;
