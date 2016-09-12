export default function(state = {count: 0}, action){
  switch(action.type){
    case 'TEST_ACTION':
      return {...state, count: count + 1}
  }

  return state;
}
