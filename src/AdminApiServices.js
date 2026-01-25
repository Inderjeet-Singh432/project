import axios from "axios";
export const BaseUrl = "http://localhost:3434/";

class AdminApiServices {

        Login(data) {
          return axios.post(BaseUrl + "admin/login", data)
        }

    //owner------------------------------------------------------ api start
        OwnerGetSingle(data){
          return axios.post(BaseUrl +"admin/getsingle",data)
        }
        OwnerGetall() {
          return axios.post(BaseUrl + "admin/getall")
        }
        
        changeStatus(data){
          return axios.post(BaseUrl+"admin/changeStatus",data)
        }

        hardDelete(data){
          return axios.post(BaseUrl+"admin/hardDelete",data)
        }
    //owner------------------------------------------------------ api end

    //property ------------------------------------------------------ apis start
        propertyAdd(data) {    //owner prperty add  api
          return axios.post(BaseUrl + "admin/property/add", data)
        }

        propertyGetall(data) {    //owner prperty getall  api
          return axios.post(BaseUrl + "admin/property/getall",data)
        }

        update(data){             //owner prperty update  api
          return axios.post(BaseUrl + "admin/property/update",data)
        }
        getSingle(data){              //owner prperty getSingle  api
          return axios.post(BaseUrl+"admin/property/getsingle",data)
        }
        
        PHardDelete(data){         //owner prperty delete  api
          return axios.post(BaseUrl+"admin/property/hardDelete",data)
        }
    //property ------------------------------------------------------ apis end
    

}

export default new AdminApiServices