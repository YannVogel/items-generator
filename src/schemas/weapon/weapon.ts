import { z } from 'zod';
import { itemSchema } from '@/schemas/item';
import { WeaponType } from '@/enums/weapon/type';
import { optionalStatsSchema } from '@/schemas/weapon/optionalStats';

export const weaponSchema = z
  .object({
    type: z.nativeEnum(WeaponType),
    stats: z
      .object({
        attackDamages: z.number().int().min(1),
        attackSpeed: z.number().min(0),
        criticalStrikeChance: z.number().int().min(0).max(100),
      })
      .merge(optionalStatsSchema),
  })
  .merge(itemSchema);

export type Weapon = z.infer<typeof weaponSchema>;
