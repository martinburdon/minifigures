const minifigures = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_COLLECTED':
      return state.map(minifig =>
        (minifig.id === action.id)
          ? {...minifig, collected: !minifig.collected}
          : minifig
      )
    default:
      return state
  }
}

export default minifigures;
