import { ModeCollection } from "./ModeCollection";

export const CameraShakeMode: ModeCollection = {
  name: "Camera Shake modes",
  modes: [
    { name: "positional", documentation: "Shakes the camera using relatives position" },
    { name: "rotational", documentation: "Shakes the camera using rotations" },
  ],
};
