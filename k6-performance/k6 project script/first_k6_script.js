import http from 'k6/http'
import { sleep, check } from 'k6'
// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"


const BASE_URL = __ENV.BASE_URL || 'https://test.k6.io' 
//this means that if we do not provide the value of base url from cli, then it will fallback to this value instead

export const options = {
    // vus:3,
    // duration:'5s',

    stages:[
        {duration:'5s', target:5},
        {duration:'3s', target:5},
        {duration:'5s', target:0},
    ],
    thresholds:{
        http_req_duration: ['p(95)<700']   //this means that 95% of the requests must finish in under 700 milliseconds.
    },
};

export default function(){

    const response = http.get(BASE_URL);

    check(response, {
        'status is 200':(r) => r.status === 200,
    });
    sleep(1);
}

// export function handleSummary(data){
//     return{
//         "report1.html":htmlReport(data),
//     }
// }