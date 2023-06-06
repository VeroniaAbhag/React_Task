import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import {BsTrashFill} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../AxiosConfig/instance";
import {
  changeCount,
  changeFavorite,
} from "../../Store/action";
const Favorites = () => {
  const favorite = useSelector((state) => state.favorite);
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    let x = favorite.filter((f)=>f.id!=id);
    dispatch(changeFavorite(x));
    dispatch(changeCount(count - 1));
  }

  // useEffect(() => {
  //   axiosInstance
  //     .get(`https://api.themoviedb.org/3/movie/${params.id}`, {
  //       params: {
  //         api_key: "9d66b0688ba6de2ad4b654aee8fd7baf",
  //       },
  //     })
  //     .then((res) => {
  //       setMovie(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {favorite.map((f) => {
          return (
            <Card
              key={f.id}
              // movie={movie}
              // onFavorite={handleFavorite}
              style={{ width: "18rem", margin: "1%" }}
            >
              <Card.Img
                variant="top"
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${f.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{f.title}</Card.Title>
                <Link to={`/details/${f.id}`}>
                  <Button variant="primary">See details</Button>
                </Link>
                {/* <Link to={"/Favorites"}> */}
                <div onClick={() => {
                    handleDelete(f.id);
                  }}>
                  <BsTrashFill size={"15%"}/>
                </div>
                {/* </Link> */}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }


export default Favorites;
