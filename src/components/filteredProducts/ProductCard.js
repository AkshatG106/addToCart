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
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import Button from "../button/Button";
import Toast from "../toast/Toast";
import { fetchApiData } from "../../features/apiSlice";
import { Link, useParams } from "react-router-dom";

export const ProductCard = ({ id, title, img, price, product }) => {

  const dispatch = useDispatch();

  // const { filteredProducts } = useSelector((state) => state.products);
  const { loading, error, data: products } = useSelector((state) => state.api);
  const { type } = useParams();


  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = () => {
    toastProperties = {
      id: list.length,
      title: "Success",
      description: "Item Added to the Cart",
      backgroundColor: "#5cb85c",
    };
    setList([toastProperties]);
  };

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
      <Link to={`/filteredProducts/${type}/` + id}>
        <MDBContainer className="">
          <MDBRow className="mb-3">
            <MDBCol size="" className="mt-5" key={id}>
              <MDBCard className="">
                <MDBCardImage
                  className="w-[300px] h-[300px] rounded-[5px]"
                  src={img}
                  alt="..."
                />
                <MDBCardBody className="h-[300px]">
                  <div className="w-[250px] h-[150px]">
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>$.{price}</MDBCardText>
                  </div>
                  <div>
                    <Button>
                      <p className="bg-primary w-[250px] p-1 rounded-[5px] text-white">
                        Buy
                      </p>
                    </Button>
                  </div>
                  <div>
                    <Button handleClick={() => showToast()}>
                      <button
                        onClick={() => dispatch(addToCart())}
                        className="bg-primary w-[250px] p-1 rounded-[5px] text-white"
                      >
                        Add to cart
                      </button>
                    </Button>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Toast toastList={list} setList={setList} />
      </Link>
    </div>
  );
};

export default ProductCard;
