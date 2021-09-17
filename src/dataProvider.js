import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const axios = require("axios")

const apiUrl = 'https://my.api.com/';
const httpClient = fetchUtils.fetchJson;

const online = {
    url: "https://ecoli-test.herokuapp.com/api",
    code: "pbkdf2_sha256$260000$6ej1DnO64vQ8SqkudggJQy$aQadVa5Nql/5DNp530ffcyVRxRQL3EB/xm16g3z+8pc="
}
const localhost = {
    url: "http://localhost:8000/api",
    code: "pbkdf2_sha256$260000$knALxLFKNUw097Lfvas3I6$XwP768M5S+R/3kukxH4hz/opIpBfTJ1ZJ5XYGzsA4yw="
}


const INSTANCE = localhost

const axiosInstance = axios.create({
    baseURL: INSTANCE.url,
    headers: {
        "x-code": INSTANCE.code
    }
}) 

export default {
    getList: (resource, params) => {
        // const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;
        // const query = {
        //     sort: JSON.stringify([field, order]),
        //     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        //     filter: JSON.stringify(params.filter),
        // };
        // const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return axiosInstance(`/${resource}`).then(({ data }) => ({
            data: data.results,
            total: data.count,
        }));
    },

    getOne: (resource, params) =>
        axiosInstance(`/${resource}/${params.id}`).then(({ data }) => ({
            data: data,
        })),

    getMany: (resource, params) => {
        console.log('Getting MANY', params)

        return new Promise((resolve, reject) => {
            const allData = []
            params.ids.map((id)=>{
                axiosInstance.get(`/${resource}/${id}`).then(({ data }) => allData.push(data) )
            })
            resolve({ data: allData });
        });
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };

        console.log('Getting MANY REFERENCES', params)
        return new Promise((resolve, reject) => {
            const allData = []
            axiosInstance(`/${resource}`).then(({ data }) => ({
                data: data
            }))
            .then(({ data }) => resolve({ data: data.results, total: data.count }) )
        
            
        });

    },

    update: (resource, params) =>
        axiosInstance({
            url: `/${resource}/${params.id}`,
            method: "patch",
            data: params.data
        }).then(({ data }) => ({ data: data })),

    updateMany: (resource, params) => {
        return new Promise((resolve, reject) => {
            const allData = []
            params.ids.map((id)=>{
                axiosInstance.patch({
                    url: `/${resource}/${params.id}`,
                    data: params.data,
                })                
                .then(({ data }) => allData.push(data) )
            })
            resolve({ data: allData });
        });
    },

    create: (resource, params) =>{
        return axiosInstance({ 
            method: "post", 
            url: `/${resource}`, 
            data: params.data, 
            headers: { "Content-Type": "application/json" } 
        })
            .then(({ data, status, statusText }) => ({
                    data: { ...params.data, id: data.id },
                    status: status,
                    statusText: statusText
            }))
    },

    delete: (resource, params) =>
        axiosInstance.delete(`/${resource}/${params.id}`).then(({ data }) => ({ data: data })),

    deleteMany: (resource, params) => {
        return new Promise((resolve, reject) => {
            params.ids.map((id)=>{
                axiosInstance.delete(`/${resource}/${id}`)
            })
            resolve({ data: params.ids });
        });

        // const query = {
        //     filter: JSON.stringify({ id: params.ids}),
        // };
        // return axiosInstance({
        //     url: `/${resource}?${stringify(query)}`,
        //     method: 'DELETE',
        //     params: JSON.stringify(params.data),
        // }).then(({ json }) => ({ data: json }));
    },
};