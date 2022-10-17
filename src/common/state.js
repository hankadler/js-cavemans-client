import { atom } from "recoil";

const activeNav = atom({
  key: "activeNav",
  default: window.location.pathname.slice(1).split("/")[0]
});

const user = atom({
  key: "user",
  default: ""
});

const state = { activeNav, user };

export default state;
