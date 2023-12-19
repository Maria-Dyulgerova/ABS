import * as request from "../lib/request";


const baseUrl = 'http://localhost:3030/jsonstore/companies';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    // console.log("result from get all:");
    // console.log(result);
    return Object.values(result);
};

export const getOne = async (company_id) => {
     const result = await request.get(`${baseUrl}/${company_id}`, );

    return result;
};
export const getCompName = async (companyId) => {
    const compData = await request.get(`${baseUrl}/${companyId}`, );
    const compName = Object.values(compData);
    
    // console.log("result from getCompName:");
    // console.log(typeof compData.companyName);
     
    return compData.companyName;
};

// export const getCompanyName = (companyId) => {
//     let cData = "";
//     getCompName(companyId)
//     .then(
//         result => {
//             console.log(result);
//             cData = result;
//         }
//     )
//     // console.log(cData);
//     return cData;
// }


