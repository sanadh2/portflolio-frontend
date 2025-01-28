export function formatTechStack(input: string) {
  return input
    .split("-")
    .map((word) =>
      word.toLowerCase() === "js"
        ? "JS"
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}
