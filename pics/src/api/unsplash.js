import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID e7dF9UpV3PqKrmY5IejK8mV7eO6oSX9k15KJuK-Jnp0",
  },
});
