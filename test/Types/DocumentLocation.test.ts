import { expect } from "chai";
import { DocumentLocation, Position } from "../../src/Types";

const jsonData = `{
  "format_version": "1.17.0",
  "minecraft:entity": {
    "description": {
      "identifier": "example:foo",
      "is_spawnable": true,
      "is_summonable": true
    },
    "component_groups": {},
    "components": {
      "minecraft:type_family": { "family": ["foo"] },
      "minecraft:health": { "value": 10, "max": 10 },
      "minecraft:damage_sensor": {
        "triggers": { "cause": "all", "deals_damage": false }
      }
    },
    "events": {}
  }
}
`;

const identifierKey = "identifier";
const identifierPos = Position.create(4, 7);
const identifierOffset = jsonData.indexOf(identifierKey);

const jsonWrapper = {
  getText(): string {
    return jsonData;
  },
};

describe("DocumentLocation", () => {
  it("Const Check", () => {
    const p = jsonData.slice(identifierOffset, identifierKey.length + identifierOffset);

    expect(p).to.equal(p);
  });

  it("toOffset - number", () => {
    //Rolled 10d20 = 72
    for (var I = 0; I < 1000; I += 72) {
      const offset = DocumentLocation.toOffset(I, jsonData);

      expect(offset).to.equal(I);
    }
  });

  it("toOffset - number2", () => {
    //Rolled 10d20 = 72
    for (var I = 0; I < 1000; I += 72) {
      const offset = DocumentLocation.toOffset(I, jsonWrapper);

      expect(offset).to.equal(I);
    }
  });

  it("toOffset - JsonPath", () => {
    const offset = DocumentLocation.toOffset("minecraft:entity/description/identifier", jsonData);

    expect(offset).to.equal(identifierOffset);
  });

  it("toOffset - Position", () => {
    const offset = DocumentLocation.toOffset({ character: 7, line: 4 }, jsonData);

    expect(offset).to.equal(identifierOffset);
  });

  it("toPosition - JsonPath", () => {
    const P = DocumentLocation.toPosition("minecraft:entity/description/identifier", jsonData);

    expect(P).to.eql(identifierPos);
  });

  it("toPosition - JsonPath", () => {
    const P = DocumentLocation.toPosition(identifierPos, jsonData);

    expect(P).to.eql(identifierPos);
  });

  it("toPosition - offset", () => {
    const P = DocumentLocation.toPosition(identifierOffset, jsonData);

    expect(P).to.eql(identifierPos);
  });
});
