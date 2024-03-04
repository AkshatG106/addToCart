import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";
import { filterProducts } from "../features/productsSlice";

export default function Navbar() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const button = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];

  return (
    <div>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <p className="text-[40px]">Store</p>
          </MDBNavbarBrand>
          <span className="text-[40px]">
            <Link to="/" className=" text-black">
              All Products
            </Link>
          </span>
          <span className="">
            <button className='bg-gray-700 text-white p-2 rounded-full'>Login</button>
            <button className='bg-gray-700 text-white p-2 rounded-full ml-4'>Register</button>
          </span>
          <MDBBtn color="dark">
            <Link to="/cart" className=" text-white">
              Cart({totalQuantity})
            </Link>
          </MDBBtn>
        </MDBContainer>
      </MDBNavbar>
      <div className="flex justify-center">
        {button.map((button, i) => {
          return (
            <div className="" key={i}>
              <Link to={"/FilteredProducts/" + button}>
                <button
                  onClick={() => dispatch(filterProducts(button))}
                  className="border rounded-full p-2 m-2"
                >
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
