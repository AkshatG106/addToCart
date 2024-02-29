import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from "../features/cartSlice";


const CartPage = () => {
  const { cart, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getCartTotal());
  }, [cart])

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="text-[40px]">CheckOut</h5><br/>
                  <strong className="text-[20px]">Amount:${totalPrice}</strong><br/><br/>
                  <strong className="text-[20px]">Shipping Cost :$8.00 </strong><br/><br/>
                  <strong className="text-[20px]">Total Cost : ${totalPrice+8}</strong><br/><br/>
                  <button className="bg-primary text-white p-2 rounded-full">Proceed to Pay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
