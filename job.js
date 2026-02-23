let interviewList = [];
let rejectedList = [];
let currentStatus = 'All';

let allBtn = document.getElementById('all-Btn');

let mtData = document.getElementById('mt-data');
let interviewCount = document.getElementById('interview-Count');
let rejectedCount = document.getElementById('rejected-Count');
let cardContainer = document.getElementById('card-Section');
let totalJob = document.getElementById('Total');
let totalCard = document.getElementById('card-Section').children.length;
const cardCount = (totalJob.innerText = totalCard);
let jobTotal = document.getElementById('totalJobs');
jobTotal.innerText = totalCard;

function countIn() {
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

function btnToggle(id) {
  document.querySelectorAll('.main-Btn').forEach((btn) => {
    btn.classList.remove('bg-blue-500');
  });

  const activeBtn = document.getElementById(id);
  currentStatus = id;
  activeBtn.classList.remove('bg-gary-300');
  activeBtn.classList.add('bg-blue-500');

  if (id == 'Interview') {
    mtData.classList.remove('hidden');
    cardContainer.classList.add('hidden');
    filterSection.classList.remove('hidden');
    let totalCard = cardContainer.children.length;     
    jobTotal.innerText = `${interviewList.length} Of ${totalCard} `;
    renderInterview();
  } else if (id == 'all-Btn') {
    mtData.classList.add('hidden');
    cardContainer.classList.remove('hidden');
    filterSection.classList.add('hidden');
    jobTotal.innerText = totalCard;
  } else if (id == 'reject') {
    mtData.classList.remove('hidden');
    cardContainer.classList.add('hidden');
    filterSection.classList.remove('hidden');
    let totalCard = cardContainer.children.length;
    jobTotal.innerText = `${rejectedList.length} Of ${totalCard} `;
    renderReject();
  }
}

let mainContainer = document
  .querySelector('main')
  .addEventListener('click', function (event) {
    if (event.target.classList.contains('Interview')) {
      let jobCard = event.target.parentNode.parentNode;
      let jobTitle = jobCard.querySelector('.job-Title').innerText;
      let jobPosition = jobCard.querySelector('.job-position').innerText;
      let sallary = jobCard.querySelector('.sallary').innerText;
      let applyStatus = jobCard.querySelector('.apply-Status').innerText;
      let jobDescription = jobCard.querySelector('.job-description').innerText;
      jobCard.querySelector('.apply-Status').innerText = 'Interview';

      let jobCardInfo = {
        jobTitle,
        jobPosition,
        sallary,
        applyStatus: 'Interview',
        jobDescription,
      };
      // console.log(jobCardInfo);
      let jobTitleTrue = interviewList.find(
        (item) => item.jobTitle == jobCardInfo.jobTitle
      );

      if (!jobTitleTrue) {
        interviewList.push(jobCardInfo);
      }

      rejectedList = rejectedList.filter(
        (item) => item.jobTitle != jobCardInfo.jobTitle
      );

      if (currentStatus == 'reject') {
        renderReject();
      }

      countIn();
    } else if (event.target.classList.contains('Rejected')) {
      let jobCard = event.target.parentNode.parentNode;
      let jobTitle = jobCard.querySelector('.job-Title').innerText;
      let jobPosition = jobCard.querySelector('.job-position').innerText;
      let sallary = jobCard.querySelector('.sallary').innerText;
      let applyStatus = jobCard.querySelector('.apply-Status').innerText;
      let jobDescription = jobCard.querySelector('.job-description').innerText;
      jobCard.querySelector('.apply-Status').innerText = 'Rejected';
      

      let jobCardInfo = {
        jobTitle,
        jobPosition,
        sallary,
        applyStatus: 'Rejected',
        jobDescription,
      };
      // console.log(jobCardInfo);
      let jobTitleTrue = rejectedList.find(
        (item) => item.jobTitle == jobCardInfo.jobTitle
      );

      if (!jobTitleTrue) {
        rejectedList.push(jobCardInfo);
      }

      interviewList = interviewList.filter(
        (item) => item.jobTitle != jobCardInfo.jobTitle
      );

      if (currentStatus == 'Interview') {
        renderInterview();
      }

      countIn();
    } else if (event.target.classList.contains('delete-Btn')) {
      let jobCard = event.target.parentNode.parentNode;
       jobCard.remove();
        countIn();

       let totalCard = cardContainer.children.length;
       totalJob.innerText = totalCard;
       jobTotal.innerText = totalCard;
    

     
      
    }
  });

let filterSection = document.getElementById('filter-Section');
function renderInterview() {
  filterSection.innerHTML = '';

  if (interviewList.length === 0) {
    mtData.classList.remove('hidden');
    return;
  } else {
    mtData.classList.add('hidden');
  }

  for (let interview of interviewList) {
    console.log(interview);
    let createDiv = document.createElement('div');
    createDiv.className = 'grid grid-cols-1 gap-5';
    createDiv.innerHTML = `
            <div class=" py-5 px-5 shadow-xl relative bg-white rounded-2xl  hover:bg-green-300 hover:bg-blur-[20px] transition hover:scale-103 duration-500 ease-in-out "> 
          <div class="text-end absolute top-6  rounded-full py-2 px-2 right-10 shadow-xl"><i class="delete-Btn text-2xl fa-solid fa-trash-can  hover:text-red-600 hover:scale-125 
          transition duration-200 ease-in-out cursor-pointer"></i></div>
          <h3 class="job-Title text-2xl font-medium  text-blue-950  pb-1">${interview.jobTitle}</h3>
          <p class="job-position text-[18px] font-medium text-neutral/50 pb-5">${interview.jobPosition}</p>
          <p class="sallary text-neutral/70 font-medium pb-5">${interview.sallary}</p>
          <h4 class=" apply-Status bg-blue-50 py-2 inline px-4 font-medium ">${interview.applyStatus}</h4>
          <P class="job-description pt-2 pb-5">${interview.jobDescription}</P>
          <div class="">
              <button class="Interview btn mr-2  text-green-600 border-2 border-green-500">Interview</button>
        <button class="Rejected  btn  text-red-600 border-2 border-red-500">Rejected</button>
          </div>
        </div>
      `;
    filterSection.appendChild(createDiv);
  }
}

function renderReject() {
  filterSection.innerHTML = '';

  if (rejectedList.length === 0) {
    mtData.classList.remove('hidden');
    return;
  } else {
    mtData.classList.add('hidden');
  }

  for (let rejec of rejectedList) {
    let createDiv = document.createElement('div');
    createDiv.className = 'grid grid-cols-1 gap-5';
    createDiv.innerHTML = `
            <div class=" py-5 px-5 shadow-xl relative bg-white rounded-2xl  hover:bg-red-200 hover:bg-blur-[20px] transition hover:scale-103 duration-500 ease-in-out"> 
          <div class="text-end absolute top-6  rounded-full py-2 px-2 right-10 shadow-xl"><i class="fa-solid fa-trash-can  hover:text-red-600 hover:scale-125 
          transition duration-200 ease-in-out cursor-pointer"></i></div>
          <h3 class="job-Title text-2xl font-medium  text-blue-950  pb-1">${rejec.jobTitle}</h3>
          <p class="job-position text-[18px] font-medium text-neutral/50 pb-5">${rejec.jobPosition}</p>
          <p class="sallary text-neutral/70 font-medium pb-5">${rejec.sallary}</p>
          <h4 class=" apply-Status bg-blue-50 py-2 inline px-4 font-medium ">${rejec.applyStatus}</h4>
          <P class="job-description pt-2 pb-5">${rejec.jobDescription}</P>
          <div class="">
              <button class="Interview btn mr-2  text-green-600 border-2 border-green-500">Interview</button>
        <button class="Rejected  btn  text-red-600 border-2 border-red-500">Rejected</button>
          </div>
        </div>
      `;
    console.log(rejec);
    filterSection.appendChild(createDiv);
  }
}
