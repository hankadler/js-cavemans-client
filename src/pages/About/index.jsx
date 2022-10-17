import { useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import slides from "./slides";
import state from "../../common/state";
import Swiper from "../../common/components/Swiper";
import Slide from "../../common/components/Slide";

const getItemsPerPage = () => {
  if (window.innerWidth > 992) return 1;
  if (window.innerWidth > 768) return 2;
  return 3;
};

export default function About() {
  const setActiveNav = useSetRecoilState(state.activeNav);
  const [childrenPerPage, setChildrenPerPage] = useState(getItemsPerPage());

  const onResize = async () => setChildrenPerPage(getItemsPerPage());

  // on mount
  useEffect(() => {
    setActiveNav("about");
    window.addEventListener("resize", onResize);
    // on unmount
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Swiper childrenPerPage={childrenPerPage}>
      <Slide slide={slides[0]} />
      <Slide slide={slides[1]} />
      <Slide slide={slides[2]} />
    </Swiper>
  );
}
