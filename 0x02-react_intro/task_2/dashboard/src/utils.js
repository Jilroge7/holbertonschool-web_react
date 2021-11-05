export function getFullYear(): number {
  return 2021;
}

export function getFooterCopy(isIndex: boolean): string {
  if (isIndex) return 'Holberton School';
  else return 'Holberton School main dashboard';
}