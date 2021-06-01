 import actions from './actions'

export const addItemToCart = (item) => {
    return {
       type: actions.ADD_ITEM_TO_CART,
       data: item
    }
  }

  export const increaseItemQty = (item) => {
    return {
       type: actions.INCREASE_ITEM_QTY,
       data: item
    }
  }

  export const removeItemFromCart = (item) => {
    return {
       type: actions.REMOVE_ITEM,
       data: item
    }
  }

  export const resetCart = () => {
    return {
       type: actions.RESET_CART  
    }
  }

  export const increaseLineItemCount = () => {
    return {
      type: actions.INCREASE_LINE_ITEM_COUNT
    }
  }

  export const resetLineItemCount = () => {
    return {
      type: actions.RESET_LINE_ITEM_COUNT
    }
  }

  export const addItemToTrash = (item) => {
    return {
       type: actions.ADD_ITEM_TO_TRASH,
       data: item
    }
  }
