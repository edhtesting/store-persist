import actions from '../actions/actions';

 export const lineItemCountReducer = (state = 0, action) => {
    
      switch(action.type) {
  
        case actions.INCREASE_LINE_ITEM_COUNT:
          return state + 1
        case actions.RESET_LINE_ITEM_COUNT:
          return state = 0
        default:
          return state
    }
    
  }
  
    
  