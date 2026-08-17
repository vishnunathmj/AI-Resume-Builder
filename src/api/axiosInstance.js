import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://ai-resume-builder-server-j652.onrender.com",
    timeout:10000
})

// global error hnadling
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("API Response recieved!!!");
        return response
    },
    (error)=>{
        if(error.response){
            const status = error.response.status
        if(status==401){
            console.log("Unautherised Access - redirect to login page");
        }else if(status==404){
            console.log("API not found");
        }else if(status==500){
            console.log("Something went wrong");
        }else if(error.request){
            console.log("No response from server");
        }else{
            console.log("Error" + error.message);
        }
        return Promise.reject(error)
        }
    }
)




export default axiosInstance