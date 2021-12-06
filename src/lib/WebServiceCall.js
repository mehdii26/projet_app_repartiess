import { getRequest,postRequest } from "./request";

export async function getPannesMachines(){
    
    let response = await getRequest('machine/pannes-machines')
    if(response.success){
        console.log(response.data)
        return response.data
    }
    
}
