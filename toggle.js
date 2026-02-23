renderJobs(allJobs)

function toggle(id){
 btnAll.classList.add("btn-soft");
 btnInterview.classList.add("btn-soft");
 btnRejected.classList.add("btn-soft");

    if(id === "btnAll"){
        btnAll.classList.add("bg-[#3B82F6]", "text-white");
        btnAll.classList.remove("text-gray-500", "bg-white");
        btnInterview.classList.remove("bg-[#3B82F6]", "text-white");
        btnRejected.classList.remove("bg-[#3B82F6]", "text-white");
        btnInterview.classList.add("text-gray-500", "bg-white");
        btnRejected.classList.add("text-gray-500", "bg-white");
        renderJobs(allJobs);
        totalCount.textContent = allJobs.length;
        totalOf.textContent = allJobs.length;
        activeTab = "All"
        
    }
    if(id === "btnInterview"){
        btnInterview.classList.remove("text-gray-500", "bg-white");
        btnAll.classList.remove("bg-[#3B82F6]", "text-white");
        btnInterview.classList.add("bg-[#3B82F6]", "text-white");
        btnRejected.classList.remove("bg-[#3B82F6]", "text-white");
        btnRejected.classList.add("text-gray-500", "bg-white");
        btnAll.classList.add("text-gray-500", "bg-white");
        const interviewOnly = allJobs.filter(job => job.status === "Interview");
        renderJobs(interviewOnly);
        totalCount.textContent = allJobs.length;
        totalOf.textContent = interviewOnly.length
        activeTab = "Inter"
    }
    if(id === "btnRejected"){
        btnAll.classList.remove("bg-[#3B82F6]", "text-white");
        btnInterview.classList.remove("bg-[#3B82F6]", "text-white");
        btnRejected.classList.remove("text-gray-500", "bg-white");
        btnRejected.classList.add("bg-[#3B82F6]", "text-white");
        btnAll.classList.add("text-gray-500", "bg-white");
        btnInterview.classList.add("text-gray-500", "bg-white");
        const rejectedOnly = allJobs.filter(job => job.status === "Rejected");
        renderJobs(rejectedOnly);
        totalCount.textContent = allJobs.length;
        totalOf.textContent = rejectedOnly.length
        activeTab="Reject"
    }
}
