mainContainer.addEventListener("click", function(event){

    const parentCard = event.target.closest(".cardC");
    const statusElement = parentCard.querySelector("#status");
    // console.log(statusElement);

    if (event.target.classList.contains("btn-success")){
       const companyName = event.target.dataset.company;
       const jobToUpdate = allJobs.find(job => job.company === companyName);
       const dltBtn = parentCard.querySelector(".dlt-btn");
       dltBtn.classList.add("hidded")
       if(jobToUpdate){
        jobToUpdate.status = "Interview"
         if (activeTab === "All"){
            renderJobs(allJobs);
         }
         else if (activeTab === "Inter"){
            const interCount = allJobs.filter(job => job.status === "Interview");
            renderJobs(interCount);
         }
         else if(activeTab === "Reject"){
             const rejectedCCount = allJobs.filter(job => job.status === "Rejected");
             renderJobs(rejectedCCount)
         }
       }
        statusElement.classList.remove("text-red-900", "bg-red-200");
        statusElement.classList.remove("bg-blue-100" , "text-blue-900");
        statusElement.classList.add("text-green-900", "bg-green-200");
        const interCount = allJobs.filter(job => job.status === "Interview");
        // console.log(interCount.length);
        interviewCount.textContent = interCount.length;
        const rejectedCCount = allJobs.filter(job => job.status === "Rejected");
        // console.log(rejectedCCount.length);
        rejectedCount.textContent = rejectedCCount.length;
        
       
    }
    if (event.target.classList.contains("btn-error")){
        const companyName = event.target.dataset.company;
        const jobToUpdate = allJobs.find(job => job.company === companyName);
        const dltBtn = parentCard.querySelector(".dlt-btn");
          dltBtn.classList.add("hidded")
        if(jobToUpdate){
        jobToUpdate.status = "Rejected"
         if (activeTab === "All"){
            renderJobs(allJobs);
         }
         else if (activeTab === "Inter"){
            const interCount = allJobs.filter(job => job.status === "Interview");
            renderJobs(interCount);
         }
         else if(activeTab === "Reject"){
             const rejectedCCount = allJobs.filter(job => job.status === "Rejected");
             renderJobs(rejectedCCount)
         }
       }
        statusElement.classList.add("text-red-900", "bg-red-200");
        statusElement.classList.remove("bg-blue-100" , "text-blue-900");
        statusElement.classList.remove("text-green-900", "bg-green-200");
        const rejectedCCount = allJobs.filter(job => job.status === "Rejected");
        // console.log(rejectedCCount.length);
        rejectedCount.textContent = rejectedCCount.length;
        const interCount = allJobs.filter(job => job.status === "Interview");
        // console.log(interCount.length);
        interviewCount.textContent = interCount.length;
        // if (rejectedCCount.length === 0){
        //     emptyMessage.classList.remove("hidden")
        // }
        
    }
    
    if(event.target.classList.contains("dlt-btn")){
        const companyName = event.target.dataset.company;
        console.log(companyName);
        console.log(allJobs);
        allJobs = allJobs.filter(job => job.company !== companyName);
        if (activeTab === "All"){
            renderJobs(allJobs);
            totalOf.textContent = allJobs.length;
         }
         else if (activeTab === "Inter"){
            const interCount = allJobs.filter(job => job.status === "Interview");
            renderJobs(interCount);
            totalOf.textContent = interCount.length;
         }
         else if(activeTab === "Reject"){
             const rejectedCCount = allJobs.filter(job => job.status === "Rejected");
             renderJobs(rejectedCCount);
             totalOf.textContent = rejectedCCount.length;
         }

        totalCount.textContent = allJobs.length;
        
        topTotal.textContent = allJobs.length;

        const rejectedCCount = allJobs.filter(job => job.status === "Rejected");
        console.log(rejectedCCount.length);
        rejectedCount.textContent = rejectedCCount.length;
        const interCount = allJobs.filter(job => job.status === "Interview");
        console.log(interCount.length);
        interviewCount.textContent = interCount.length;

    }
})