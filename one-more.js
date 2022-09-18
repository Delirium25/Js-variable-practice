let ashwiniTheDruid = {
  name: "Ashwini",
  class: {
    name: "druid",
    possibleRoles: [tank, healer, damage],
  },
  choosenRole: "damage",
  specialization: "balance",
  level: 60,
  faction: "Alliance",
  race: "Night Elf",
  knownSpells: [
    {
      spellName: "Sunfire",
      rangeInYards: 40,
      castTime: "instant",
      formsToCast: ["Tree of Life", "Moonkin"],
    },
    {
      spellName: "Wrath",
      rangeInYards: 40,
      castTimeInSec: 1.5,
      formsToCast: ["Moonkin"],
    },
  ],
};
