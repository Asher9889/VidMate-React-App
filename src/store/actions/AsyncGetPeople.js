import axios from "../../utils/axios"
import {getPerson} from "../reducers/personSlice"

const AsyncGetPeople = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/person/${id}`);
    const socialLinks = await axios.get(`/person/${id}/external_ids`);
    const language = await axios.get(`/person/${id}/translations `)
    const combineCredit = await axios.get(`/person/${id}/combined_credits`)
    const tvCredit = await axios.get(`/person/${id}/tv_credits`);
    const movieCredit = await axios.get(`/person/${id}/movie_credits`);
    
    
    const ultimateData = {
      details: details.data,
      socialLinks: socialLinks.data,
      language: language.data,
      combineCredit: combineCredit.data,
      tvCredit: tvCredit.data,
      movieCredit: movieCredit.data,
    }

    // console.log(ultimateData)
    dispatch(getPerson(ultimateData))

  } catch (error) {
    console.log("Error found during People API Call ", error)
  }


  

} 

export default AsyncGetPeople;