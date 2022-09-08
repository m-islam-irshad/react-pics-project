import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID B_Lj4nw8eL-7BoDnQ9sFChQV4HxcpcEUFCuUkF1MVVI"
    }


})
