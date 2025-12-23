import axios from"axios";
export const BaseUrl = "http://localhost:3434/";

class ApiServices {
          Login(data){
            return axios.post(BaseUrl+"apis/login",data)
        }
}

export default new ApiServices