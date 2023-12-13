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
    const result = await request.post(baseUrl, artistData);

    return result;
};




// import * as request from "../lib/request";

// const baseUrl = 'http://localhost:3030/data/artists'


// export const getAll = async () => {
//     const result = await request.get(baseUrl);
// console.log(result);
//     return result;
// };

// export const getOne = async (artistId) => {
//     const result = await request.get(`${baseUrl}/${artistId}`, );

//     return result;
// }

// export const getLatest = async () => {
//     // const query = new URLSearchParams({
//     //     sortBy: `_createdOn desc`,
//     //     offset: 0,
//     //     pageSize: 3,
//     // });

//     const query = encodeURIComponent(`offset=0&pageSize=3`);
//     console.log(query);
//     const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&${query}`);

//     return result;
// }

// export const create = async (artistData) => {
//     const result = await request.post(baseUrl, artistData);

//     return result;
// };

export const edit = async (artistId, artistData) => {
    const result = await request.put(`${baseUrl}/${artistId}`, artistData);

    return result;
};

export const remove = async (artistId) => request.remove(`${baseUrl}/${artistId}`);
