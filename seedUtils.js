export class SeededRandom {
  constructor(seed) {
    this.seed = seed % 2147483647;
    if (this.seed <= 0) this.seed += 2147483646;
  }

  next() {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }

  nextInt(min, max) {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }
}

export function hashStringToNumber(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; 
  }
  return Math.abs(hash);
}

export function valueToString({ gold, silver, copper }) {
  const parts = [];
  if (gold > 0) parts.push(`${gold}gp`);
  if (silver > 0) parts.push(`${silver}sp`);
  if (copper > 0) parts.push(`${copper}cp`);
  return parts.join(', ') || '0cp';
}

export function formatTreasureValue(totalCopper) {
  const gold = Math.floor(totalCopper / 100);
  const silver = Math.floor((totalCopper % 100) / 10);
  const copper = totalCopper % 10;
  return { gold, silver, copper };
}
