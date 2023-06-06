import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     axios
//       .get("https://api.themoviedb.org/3/movie/popular", {
//         params: {
//           api_key: "9d66b0688ba6de2ad4b654aee8fd7baf",
//           headers: { "Content-Type": "application.json" },
//           Page: page,
//         },
//       })
//       .then((res) => {
//         console.log(res.data);
//         setMovies(res.data.results);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [page]);
// const handlePreviousPage = () => {
//   setPage(page - 1);
// };
// const handleNextPage = () => {
//   setPage(page + 1);
// };

// const [movies, setMovies] = useState([]);
// const [page, setPage] = useState(1);
// const [totalPages, setTotalPages] = useState(1);

// useEffect(() => {
//   async function fetchMovies() {
//     const url = `https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page=${page}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     setMovies(data.results);
//     setTotalPages(data.total_pages);
//   }

//   fetchMovies();
// }, [page]);

// const halfMovies = Math.ceil(movies.length / 2);
// const firstHalf = movies.slice(0, halfMovies);
// const secondHalf = movies.slice(halfMovies);
function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingPage, setloadingPage] = useState(false);

  useEffect(() => {
    if (loadingPage || page === 1) {
      async function fetchMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
        // setLoading(false);
        setloadingPage(false);
      }

      fetchMovies();
    }
  }, [setloadingPage, page]);

  const halfMovies = Math.ceil(movies.length / 2);
  const firstHalf = movies.slice(0, halfMovies);
  const secondHalf = movies.slice(halfMovies);

  function handleNextPage() {
    if (page < totalPages) {
      setPage(page + 1);
      setloadingPage(true);
    }
  }

  function handlePreviousPage() {
    if (page > 1) {
      setPage(page - 1);
      setloadingPage(true);
    }
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {firstHalf.map((movie) => {
          return (
            // <h5 key={movie.id}>
            <Card style={{ width: "18rem", margin: "1%" }}>
              <Card.Img
                variant="top"
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                {/* <Card.Text>
                  {movie.overview}
                  </Card.Text> */}
                <Link to={`/details/${movie.id}`}>
                  <Button variant="primary">See details</Button>
                </Link>
              </Card.Body>
            </Card>
            // </h5>
          );
        })}
        <Row>
          <Col md={12}>
            <div>
              {/* <Button
            onClick={() => setPage((prevPage) => prevPage - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => setPage((prevPage) => prevPage + 1)}
            disabled={page === totalPages}
          >
            Next
          </Button> */}
              <Button onClick={handlePreviousPage}>Previous</Button>
              <Button onClick={handleNextPage}>Next</Button>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        {/* <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {secondHalf.map((movie) => {
            return (
              // <h5 key={movie.id}>
              <Card style={{ width: "18rem", margin: "1%" }}>
                <Card.Img
                  variant="top"
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  {/* <Card.Text>
                  {movie.overview}
                  </Card.Text> */}
                  {/* <Link to={`/details/${movie.id}`}>
                    <Button variant="primary">See details</Button>
                  </Link>
                </Card.Body>
              </Card>
              // </h5>
            );
          })}
          <Row>
            <Col md={12}>
              <div> */}
                {/* <Button
            onClick={() => setPage((prevPage) => prevPage - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => setPage((prevPage) => prevPage + 1)}
            disabled={page === totalPages}
          >
            Next
          </Button> */}
                {/* <Button onClick={handlePreviousPage}>Previous</Button>
                <Button onClick={handleNextPage}>Next</Button>
              </div>
            </Col>
          </Row>
        </div> */} */
      </div>
    </div>
  );
}

export default Movies;
