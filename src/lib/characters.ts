/** Public character slugs. These URLs identify artwork, not authenticated users. */
export const CHARACTERS = {
  misterfrances: { name: "MisterFrances", file: "potato.png" },
  jems: { name: "Jems", file: "jems.png" },
  hicham: { name: "Hicham", file: "hicham.png" },
  hugo: { name: "Hugo", file: "hugo.png" },
  faster: { name: "Faster", file: "faster.png" },
  sobedo: { name: "Sobedo", file: "sobedo.png" },
  "monsieur-patate": { name: "Monsieur Patate", file: "monsieur-patate.png" },
} as const;

export type CharacterSlug = keyof typeof CHARACTERS;

export function getCharacterFromQuery(value: string | null): CharacterSlug {
  if (value && Object.prototype.hasOwnProperty.call(CHARACTERS, value)) {
    return value as CharacterSlug;
  }
  return "misterfrances";
}
