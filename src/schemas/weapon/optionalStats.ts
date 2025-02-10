import { z } from 'zod';

export const optionalStatsSchema = z.object({
  addedPhysicalDamages: z
    .tuple([z.number().int(), z.number().int()])
    .optional(),
  addedFireDamages: z.tuple([z.number().int(), z.number().int()]).optional(),
  addedIceDamages: z.tuple([z.number().int(), z.number().int()]).optional(),
  addedLightningDamages: z
    .tuple([z.number().int(), z.number().int()])
    .optional(),
});

export type OptionalStats = z.infer<typeof optionalStatsSchema>;

// Extraction dynamique des clés du schéma
type OptionalStatsKeys = keyof OptionalStats;

export const getRandomStatKeys = (count: number): OptionalStatsKeys[] => {
  const keys = Object.keys(optionalStatsSchema.shape) as OptionalStatsKeys[];
  const maxCount = Math.min(count, keys.length);

  // Mélange des clés et sélection des `maxCount` premiers éléments
  return keys
    .sort(() => Math.random() - 0.5) // Mélange aléatoire
    .slice(0, maxCount);
};
