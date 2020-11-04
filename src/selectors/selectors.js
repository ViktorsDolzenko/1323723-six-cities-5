export const selectIcons = (state) => {
  return state.offers.map(({id, coordinates})=>{
    return {
      id,
      coordinates
    };
  });
};
