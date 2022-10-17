import { useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import slides from "./slides";
import state from "../../common/state";
import Slideshow from "../../common/components/Slideshow";
import Swiper from "../../common/components/Swiper";
import Slide from "../../common/components/Slide";
import offers from "./offers";

export default function Home() {
  const setActiveNav = useSetRecoilState(state.activeNav);
  const [enableSwipe, setEnableSwipe] = useState(window.innerWidth >= 992);

  const onResize = async () => setEnableSwipe(window.innerWidth >= 992);

  // on mount
  useEffect(() => {
    setActiveNav("home");
    window.addEventListener("resize", onResize);
    // on unmount
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return enableSwipe ? (
    <Swiper childrenPerPage={1}>
      <Slideshow slides={slides} />
      <Slide slide={offers[0]} />
    </Swiper>
  ) : (
    <HomeDiv>
      <Slideshow slides={slides} />
      <Slide slide={offers[0]} />
    </HomeDiv>
  );
}

const HomeDiv = styled.div`
   display: grid;
   // align-content: space-between;
   align-content: start;
   grid-gap: 50%;
`;
