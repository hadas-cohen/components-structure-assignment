import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";

function ProductDetails() {
    let { id } = useParams();
    const [productDetails, setProductDetails] = useState({});

    const fetchData = useCallback(async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await response.json();
        setProductDetails(json)
    }, [id])

    useEffect( () => {
        fetchData();
    }, [fetchData]);

    return (
      <div>
          <div> id:  { productDetails?.id } </div>
          <div> name: { productDetails?.title} </div>
      </div>
    );
}

export default ProductDetails;