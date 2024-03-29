import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import Button from "./button/Button";
import Toast from "./toast/Toast";
import { fetchApiData } from "../features/apiSlice";


export default function ProductCart() {
  const dispatch = useDispatch();

  const [list, setList] = useState([]);
  let toastProperties = null;

  // const { filteredProducts } = useSelector((state) => state.products);
  const { loading, error, data: products } = useSelector((state) => state.api);

  const showToast = () => {
    toastProperties = {
      id: 1,
      title: "Success",
      description: "this is success",
      backgroundColor: "#5cb85c",
    };
    setList([toastProperties]);
  };

//   const [products, setProducts] = useState([]);

  useEffect(() => {
    if(!products.length){
    dispatch(fetchApiData());
    }
  }, [dispatch, products.length]);

  if (loading === "loading") {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <MDBContainer className="">
        <MDBRow className="mb-3">
          {products.map((item) => (
            <MDBCol size="3" className="mt-5" key={item.id}>
              <MDBCard className="rounded-[5px]">
                <MDBCardImage
                  className="w-[300px] h-[300px] rounded-[5px]"
                  src={item.thumbnail}
                  alt="..."
                />
                <MDBCardBody className="h-[300px]">
                  <div className="w-[250px] h-[150px]">
                    <MDBCardTitle>{item.title}</MDBCardTitle>
                    <MDBCardText>$.{item.price}</MDBCardText>
                  </div>
                  <div>
                    <Button>
                      <p className="bg-primary w-[250px] mt-3 p-1 rounded-[5px] text-white">
                        Buy
                      </p>
                    </Button>
                  </div>
                  <div>
                    <Button handleClick={() => showToast()}>
                      <button
                        onClick={() => dispatch(addToCart(item))}
                        className="bg-primary w-[250px] mt-3 p-1 rounded-[5px] text-white"
                      >
                        Add to cart
                      </button>
                    </Button>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
      <Toast toastList={list} setList={setList} />
    </div>
  );
}