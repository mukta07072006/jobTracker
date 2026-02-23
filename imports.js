const totalCount = document.getElementById("totalCount");
const topTotal = document.getElementById("topTotal");
const totalOf = document.getElementById("totalOf");
const btnAll = document.getElementById("btnAll");
const btnInterview = document.getElementById("btnInterview");
const btnRejected = document.getElementById("btnRejected");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const rejectedContainer = document.getElementById("rejectedContainer");
const interviewContainer = document.getElementById("interviewSection");
const cardContainer = document.getElementById("cardContainer");
const rejectedSection = document.getElementById("rejectedSection");
const interviewSection = document.getElementById("interviewContainer");
const emptyMessage = document.getElementById("empty");
const mainContainer = document.querySelector("#container");
totalCount.textContent = allJobs.length;
totalOf.textContent = allJobs.length;

const interCount = allJobs.filter(job => job.status === "Interview");
console.log(interCount.length);
interviewCount.textContent = interCount.length;

let activeTab = "All";