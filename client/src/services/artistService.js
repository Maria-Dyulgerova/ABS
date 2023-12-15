import * as request from "../lib/request";


const baseUrl = 'http://localhost:3030/jsonstore/artists';



export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};
export const getOne = async (artist_id) => {
    console.log(artist_id);
    const result = await request.get(`${baseUrl}/${artist_id}`, );

    return result;
}

export const create = async (artistData) => {
    // console.log(artistData);
    const body = {
        _id: artistData._id,
        artistName: artistData.artistName,
        nickName: artistData.nickName,
        DOB: artistData.DOB,
        POB: artistData.birthPlace,
        gender: artistData.gender,
        imageUrl: artistData.imageUrl,
        role: artistData.role,
        instrument: artistData.instrument,
        contact: {
            email: artistData.email,
            phone: artistData.phone,
            address: {
                country: artistData.country,
                city: artistData.city,
                postCode: artistData.postCode,
                details: artistData.details,
            }
        },

        passport: {
            number: artistData.number,
            authority: artistData.authority,
            issueDate: artistData.issueDate,
            validityDate: artistData.validityDate,
        },
        documents: {
            PDNum: artistData.PDNum,
            selfEmplTaxNum: artistData.selfEmplTaxNum,
            medAttestToDate: artistData.medAttestToDate,
            accidentInsuranceNum: artistData.accidentInsuranceNum,

        },
        nextOfKin: {
            nextToKinName: artistData.nextToKinName,
            nextToKinAddress: artistData.nextToKinAddress,
            nextToKinEmail: artistData.nextToKinEmail,
            nextToKinPhone: artistData.nextToKinPhone
        },

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        
    };
    const result = await request.post(baseUrl, body);

    return result;
};

export const edit = async (artistId, artistData) => {
    const result = await request.put(`${baseUrl}/${artistId}`, artistData);

    return result;
};

export const remove = async (artistId) => request.remove(`${baseUrl}/${artistId}`);
