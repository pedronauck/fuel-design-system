/* eslint-disable no-plusplus */
const SIZES = {
  xsm: 24,
  sm: 32,
  md: 40,
  lg: 52,
  xl: 80,
  '2xl': 100,
};

function getFixedGradientDirection(hash: string) {
  const sum = hash
    .slice(4, 7)
    .split('')
    .reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);

  return `${sum}deg`;
}

function hashToGradient(hash: string): string {
  let fixedHex = '';
  for (let i = 0; i < hash.length; i++) {
    const char = hash.charAt(i);
    if (/\d/.test(char)) {
      fixedHex += char;
    }
  }

  const color1 = fixedHex.slice(0, 6);
  const color2 = fixedHex.slice(6, 12);
  const direction = getFixedGradientDirection(hash);
  return `linear-gradient(${direction}, #${color1}, #${color2})`;
}

type UseAvatarGeneratedProps = {
  hash?: string;
  size: string;
};

export function useAvatarGenerated({ hash, size }: UseAvatarGeneratedProps) {
  const totalSize = SIZES[size];
  const background = hashToGradient(hash!);

  return {
    background,
    totalSize,
  };
}
