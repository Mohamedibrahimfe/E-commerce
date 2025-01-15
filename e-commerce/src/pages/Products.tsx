import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/ecommerce";
//
import { useParams } from "react-router-dom";
//

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetProductsByPrefix } from "@store/categories copy/ProductsSlice";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const {error, loading, records} = useAppSelector((state) => state.Products);
  useEffect(() => {
    dispatch(actGetProductsByPrefix(params.prefix as string));
  }, [dispatch, params]);
  return (
    <Container>
      <Row>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
