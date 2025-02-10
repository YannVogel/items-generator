import { WeaponType } from '@/enums/weapon/type';
import { ItemRarity } from '@/enums/item/rarity';
import { baseStats } from '@/stats/baseStats';
import {
  damageBonusRanges,
  rarityMultipliers,
  rarityStatCountMap,
} from '@/stats/statRanges';
import { Weapon } from '@/schemas/weapon/weapon';
import { getRandomInRange } from '@/utils/getRandomInRange';
import {
  getRandomStatKeys,
  OptionalStats,
} from '@/schemas/weapon/optionalStats';

// Fonction de génération d'une arme avec typage correct
export const generateWeapon = (
  type: WeaponType,
  rarity: ItemRarity,
): Weapon => {
  const base = baseStats[type];
  const multiplier = rarityMultipliers[rarity];

  // Déterminer le nombre de stats optionnelles en fonction de la rareté
  const [minStats, maxStats] = rarityStatCountMap[rarity];
  const statCount = getRandomInRange(minStats, maxStats);

  // Sélection aléatoire des stats optionnelles
  const optionalStatKeys = getRandomStatKeys(statCount);
  const optionalStats: Partial<OptionalStats> = {};

  optionalStatKeys.forEach((statKey) => {
    // Utiliser les plages de bonus en fonction de la rareté
    const [minBonus, maxBonus] = damageBonusRanges[rarity];

    optionalStats[statKey] = [
      getRandomInRange(minBonus, Math.floor(maxBonus * 0.8)), // Valeur min ajustée
      getRandomInRange(Math.ceil(minBonus * 1.2), maxBonus), // Valeur max ajustée
    ];
  });

  return {
    type,
    rarity,
    name: `${rarity} ${type}`,
    image: '',
    stats: {
      attackDamages: getRandomInRange(
        Math.floor(base.attackDamages[0] * multiplier),
        Math.floor(base.attackDamages[1] * multiplier),
      ),
      attackSpeed: parseFloat(
        (
          base.attackSpeed[0] +
          Math.random() * (base.attackSpeed[1] - base.attackSpeed[0])
        ).toFixed(2),
      ),
      criticalStrikeChance: getRandomInRange(
        Math.floor(base.criticalStrikeChance[0] * multiplier),
        Math.floor(base.criticalStrikeChance[1] * multiplier),
      ),
      ...optionalStats, // Ajout des stats optionnelles générées
    },
  };
};

// Tests de génération d'armes
console.log(generateWeapon(WeaponType.SWORD, ItemRarity.NORMAL));
console.log(generateWeapon(WeaponType.AXE, ItemRarity.MAGIC));
console.log(generateWeapon(WeaponType.STAFF, ItemRarity.RARE));
