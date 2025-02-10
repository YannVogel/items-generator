import { WeaponType } from '@/enums/weapon/type';

// Définition du type basé sur le schéma existant
type BaseWeaponStats = {
  [key in WeaponType]: {
    attackDamages: [number, number];
    attackSpeed: [number, number];
    criticalStrikeChance: [number, number];
  };
};

// Définition des valeurs avec le bon typage
export const baseStats: BaseWeaponStats = {
  [WeaponType.SWORD]: {
    attackDamages: [6, 12],
    attackSpeed: [1.2, 1.6],
    criticalStrikeChance: [5, 12],
  },
  [WeaponType.DAGGER]: {
    attackDamages: [4, 8],
    attackSpeed: [1.6, 2.0],
    criticalStrikeChance: [8, 15],
  },
  [WeaponType.AXE]: {
    attackDamages: [10, 18],
    attackSpeed: [0.9, 1.2],
    criticalStrikeChance: [4, 10],
  },
  [WeaponType.MACE]: {
    attackDamages: [12, 20],
    attackSpeed: [0.7, 1.0],
    criticalStrikeChance: [2, 8],
  },
  [WeaponType.WAND]: {
    attackDamages: [5, 10],
    attackSpeed: [1.0, 1.4],
    criticalStrikeChance: [6, 12],
  },
  [WeaponType.STAFF]: {
    attackDamages: [8, 16],
    attackSpeed: [0.8, 1.2],
    criticalStrikeChance: [5, 10],
  },
  [WeaponType.BOW]: {
    attackDamages: [6, 14],
    attackSpeed: [1.4, 1.8],
    criticalStrikeChance: [7, 14],
  },
};
