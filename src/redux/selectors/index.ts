const getIsArticlePinned = (state: number[], id: number): boolean => {
  return state.includes(id);
};

export { getIsArticlePinned };
