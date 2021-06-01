import actions from '../actions/actions';

 export const trashReducer = (state = [], action) => {
    
      switch(action.type) {
  
        case actions.ADD_ITEM_TO_TRASH:
            const newState = [
                ...state,
                action.data
            ]
          return newState 
        default:
          return state
    }
    
  }
  
    
  