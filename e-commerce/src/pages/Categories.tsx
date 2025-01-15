import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import actGetCategories from "@store/categories/act/actGetCategories";

import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/ecommerce";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.Categories
  );

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  const categories =
    records.length > 0
      ? records.map((category) => {
          return (
            <Col
            key={category.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category {...category} />
          </Col>
          )
        })
      : "there is no categories";

  return (
    <Container className="ml-5">
      <Row>{categories}</Row>
    </Container>
  );
};

export default Categories;
