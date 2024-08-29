import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "1a1f21b2a0b0451f8fd38992b4469d3e",
  },
});
