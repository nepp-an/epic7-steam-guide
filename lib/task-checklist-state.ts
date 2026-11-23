/** Tab-local planning state only: never calls a game or rewards service. */
export function toggleTask(checked: readonly string[], id: string, on: boolean): string[] {
  return on
    ? checked.includes(id) ? [...checked] : [...checked, id]
    : checked.filter(item => item !== id);
}
