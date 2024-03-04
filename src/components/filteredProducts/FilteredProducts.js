// FilteredProducts.js
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard"; 
import { selectFilteredProducts } from "../../features/productsSlice";

const FilteredProducts = () => {
  const { type } = useParams();
  const filteredProducts = useSelector((state) => selectFilteredProducts(state, type));

  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="">
              <ProductCard
                  id={product.id}
                  title={product.title}
                  img={product.thumbnail}
                  price={product.price}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredProducts;
