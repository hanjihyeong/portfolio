import { atom } from "recoil";

export const activeLickState = atom<string>({
  key: "activeLinkState",
  default: "/",
});
