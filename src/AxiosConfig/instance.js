import axios from 'axios';


  const axiosInstance=  axios.create({
        baseURL:'https://api.themoviedb.org/3/',
        params:{
         api_key:"9d66b0688ba6de2ad4b654aee8fd7baf"
        }
    })
  //   axiosInstance.interceptors.request.use((req) => {

  //     console.log("request interceptor");
  //        store.dispatch(changeLoader(true))
  //     return req
  
  // }, (err) => {
  
  //     return Promise.reject(err)
  // })
  
  
  // axiosInstance.interceptors.response.use((res) => {
  
  //     console.log("response interceptor");
  //     store.dispatch(changeLoader(false))
  
  //     return res
  
  
  // }, (err) => {
  //     return Promise.reject(err)
  
  // })
export default axiosInstance
