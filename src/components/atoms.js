import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const bookmarkState = atom({
  key: "bookmark",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const itemState = atom({
  key: "item",
  default: [],
});
