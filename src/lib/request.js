import {apiUrl,logHttp} from '../App.json';
//const axios = require('axios').default;




export async function getRequest(path,params, headers={},otherApiUrl){
    let data=[
        {"Machine 1":{"Etat":"En Panne", "Cause Panne":"Arret moteur"}},
        {"Machine 2":{"Etat":"En Panne","Site" :"Chili" , "Cause Panne":"Niveau d'huile très bas",}},
        {"Machine 2":{"Etat":"En Panne","Site" :"Chili" , "Cause Panne":"Arret moteur",}},
        {"Machine 2":{"Etat":"En Panne","Site" :"Chili" , "Cause Panne":"Surchauffe moteur",}},
        {"Machine 2":{"Etat":"En Panne","Site" :"Chili" , "Cause Panne":"Niveau d'huile très bas",}},
    ]
    // let apiUrl_ = apiUrl
    // let token = localStorage.getItem('_Token')
    // return new Promise((resolve, reject) => {
    //     axios.get(apiUrl_ + path, {
            
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             Authorization : "Bearer "+token
    //         },

            
    //     }).then(async function (response) {
    //         resolve(response)
    //     }).catch(error => reject(error))
    // })
    return {success:true,data:data}
}
// export async function putRequest(path,params, headers={},otherApiUrl){
//     let apiUrl_ = apiUrl
//     let token = localStorage.getItem('_Token')
//     return new Promise((resolve, reject) => {
//         axios.put(apiUrl_ + path, params,{
            
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 Authorization : "Bearer "+token
//             },

            
//         }).then(async function (response) {
//             resolve(response)
//         }).catch(error => reject(error))
//     })
// }

// export async function postRequest (path,params,headers={},otherApiUrl){
//     let apiUrl_ = apiUrl
//     let token = localStorage.getItem('_Token')
//     return new Promise ((resolve, reject) => {
//         axios.post(apiUrl_ + path,params,{
//             headers : {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json; charset=UTF-8n',
//                 ...headers,
//                 Authorization : "Bearer "+token
//             },

//         }).then(async function(response){
//             resolve(response)
//         }).catch(error => reject(error))
//     })
// }