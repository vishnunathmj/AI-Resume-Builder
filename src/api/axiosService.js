import axiosInstance from "./axiosInstance";

const axiosService = async (httpMethod,url,reqBody)=>{
    try{
        const response = await axiosInstance({
            method:httpMethod,
            url,
            data:reqBody
        })
        return response
    }catch(err){
        throw(err)
    }
}

export default axiosService