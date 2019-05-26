const ADD_GUN = 'ADD_GUN';
const REMOVE_GUN = 'REMOVE_GUN';
const AYNC_GUN = 'AYNC_GUN';

const initState = {
  num: 0
}

export function gun(state = initState, action) {
  switch (action.type) {
    case ADD_GUN:
      return { ...state, num: state.num + 1 }
    case REMOVE_GUN:
      return { ...state, num: state.num - 1 }
    case AYNC_GUN:
      return { ...state, num: state.num + 1 }
    default:
      return { ...state }
  }
}

export function addGun() {
  return { type: ADD_GUN };
}

export function removeGun() {
  return { type: REMOVE_GUN };
}

function ayncGunNum() {
  return { type: AYNC_GUN };
}

export function ayncGun() {
  return dispatch => {
    setTimeout(() => {
      dispatch(ayncGunNum())
    }, 1000);
  }
}