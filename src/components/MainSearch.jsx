import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { searchJobsAction } from "../redux/actions";
import { useEffect } from "react";

const MainSearch = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);
  const isLoading = useSelector((state) => state.jobs.loading);
  const isError = useSelector((state) => state.jobs.isError);
  const [query, setQuery] = useState("");
  const [jobsArray, setJobsArray] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setJobsArray(jobs);
  }, [jobs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchJobsAction(query));
  };

  const navigate = useNavigate();
  return (
    <Container>
      {isError ? (
        <Col xs={12} className="mx-auto my-5 text-center">
          <h2>Oooops, something went wrong :(!</h2>
        </Col>
      ) : (
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Remote Jobs Search</h1>
          </Col>
          <Col
            xs={2}
            className="d-flex align-items-center justify-content-center"
          >
            <Button onClick={() => navigate("/favourites")}>Favourites</Button>
          </Col>
          <Col xs={9} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type and press Enter"
              />
            </Form>
          </Col>
          {isLoading && (
            <Col xs={1} className="mx-auto mb-5 text-center">
              <Spinner animation="border" />
            </Col>
          )}
          <Col xs={10} className="mx-auto mb-5">
            {jobsArray.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MainSearch;
