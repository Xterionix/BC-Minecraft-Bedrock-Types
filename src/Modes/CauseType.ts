import { ModeCollection } from "./ModeCollection";

/** */
export const CauseTypeMode: ModeCollection = {
  name: "Cause Type",
  modes: [
    { name: "anvil", documentation: "Damage done by a falling anvil" },
    { name: "block_explosion", documentation: "Damage done by a exploding block" },
    { name: "charging", documentation: "Damage done by a charge attack" },
    { name: "contact", documentation: "Damage done by a contact" },
    { name: "drowning", documentation: "Damage done by drowning" },
    { name: "entity_attack", documentation: "Damage done by an attack from another entity" },
    { name: "entity_explosion", documentation: "Damage done by an explosion from another entity" },
    { name: "fall", documentation: "Damage done by falling from a height" },
    { name: "falling_block", documentation: "Damage done by falling block" },
    { name: "fire", documentation: "Damage done by fire" },
    { name: "fire_tick", documentation: "Damage done by fire tick" },
    { name: "fireworks", documentation: "Damage done by fireworks" },
    { name: "fly_into_wall", documentation: "Damage done by flying into a wall" },
    { name: "freezing", documentation: "Damage done by freezing" },
    { name: "lava", documentation: "Damage done by touching lava" },
    { name: "lightning", documentation: "Damage done by lightning" },
    { name: "magic", documentation: "Damage done by magic, dont question it" },
    { name: "magma", documentation: "Damage done by magma" },
    { name: "none", documentation: "Damage done by nothing" },
    { name: "override", documentation: "Damage done by something overriden" },
    { name: "piston", documentation: "Damage done by a moving piston" },
    { name: "projectile", documentation: "Damage done by a projectile" },
    { name: "stalactite", documentation: "Damage done by a stalactite" },
    { name: "stalagmite", documentation: "Damage done by a stalagmite" },
    { name: "starve", documentation: "Damage done by not eating enough" },
    { name: "suffocation", documentation: "Damage done by not breathing enough" },
    { name: "suicide", documentation: "Damage done by through suicide" },
    { name: "temperature", documentation: "Damage done by to much or to little temperature" },
    { name: "thorns", documentation: "Damage done by thorns" },
    { name: "void", documentation: "Damage done by the void" },
    { name: "wither", documentation: "Damage done by the wither effect" },
  ],
};
