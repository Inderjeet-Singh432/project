import axios from "axios";
export const BaseUrl = "http://localhost:3434/";

class ApiServices {
        Login(data) {
          return axios.post(BaseUrl + "apis/login", data)
        }
    //owner api start
        OwnerGetall() {
          return axios.post(BaseUrl + "owner/getall")
        }
        register(data) {    //owner register api
          return axios.post(BaseUrl + "owner/register", data)
        }
    //owner api end

    //property  apis start
        propertyAdd(data) {    //owner prperty add  api
          return axios.post(BaseUrl + "property/add", data)
        }
        propertyGetall() {    //owner prperty getall  api
          return axios.post(BaseUrl + "property/getall")
        }
    //property  apis end
    

}

export default new ApiServices