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

export default function Navbar() {

  const {cart, totalQuantity} = useSelector((state) => state.allCart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  },[cart])                                   

  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand><p className="text-[40px]">Store</p></MDBNavbarBrand>
        <span className="text-[40px]"><Link to='/' className=" text-black">All Products</Link></span>
        <MDBBtn color="dark"><Link to='/cart' className=" text-white">Cart({totalQuantity})</Link></MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
