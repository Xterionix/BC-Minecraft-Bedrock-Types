import { CameraShakeMode } from "./CameraShake";
import { CloneMode } from "./Clone";
import { DifficultyMode } from "./Difficulty";
import { FillMode } from "./Fill";
import { GameMode } from "./GameMode";
import { LocateFeatureMode } from "./LocateFeature";
import { MaskMode } from "./Mask";
import { MirrorMode } from "./Mirror";
import { ModeHandler } from "./ModeHandler";
import { MusicRepeatMode } from "./MusicRepeat";
import { OldBlockMode } from "./OldBlock";
import { OperationMode } from "./Operation";
import { ReplaceMode } from "./Replace";
import { RideFillMode } from "./RideFill";
import { RideRulesMode } from "./RideRules";
import { RotationMode } from "./Rotation";
import { SaveMode } from "./Save";
import { SelectorAttributeMode } from "./SelectorAttribute";
import { SelectorTypeMode } from "./SelectorType";
import { SlotTypeModes } from "./SlotType";
import { StructureAnimationMode } from "./StructureAnimation";
import { TeleportRulesMode } from "./TeleportRules";

/**The collection of modes for minecraft */
export namespace Modes {
  /** The mode: CameraShake **/
  export const CameraShake = new ModeHandler(CameraShakeMode);
  /** The mode: Clone **/
  export const Clone = new ModeHandler(CloneMode);
  /** The mode: Difficulty **/
  export const Difficulty = new ModeHandler(DifficultyMode);
  /** The mode: Fill **/
  export const Fill = new ModeHandler(FillMode);
  /** The mode: Gamemode **/
  export const Gamemode = new ModeHandler(GameMode);
  /** The mode: LocateFeature **/
  export const LocateFeature = new ModeHandler(LocateFeatureMode);
  /** The mode: Mask **/
  export const Mask = new ModeHandler(MaskMode);
  /** The mode: Mirror **/
  export const Mirror = new ModeHandler(MirrorMode);
  /** The mode: MusicRepeat **/
  export const MusicRepeat = new ModeHandler(MusicRepeatMode);
  /** The mode: OldBlock **/
  export const OldBlock = new ModeHandler(OldBlockMode);
  /** The mode: Operation **/
  export const Operation = new ModeHandler(OperationMode);
  /** The mode: Replace **/
  export const Replace = new ModeHandler(ReplaceMode);
  /** The mode: RideFill **/
  export const RideFill = new ModeHandler(RideFillMode);
  /** The mode: RideRules **/
  export const RideRules = new ModeHandler(RideRulesMode);
  /** The mode: Rotation **/
  export const Rotation = new ModeHandler(RotationMode);
  /** The mode: Save **/
  export const Save = new ModeHandler(SaveMode);
  /** The mode: Selector Attribute **/
  export const SelectorAttribute = new ModeHandler(SelectorAttributeMode);
  /** The mode: Selector Type **/
  export const SelectorType = new ModeHandler(SelectorTypeMode);
  /** The mode: Selector Type **/
  export const SlotType = new ModeHandler(SlotTypeModes);
  /** The mode: StructureAnimation **/
  export const StructureAnimation = new ModeHandler(StructureAnimationMode);
  /** The mode: TeleportRules **/
  export const TeleportRules = new ModeHandler(TeleportRulesMode);
}
