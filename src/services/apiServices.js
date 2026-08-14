import { resume } from "react-dom/server";
import axiosService from "../api/axiosService";

// save resume api : called by the resumeInput component when finish button is clicked
export const saveResumeAPI = async (resumeDetails) => {
    return await axiosService("POST", "/resumes", resumeDetails)
}

// view resume api : called by view component when page loads in browser
export const viewResumeAPI = async (resumeId) => {
    return await axiosService("GET", `/resumes/${resumeId}`, {})
}

// get all resume api : called by view component when page loads in browser
export const getAllResumesAPI = async () => {
    return await axiosService("GET", `/resumes`, {})
}

// remove resume api : called by saved component when delete button clicked
export const deleteResumesAPI = async (resumeId) => {
    return await axiosService("DELETE", `/resumes/${resumeId}`, {})
}

// edit resume api : called by edit component when update button clicked
export const editResumeAPI = async (resumeId, resumeDetails) => {
    return await axiosService("PUT", `/resumes/${resumeId}`, resumeDetails)
}

// add resume in downloads api : called by view components when download cv button clicked
export const downloadResumeAPI = async (resumeDetails) => {
    return await axiosService("POST", "/download", resumeDetails)
}

// get all download list api: called by download 
export const getAlldownloadAPI = async () => {
    return await axiosService("GET", "/download", {})
}
