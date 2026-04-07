import http from "k6/http";
import { check, group, sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"

const BASE_URL = __ENV.BASE_URL || "https://test.k6.io";

const Traffic_Split = {
  home: 0.6,
  news: 0.2,
  blog: 0.2,
};

export const options = {
  // vus:3,
  // duration:'5s',

  stages: [
    { duration: "5s", target: 5 },
    { duration: "5s", target: 5 },
    { duration: "5s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(95) < 800"],
    http_req_failed: ["rate <= 0.05"],
    checks: ["rate >= 0.9"],
  },
};

// This function has to be the entry point for the program to start
export default function () {
  let random = Math.random();
  if (random < Traffic_Split.home) {
    group("Open Home page", () => {
      const response = http.get(BASE_URL);
      check(response, {
        "Home Page status is 200": (res) => res.status === 200,
      });
    });
    sleep(1);
  } else if(random < Traffic_Split.home + Traffic_Split.news){
    group("Open News page", () => {
    const response = http.get(`${BASE_URL}/news.php`);
    check(response, {
      "News Page loaded, status is 200": (res) => res.status === 200,
    });
  });
  sleep(1);
  } else {
    group("Open Blogs page", () => {
    const response = http.get(`${BASE_URL}/blog/`);
    check(response, {
      "Blogs Page not loaded, status is 404": (res) => res.status === 404,
    });
  });
  sleep(1);
  }
  
}

// this program will generate an HTML Report once the tests from the default function have been carried out
export function handleSummary(data){
    return{
        "finalreport.html":htmlReport(data),
    }
}
