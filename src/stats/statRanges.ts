import { ItemRarity } from '@/enums/item/rarity';

// Définition du type pour les multiplicateurs de rareté
type RarityMultipliers = {
  [key in ItemRarity]: number;
};

// Définition du type pour les plages de bonus de dégâts
type DamageBonusRanges = {
  [key in ItemRarity]: [number, number];
};

// Multiplicateurs appliqués aux stats en fonction de la rareté
export const rarityMultipliers: RarityMultipliers = {
  [ItemRarity.LOW]: 0.8,
  [ItemRarity.NORMAL]: 1.0,
  [ItemRarity.MAGIC]: 1.2,
  [ItemRarity.RARE]: 1.5,
} as const;

// Plages de bonus de dégâts élémentaires et physiques par rareté
export const damageBonusRanges: DamageBonusRanges = {
  [ItemRarity.LOW]: [1, 3],
  [ItemRarity.NORMAL]: [2, 5],
  [ItemRarity.MAGIC]: [4, 8],
  [ItemRarity.RARE]: [6, 12],
} as const;

// Mapping du nombre de stats optionnelles en fonction de la rareté
export const rarityStatCountMap: Record<ItemRarity, [number, number]> = {
  [ItemRarity.LOW]: [0, 0],
  [ItemRarity.NORMAL]: [0, 1],
  [ItemRarity.MAGIC]: [1, 2],
  [ItemRarity.RARE]: [2, 4],
} as const;
