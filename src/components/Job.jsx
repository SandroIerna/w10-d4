import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favouritesArray = useSelector((state) => state.favourites.companies);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        {favouritesArray.includes(data) ? (
          <Button
            variant="danger"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_COMPANIES",
                payload: data,
              });
            }}
          >
            Remove from favourites
          </Button>
        ) : (
          <Button
            variant="success"
            onClick={() => {
              dispatch({
                type: "ADD_TO_COMPANIES",
                payload: data,
              });
            }}
          >
            Add to favourites
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
