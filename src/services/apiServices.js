import axiosService from "../api/axiosService";

// save resume api : called by the resumeInput component when finish button is clicked
export const saveResumeAPI = async (resumeDetails)=>{
    return await axiosService("POST","/resumes",resumeDetails)
}

// view resume api : called by view component when page loads in browser
export const viewResumeAPI = async (resumeId)=>{
    return await axiosService("GET",`/resumes/${resumeId}`,{})
}

// get all resume api : called by view component when page loads in browser
export const getAllResumesAPI = async ()=>{
    return await axiosService("GET",`/resumes`,{})
}
