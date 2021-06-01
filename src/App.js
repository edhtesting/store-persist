import React from 'react';
import { items } from './items';
import { useDispatch, useSelector } from 'react-redux';
 import { addItemToCart } from './redux/actions/index';
 import { addItemToTrash } from './redux/actions/index';
 import { removeItemFromCart } from './redux/actions/index';
 import { resetCart } from './redux/actions/index';
 import { increaseLineItemCount } from './redux/actions/index';
 import { resetLineItemCount } from './redux/actions/index';
 import { increaseItemQty } from './redux/actions/index';

 import './App.css';

const App = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const lineItemCount = useSelector(state => state.lineItemCount)
  const trash = useSelector(state => state.trash)

  const handleAddItem = (item) => {

    dispatch(increaseLineItemCount())

    const newItem = {
      ...item,
      qty: item.qty + 1,
      lineItem: lineItemCount
    }

    dispatch(addItemToCart(newItem))

  }

  const handleResetCart = () => {

    dispatch(resetLineItemCount())
    dispatch(resetCart())

  }

  const handleRemoveItem = (item) => {
    dispatch(addItemToTrash(item))
    dispatch(removeItemFromCart(item.lineItem))
  }

  const renderItems = () => {
    return (
      <div>
        {items.map(item =>
        <div key={item.lineItem}>    
          Item: {item.name}<br />
          Price: {item.price}<br />
          <button 
           onClick={() =>  handleAddItem(item)}
          >Add to cart</button>
          
        </div>
          )}
      <br/><br/>
        <button
           onClick={() => handleResetCart()}
        >
          Reset Cart
        </button>
      </div>
    )
  }

  const renderCart = () => {

    if ( cart.length < 1  ) {
      return (
        <p> Your cart is empty</p>
      )
    } else {
   
      return (
        <div>
          {cart.map(item =>
              <div key={item.lineItem}> 
                {item.name} qty: {item.qty}
                <button 
                  onClick={() => dispatch(increaseItemQty(item.lineItem))}
                >
                  +
                </button>
                <button 
                  onClick={() => handleRemoveItem(item)}
                >
                  X
                </button>
                
              </div>
            )}
        </div>
      )
    }
   
  }

  const renderTrash = () => {
    if (trash.length < 1) {
      return null
    } else {
      return (
        <div>
          Deleted Items <br />
          {trash.map(t => 
          <div>
            {t.name}<br />
          </div>
            )}
        </div>
      )
    }
  }

  return (
    <div className="App">
      {renderItems()}<br /><br />
      {renderCart()}<br /><br />
      {renderTrash()}
    </div>
  );
}

export default App;
