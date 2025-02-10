import { z } from 'zod';

export enum ItemRarity {
  LOW = 'low',
  NORMAL = 'normal',
  MAGIC = 'magic',
  RARE = 'rare',
  //UNIQUE = 'unique',
}

const ItemRaritySchema = z.nativeEnum(ItemRarity);

export const isValidItemRarity = (text?: string): text is ItemRarity => {
  if (typeof text === 'undefined') {
    return false;
  }

  return ItemRaritySchema.safeParse(text).success;
};
