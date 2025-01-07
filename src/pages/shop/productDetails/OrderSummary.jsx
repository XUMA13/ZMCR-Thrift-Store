import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../redux/features/cart/cartSlice';
import axios from 'axios';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { tax, taxRate, totalPrice, grandTotal, selectedItems } = useSelector((store) => store.cart);

  const [discountCode, setDiscountCode] = useState('');
  const [modifiedPrice, setModifiedPrice] = useState(totalPrice);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const applyDiscount = async () => {
    try {
      const response = await axios.post('http://localhost:5000/apply-discount', { totalPrice, discountCode });
      if (response.data.success) {
        setModifiedPrice(response.data.newTotal);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error applying discount:', error);
    }
  };

  const makePayment = () => {
    // Implement your payment logic here
  };

  return (
    <div className='bg-primary-light mt-5 rounded text-base'>
      <div className='px-6 py-4 space-y-5'>
        <h2 className='text-2xl text-text-dark'>Order Summary</h2>
        <p className='text-text-dark mt-2'>Selected Items: {selectedItems}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <p>Tax ({(taxRate * 100).toFixed(2)}%): ${tax.toFixed(2)}</p>
        <h3 className='font-bold'>Grand Total: ${grandTotal.toFixed(2)}</h3>
        <div className='px-4 mb-6'>
          <input 
            type='text' 
            placeholder='Discount Code' 
            value={discountCode} 
            onChange={(e) => setDiscountCode(e.target.value)} 
            className='px-3 py-1.5 border rounded-md mb-3'
          />
          <button 
            onClick={applyDiscount} 
            className='bg-blue-800 px-3 py-1.5 text-white mt-2 rounded-md mb-3'
          >
            Apply Discount
          </button>
          <p>Modified Price: ${modifiedPrice.toFixed(2)}</p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleClearCart();
            }} 
            className='bg-red-800 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center mb-4'
          >
            <span className='mr-2'>Clear your cart</span>
            <i className="ri-delete-bin-6-line"></i>
          </button>
          <button 
            onClick={makePayment} 
            className='bg-green-800 px-3 py-1.5 text-white mt-2 rounded-md flex justify-between items-center'
          >
            <span className='mr-2'>Proceed Checkout</span>
            <i className="ri-bank-card-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;