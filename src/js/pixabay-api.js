import axios from "axios";
export default async function getImagesByQuery(query, page) {
    const API_KEY = "YOUR_API_KEY_HERE";
    const BASE_URL = "https://pixabay.com/api/";
    return axios.get(BASE_URL, { 
        params: { 
            key: API_KEY,
            q: query,
            page: 1,
            per_page: 15,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        },
    })
    .then(response => response.data)
    .catch(error => {
        console.error("Error fetching images from Pixabay API:", error);
        throw error;
    });
}
   

 
                                              