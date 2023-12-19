import * as request from "../lib/request";

import * as companyService from "./companyService";


const baseUrl = 'http://localhost:3030/jsonstore/ships';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const shipList = Object.values(result);
    
    
    
    const updatedList = shipList.map((ship) => {
        let cn = getCompanyName(ship.companyId);
        return {
            ...ship,
            companyName: cn

        };
      
     });

      console.log(updatedList);
    // console.log("result from get all:");
    // console.log(updatedArray);
    // return Object.values(result);
    return updatedList;
};

export const getOne = async (ship_id) => {
     const result = await request.get(`${baseUrl}/${ship_id}`, );

    return result;
};
export const getAllFromCompany = async (company_id) => {
    const query = new URLSearchParams({
        where: `companyId="${company_id}"`,
        load: `companyId="${company_id}"`,
    });

    const result = await request.get(`${baseUrl}?${query}`);
    return Object.values(result);
};

export const getCompanyName = (companyId) => {
    let cData = '';
    companyService.getCompName(companyId)
    .then(
        result => {
            console.log(result);
            cData = result;
            // console.log(typeof result);
        }
    )
    .catch(err => {
        console.log(err);
    });
    // console.log(cData);
    return cData;
}