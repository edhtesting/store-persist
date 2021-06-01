import actions from '../actions/actions';
const INITIAL_STATE = [];

export const cartReducer = (state = [], action) => {
  
    switch(action.type) {

      case actions.ADD_ITEM_TO_CART:
        const newState = [
            ...state, 
            action.data
        ]
        return newState
    
      case actions.INCREASE_ITEM_QTY:
        let stateII = [...state]
        const qtyToChangeChange = stateII.find((item) => item.lineItem === action.data)
    
        const itemWithNewQty = {
          ...qtyToChangeChange,
          qty: qtyToChangeChange.qty + 1
        }
    
        return stateII.map(s =>
          s.lineItem !== action.data ? s : itemWithNewQty
          )

        case actions.REMOVE_ITEM:

          const stateRI = [...state]

          return stateRI.filter(item => item.lineItem !== action.data)

        case actions.RESET_CART:
          return INITIAL_STATE

      default:
        return state
    }
  
  }

  
