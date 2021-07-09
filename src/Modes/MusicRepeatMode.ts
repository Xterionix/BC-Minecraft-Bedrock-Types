import { ModeCollection } from "./ModeCollection";

export const MusicRepeatMode: ModeCollection = {
  name: "Music Repeat Mode",
  modes: [
    { name: "loop", documentation: "Loops the given track" },
    { name: "play_once", documentation: "Only plays the given track once" },
  ],
};
