const API = "https://api.themoviedb.org/3";
const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzU5ZWZhMmM1ZjYwOGViODcxZTgyY2U2OGRlNmVlNiIsIm5iZiI6MTc1NDMzNTI1My41MDQ5OTk5LCJzdWIiOiI2ODkxMDgxNThmZTIyZmM3ZjgxMWRlN2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aKNZwcjxPB70AzxK9mqV6rk008HE9LQ-JcXUVdTR1sI";

export function get(path){
    return fetch(API + path, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "content-type": "application/json;charset=utf-8"
        }
    }).then((result) => result.json());
}