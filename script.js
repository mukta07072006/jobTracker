


let interviewedJobs= [];
let rejectedJobs = [];





mainContainer.addEventListener("click", function(event){

    const parentCard = event.target.parentNode.parentNode;
    const btnPCard = event.target.parentNode.parentNode.parentNode;
    
    if(event.target.classList.contains("btn-success")){
        const statusElement = parentCard.querySelector("#status");
        const companyElement = parentCard.querySelector("#company");
        const jobTitleElement = parentCard.querySelector("#jobTitle");
        const etcElement = parentCard.querySelector("#etc");
        const detailElement = parentCard.querySelector("#detail");

        
        statusElement.textContent = "Interview";
        

        const jobDetailes ={
            company: companyElement.textContent,
            jobTitle: jobTitleElement.textContent,
            etc: etcElement.textContent,
            detail: detailElement.textContent,
            status: "Interview"

        }

        const existingCheck = interviewedJobs.find(job => job.company === jobDetailes.company && job.jobTitle === jobDetailes.jobTitle);


        if (statusElement.textContent === "Interview" && !existingCheck) {
            rejectedJobs = rejectedJobs.filter(job => job.company !== jobDetailes.company);
            interviewedJobs.push(jobDetailes);
            
    } 
        }
        console.log(rejectedJobs);
           
    
    // console.log(parentCard);
    if(event.target.classList.contains("btn-error")){
        
        const statusElement = parentCard.querySelector("#status");
        const companyElement = parentCard.querySelector("#company");
        const jobTitleElement = parentCard.querySelector("#jobTitle");
        const etcElement = parentCard.querySelector("#etc");
        const detailElement = parentCard.querySelector("#detail");

        statusElement.classList.add("text-red-900", "bg-red-200");
        statusElement.textContent = "Rejected";
        

        const jobDetailes ={
            company: companyElement.textContent,
            jobTitle: jobTitleElement.textContent,
            etc: etcElement.textContent,
            detail: detailElement.textContent,
            status: "Rejected"

        }

        const existingCheck = rejectedJobs.find(job => job.company === jobDetailes.company && job.jobTitle === jobDetailes.jobTitle);

        if (statusElement.textContent === "Rejected" && !existingCheck) {
            interviewedJobs = interviewedJobs.filter(job => job.company !== jobDetailes.company);
            rejectedJobs.push(jobDetailes);
            
        }
        

    }

   

    if (event.target.classList.contains("dlt-btn")){
        // console.log("btnPCard", btnPCard);
        btnPCard.remove();
        
        let totalJobs = document.getElementById("cardContainer").childElementCount;
        
        const jobTitleElement = btnPCard.querySelector("#jobTitle").textContent;
        const existingCheck= interviewedJobs.find(job => job.jobTitle === jobTitleElement)
        const rejectedcheck = rejectedJobs.find(job=> job.jobTitle === jobTitleElement)
        console.log(existingCheck);
        console.log(jobTitleElement);
        console.log(rejectedJobs);
        if(existingCheck){
            interviewedJobs = interviewedJobs.filter(job => job.jobTitle !== jobTitleElement)
        }
        else if (rejectedcheck){
            rejectedJobs = rejectedJobs.filter (job => job.jobTitle !== jobTitleElement)
        }
        console.log(rejectedJobs);

        if(interviewedJobs.length === 0){
            emptyMessage.classList.remove("hidden")
            emptyMessage.classList.add("flex")
            // totalCount.textContent = totalJobs;

            if(rejectedJobs.length === 0){
            console.log(rejectedJobs.length);
            emptyMessage.classList.remove("hidden")
            emptyMessage.classList.add("flex")
        }

        }
        
        else{
            emptyMessage.classList.add("hidden")
        }

       

        interviewCount.textContent = interviewedJobs.length;
        rejectedCount.textContent = rejectedJobs.length; 
        totalCount.textContent = totalJobs;
        totalOf.textContent = totalJobs;
        topTotal.textContent = totalJobs;

         if(event.target.classList.contains("child")){
            totalOf.textContent=interviewedJobs.length;
        }
        

        

            
    }

     renderJobs();



           

interviewCount.textContent = interviewedJobs.length;
rejectedCount.textContent = rejectedJobs.length; 







// console.log(rejectedJobs);
// console.log(rejectedContainer);
return interviewedJobs, rejectedJobs;


})




function renderJobs(){

    rejectedContainer.innerHTML = "";
    interviewContainer.innerHTML = "";


    rejectedJobs.forEach(job => {
        const card = document.createElement("div");
        card.innerHTML = 
        
        `
        <div class="bg-base-100 border-[1px] border-gray-200 px-5 py-7 rounded-xl mt-6 mb-6 cardC">
        <h2 id="company" class="font-semibold text-lg text-blue-950 flex justify-between items-center">
            <span>${job.company}</span>
            <div><img class="dlt-btn cursor-pointer" src="Group 1.svg" alt=""></div>
        </h2>
        <p id="jobTitle" class="text-sm text-gray-700 mb-3">${job.jobTitle}</p>
        <p id="etc" class="text-sm text-gray-500 mb-3">${job.etc}</p>
        <div id="status" class="bg-red-100 text-red-900 rounded-sm font-medium w-fit px-2 py-1 mb-3">${job.status}</div>
        <p id="detail" class="text-sm text-gray-700 mb-3">${job.detail}</p>
        <div>
            <button class="btn btn-success btn-outline">INTERVIEW</button>
            <button class="btn btn-error btn-outline">REJECT</button>
        </div>
    </div>
        `
        
        rejectedContainer.appendChild(card);
    })

    interviewedJobs.forEach(job => {
    const card = document.createElement("div");
    card.innerHTML = `
        <div class="bg-base-100 border-[1px] border-gray-200 px-5 py-7 rounded-xl mt-6 mb-6 cardC">
        <h2 id="company" class="font-semibold text-lg text-blue-950 flex justify-between items-center">
            <span>${job.company}</span>
            <div><img class="dlt-btn cursor-pointer" src="Group 1.svg" alt=""></div>
        </h2>
        <p id="jobTitle" class="text-sm text-gray-700 mb-3">${job.jobTitle}</p>
        <p id="etc" class="text-sm text-gray-500 mb-3">${job.etc}</p>
        <div id="status" class="bg-green-100 text-green-900 rounded-sm font-medium w-fit px-2 py-1 mb-3">${job.status}</div>
        <p id="detail" class="text-sm text-gray-700 mb-3">${job.detail}</p>
        <div>
            <button class="btn btn-success btn-outline">INTERVIEW</button>
            <button class="btn btn-error btn-outline">REJECT</button>
        </div>
    </div>
        `
    interviewContainer.appendChild(card);
})
}

