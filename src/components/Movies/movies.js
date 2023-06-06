import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage, changeCount,changeFavorite,handleAPI} from "../../Store/action";
import { counterContext } from "../../Context/counter";
import axiosInstance from "../../AxiosConfig/instance";

function Movies(props) {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingPage, setloadingPage] = useState(false);
  const [icon, setIcon] = useState(false);
  const count = useSelector((state) => state.counter);
  const language = useSelector((state) => state.lang);
  const favorite = useSelector((state) => state.favorite);
  // const Movies = useSelector((state) => state.movies);
  const favoriteID = favorite.map((item) => item.id);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(handleAPI());
  //   console.log(Movies);
  // }, []);



  // const handleChange = () => [
  //   dispatch(changeLanguage(language == "en" ? "AR" : "en")),
  // ];
  const { lang, setLang } = useContext(counterContext);
    const handleChange = () => {
      setLang(lang === 'en' ? 'AR' : 'en');
    }
  let handleFav = (obj) => {
    favorite.map((f)=>{
      if(f.id!==obj.id){
        return f;
      }
      return f;
    });
    dispatch(changeFavorite([...favorite , obj]));
    dispatch(changeCount(count + 1));
  };


  ////////////////////////////////////showing the movies data from the api direct////////////////////////////////
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (loadingPage || page === 1) {
      async function fetchMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
        setloadingPage(false);
      }

      fetchMovies();
    }
  }, [setloadingPage, page]);
  const halfMovies = Math.ceil(movies.length / 2);
  const firstHalf = movies.slice(0, halfMovies);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
      {/* dir={`${language == "en" ? "ltr" : "rtl"}`} */}
      <div dir={`${lang == "en" ? "ltr" : "rtl"}`}>
        <button
          className="btn btn-primary"
          style={{ margin: "1%" }}
          onClick={() => {
            handleChange();
          }}
        >
          Change Language
        </button>
        <h5>{lang}</h5>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        
        {/* {firstHalf.map((movie) => { */}
         {firstHalf.map((movie) => {
          return (
            <Card
              key={movie.id}
              // movie={movie}
              // onFavorite={handleFavorite}
              style={{ width: "18rem", margin: "1%" }}
            >
              <Card.Img
                variant="top"
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Link to={`/details/${movie.id}`}>
                  <Button variant="primary">See details</Button>
                </Link>
                {/* <Link to={"/Favorites"}> */}
                <div
                  onClick={() => {
                    handleFav(movie);
                  }}
                >
                  {favoriteID.includes(movie.id) ? (
                    <BsBookmarkHeartFill size={"15%"} />
                  ) : (
                    <BsBookmarkHeart size={"15%"} />
                  )}
                </div>
                {/* </Link> */}
              </Card.Body>
            </Card>
          );
        })}
        <Row>
          <Col md={12}>
            <div>
              <Button onClick={handlePreviousPage}>Previous</Button>
              <Button onClick={handleNextPage}>Next</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Movies;
