import { atom } from "recoil";

export const activeLickState = atom<string>({
  key: "activeLinkState",
  default: "/",
});

export const toggleSidebarState = atom<boolean>({
  key: "toggleSidebarState",
  default: true,
});
