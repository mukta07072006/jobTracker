
function renderJobs(dataToDisplay){




    cardContainer.innerHTML= '';
    if (dataToDisplay.length === 0) {
    emptyMessage.classList.remove("hidden");
    emptyMessage.classList.add("flex");
    }
    else{
        const emptyMessage = document.getElementById("empty")
        emptyMessage.classList.add("hidden");
    }


    dataToDisplay.forEach(job => {
        let statusDefault = "bg-blue-100 text-blue-900"
        if (job.status === "Interview"){
            statusDefault = "bg-green-100 text-green-900"
        }
        else if(job.status === "Rejected"){
            statusDefault = "bg-red-100 text-red-900"
        }
        const cards = document.createElement("div");
        cards.innerHTML=`
        <div class="bg-base-100 border-[1px] border-gray-200 px-5 py-7 rounded-xl mt-6 mb-6 cardC">
        <h2 id="company" class="font-semibold text-lg text-blue-950 flex justify-between items-center">
            <span>${job.company}</span>
            <div class="btn-div"><img class="dlt-btn cursor-pointer" data-company="${job.company}" src="delete.svg" alt=""></div>
        </h2>
        <p id="jobTitle" class="text-sm text-gray-700 mb-3">${job.jobTitle}</p>
        <p id="etc" class="text-sm text-gray-500 mb-3">${job.etc}</p>
        <div id="status" class="${statusDefault} rounded-sm font-medium w-fit px-2 py-1 mb-3">${job.status}</div>
        <p id="detail" class="text-sm text-gray-700 mb-3">${job.detail}</p>
        <div>
            <button class="btn btn-success btn-outline" data-company="${job.company}">INTERVIEW</button>
            <button class="btn btn-error btn-outline" data-company="${job.company}">REJECT</button>
        </div>
    </div>
        `

        cardContainer.appendChild(cards);
    })
}