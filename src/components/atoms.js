import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const data = atom({
  key: "product",
  default: [],
});

export const bookmarkState = atom({
  key: "bookmark",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
