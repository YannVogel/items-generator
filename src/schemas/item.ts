import { z } from 'zod';
import { ItemRarity } from '@/enums/item/rarity';

export const itemSchema = z.object({
  name: z.string(),
  rarity: z.nativeEnum(ItemRarity),
  image: z.string(),
});
