const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
});

const getCategory = () => axiosClient.get("/categories?populate=*");

const getSliders = async () => {
  try {
    const response = await axiosClient.get("/sliders?populate=*");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching sliders:", error);
    throw error; // Re-throw the error to propagate it upwards
  }
};

const getCategoryList = ()=> axiosClient.get("/categories?populate=*").then(res=>{return res.data.data})

// eslint-disable-next-line import/no-anonymous-default-export
export default { getCategory , getSliders , getCategoryList};
