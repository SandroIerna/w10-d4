import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Job from "./Job";

const Favourites = () => {
  const dispatch = useDispatch();
  const favouritesArray = useSelector((state) => state.favourites.companies);
  return (
    <Container>
      {favouritesArray.length !== 0 ? (
        favouritesArray.map((jobOffer) => (
          // <Row key={jobOffer._id}>
          //   <Col xs={12}>
          //     <Link to={`/${jobOffer.company_name}`}>
          //       {jobOffer.company_name}
          //     </Link>
          //   </Col>
          //   <Col xs={6}>{jobOffer.title}</Col>
          //   <Col xs={6}>{jobOffer.category}</Col>
          //   <Col xs={6}>{jobOffer.job_type}</Col>
          //   <Col xs={6}>{jobOffer.candidate_required_location}</Col>
          //   <Button
          //     variant="danger"
          //     onClick={() => {
          //       dispatch({
          //         type: "REMOVE_FROM_COMPANIES",
          //         payload: jobOffer,
          //       });
          //     }}
          //   >
          //     Remove
          //   </Button>
          // </Row>
          <Job key={jobOffer._id} data={jobOffer} />
        ))
      ) : (
        <h2>No jobs in your favourites list!</h2>
      )}
    </Container>
  );
};

export default Favourites;
