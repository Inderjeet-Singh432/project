import axios from"axios";
export const BaseUrl = "http://localhost:3434/";

class ApiServices {
          Login(data){
            return axios.post(BaseUrl+"apis/login",data)
        }
        getall(data){
          return axios.post(BaseUrl+"owner/getall",data)
        }

}

export default new ApiServices