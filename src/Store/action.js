import axiosInstance from "../AxiosConfig/instance";
export  function changeLanguage(data) {
  return {
    type: "SET_LANGUAGE",
    payload: data,
  };
}
export function changeCount(data) {
    return {
      type: "SET_COUNT",
      payload: data,
    };
}
export function changeFavorite(data) {
  return {
    type: "SET_FAVORITE",
    payload: data,
  };
}
export function handleAPI(){
  return (dispatch)=>{
    axiosInstance
    .get("movie/popular?page=1")
    .then((res)=>{
      dispatch({type:"SET_API",payload:res.data.movies});
    })
    .catch((err) => {
      console.log(err);
    });
  };
}