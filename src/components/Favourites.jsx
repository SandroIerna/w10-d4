import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Favourites = () => {
  const dispatch = useDispatch();
  const favouritesArray = useSelector((state) => state.favourites.companies);
  return (
    <Container>
      {favouritesArray.map((jobOffer) => (
        <Row>
          <Col xs={12}>
            <Link to={`/${jobOffer.company_name}`}>
              {jobOffer.company_name}
            </Link>
          </Col>
          <Col xs={6}>{jobOffer.title}</Col>
          <Col xs={6}>{jobOffer.category}</Col>
          <Col xs={6}>{jobOffer.job_type}</Col>
          <Col xs={6}>{jobOffer.candidate_required_location}</Col>
          <Button
            variant="danger"
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_COMPANIES",
                payload: jobOffer,
              });
            }}
          >
            Remove
          </Button>
        </Row>
      ))}
    </Container>
  );
};

export default Favourites;
