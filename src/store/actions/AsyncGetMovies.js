import axios from "../../utils/axios";
import {getMovie, removeMovie} from "../reducers/movieSlice"




const AsyncGetMovies = (id) => async (dispatch, setState) => {
  try {
    const details = await axios.get(`/movie/${id}`);
    const language = await axios.get(`/movie/${id}/translations `)
    const socialLinks = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchProvider = await axios.get(`/movie/${id}/watch/providers`);
    
    console.log(videos)
    // console.log(language)
    const ultimateData = {
      details: details.data,
      language: language.data.translations,
      socialLinks: socialLinks.data,
      recommendations: recommendations.data,
      similar: similar.data, 
      videos: videos.data.results.find(m => ["Official Trailer", "Original Trailer", "Trailer", "Official US Trailer | English Subtitles"].includes(m.name)) ,
      watchProvider: watchProvider.data.results.IN,
    }
    
    dispatch(getMovie(ultimateData))
  } catch (error) {
    console.log("The error got in Async Get Products is: ", error)
  }
};

export  default AsyncGetMovies;




