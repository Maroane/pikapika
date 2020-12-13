export function getIconsUrlFromTypes(types: string[]): string[] {
  return types.map((type) => {
    return getIconUrlFromType(type);
  });
}

export function getIconUrlFromType(type: string): string {
  return 'assets/pokemon-icons/' + type.toLowerCase() + '-icon.png';
}
