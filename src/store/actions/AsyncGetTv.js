import { getTv } from "../reducers/tvSlice";
import axios from "../../utils/axios";


const AsyncGetTv = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/tv/${id}`);
    const language = await axios.get(`/tv/${id}/translations `);
    const socialLinks = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchProvider = await axios.get(`/tv/${id}/watch/providers`);
    
    console.log(videos);

    const ultimateData = {
      details: details.data,
      language: language.data.translations,
      socialLinks: socialLinks.data,
      recommendations: recommendations.data,
      similar: similar.data,
      videos: videos.data.results.find(e => (
        (["Official Trailer", "Trailer", "Dub Trailer", "Official Trailer [Subtitled]", "Main Trailer [Subtitled]"].includes(e.name)) ||
        (["YouTube"].includes(e.site))
      )),
      watchProvider: watchProvider.data.results.IN,

    };
    
    console.log(videos);
    dispatch(getTv(ultimateData));
  } catch (error) {
    console.log("Some Error Found during TvAPI Call", error);
  }
};

export default AsyncGetTv;
