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

export let body = {
    _id: "",
    artistName: "",
    nickName: "",
    DOB: "",
    POB: "",
    gender: "",
    imageUrl: "",
    role: "",
    instrument: "",
    startedAt: "",
    contact: {
        email: "",
        phone: "",
        address: {
            country: "",
            city: "",
            postCode: "",
            details: "",
        }
    },

    passport: {
        number: "",
        authority: "",
        issueDate: "",
        validityDate: "",
    },
    documents: {
        PDNum: "",
        selfEmplTaxNum: "",
        medAttestToDate: "",
        accidentInsuranceNum: "",

    },
    nextOfKin: {
        nextToKinName: "",
        nextToKinAddress: "",
        nextToKinEmail: "",
        nextToKinPhone: ""
    },

    createdAt: "",
    updatedAt: "",
    
};
export const create = async (artistData) => {
    // console.log(artistData);
    body = {
        _id: artistData._id,
        artistName: artistData.artistName,
        nickName: artistData.nickName,
        DOB: artistData.DOB,
        POB: artistData.POB,
        gender: artistData.gender,
        imageUrl: artistData.imageUrl,
        role: artistData.role,
        instrument: artistData.instrument,
        startedAt: artistData.startedAt,
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
    body = {
        _id: artistData._id,
        artistName: artistData.artistName,
        nickName: artistData.nickName,
        DOB: artistData.DOB,
        POB: artistData.POB,
        gender: artistData.gender,
        imageUrl: artistData.imageUrl,
        role: artistData.role,
        instrument: artistData.instrument,
        startedAt: artistData.startedAt,
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
    const result = await request.put(`${baseUrl}/${artistId}`, body);

    return result;
};

export const remove = async (artistId) => request.remove(`${baseUrl}/${artistId}`);
