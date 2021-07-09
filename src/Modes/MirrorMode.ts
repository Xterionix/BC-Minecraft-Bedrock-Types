import { ModeCollection } from "./ModeCollection";

export const MirrorMode: ModeCollection = {
  name: "Mirror mode",
  modes: [
    { name: "none", documentation: "Does not mirror the structure" },
    { name: "x", documentation: "Mirrors the structure using the x - axis as the mirror" },
    { name: "xz", documentation: "Mirrors the structure using the x - axis and z - axis as the mirror" },
    { name: "z", documentation: "Mirrors the structure using the z - axis as the mirror" },
  ],
};
