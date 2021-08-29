export enum Diffculty {
  facile = "100",
  normal = "500",
  difficile = "1000",
}

export function getDisplayName(diff: string): string {
  switch (diff) {
    case Diffculty.facile:
      return "facile";
    case Diffculty.normal:
      return "normal";
    case Diffculty.difficile:
      return "difficile";
    default:
      return "facile%";
  }
}
