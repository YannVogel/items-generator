import { z } from 'zod';

export enum WeaponType {
  SWORD = 'sword',
  DAGGER = 'dagger',
  AXE = 'axe',
  MACE = 'mace',
  WAND = 'wand',
  STAFF = 'staff',
  BOW = 'bow',
}

const WeaponTypeSchema = z.nativeEnum(WeaponType);

export const isValidItemType = (text?: string): text is WeaponType => {
  if (typeof text === 'undefined') {
    return false;
  }

  return WeaponTypeSchema.safeParse(text).success;
};
