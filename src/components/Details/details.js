import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../AxiosConfig/instance";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
const Details = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`https://api.themoviedb.org/3/movie/${params.id}`, {
        params: {
          api_key: "9d66b0688ba6de2ad4b654aee8fd7baf",
        },
      })
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row">
      {/* <div className="row-6">
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}></img>
      </div>
      <div className="row-6">
        <h1>{movie.title}</h1>
        <h5>{movie.overview}</h5>
      </div> */}
      <Container>
        <Row>
          <Col md={6}>
            {" "}
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            ></img>
          </Col>
          <Col md={6}>
            <div>
              <h1>{movie.title}</h1>
              <h5>{movie.overview}</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
