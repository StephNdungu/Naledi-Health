const schedule = document.getElementById('schedule')

const url = 'https://db-mu-gold.vercel.app/clinic_hours'

fetch(url)
.then (res => res.json()) 
.then (data => 
   data.forEach(datas =>{   //extracts each data from the object
    //console.log(datas);
    const timeTable = document.createElement('h1')
    timeTable.textContent = `Name:${ datas.title}`//interpolates name to doctor 
    schedule.appendChild(timeTable) //adds input data from form to the load more section in 'speak to a dr

    const day = document.createElement('h2')
    day.textContent = `Day:${datas.days}` //interpolates day to specific day
    schedule.appendChild(day)

    const time = document.createElement('h3')
    time.textContent = `Time:${datas.timeSlot}`
    schedule.appendChild(time)

    const spec = document.createElement('h4')
    spec.textContent = `Speciality:${datas.spec}`
    schedule.appendChild(spec)

   }) 
//console.log(data)
)



//creating functions for respective buttons- 'Speak to a doctor' ,'Buy medication' , '
function load() {
schedule.classList.toggle('hidden')
}
//displays content in 'load more' when clicked, otherwise it remains hidden
const loadMore = document.getElementById('loadMore');
loadMore.addEventListener('click', load);

function medss() {
    console.log(10);    
}
pTag.style.display = 'block'
pTag.style.color = 'purple'

const meds = document.getElementById('meds')
meds.addEventListener('click' , medss);
meds.classList.toggle('hidden')

function healthEd() {
    console.log('healthy');
}
const free = document.getElementById('free')
free.addEventListener('click' , healthEd);

function comms (){
    console.log(200);
}
const commHealth = document.getElementById('commHealth')
commHealth.addEventListener('click' ,comms)

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
	// prevent Form from resubmitting
	event.preventDefault();
	console.log(event);

	//Getting form inputs
	const name = document.querySelector("#doctorName").value;
	const days = document.querySelector("#days").value;
	const spec = document.querySelector("#speciality").value;
	const time = document.querySelector("#timeSlot").value;
	
const formData = {
		title: name,
		days: days,
		spec: spec,
		timeSlot: time,
	};
	console.log(formData);

	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(formData),
	})
		.then((res) => res.json())
		.then((property) => renderProperty(property));
	form.reset();
	// Reload the page after a short delay to allow rendering the new property
	// set
});