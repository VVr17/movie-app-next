/**
 * Create season options to choose
 *
 */
export const getSeasons = (quantity: number) => {
  let seasons = [];

  for (let i = 1; i <= quantity; i++) {
    seasons.push({ label: `Season ${i}`, id: `${i}` });
  }

  return seasons;
};
