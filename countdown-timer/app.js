// months
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// weeks
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
  
// selectors.
const deadline = document.querySelector('.deadline')
const giveaway = document.querySelector('.giveaway')
const dataItems = document.querySelectorAll('.deadline-format h4')

// Month : 0 - 11. 
// Weekdays : 0-6 

// Set futur date details.
let tempDate = new Date(); 
let givenYear = tempDate.getFullYear();
let givenMonth = tempDate.getMonth() ; 
let givenDate = tempDate.getDate() + 20; 
let givenHour = 12; 
let givenMin = 30; 
let givenSec = 22; 

// set the future date
let futureDate = new Date(givenYear, givenMonth, givenDate, givenHour, givenMin, givenSec); 

// extract year
let year = futureDate.getFullYear();
// extract hour
let hour = futureDate.getHours();
// extract Min
let minute = futureDate.getMinutes();
// extract month from the array
let month = months[futureDate.getMonth()]; 
// extract date
let date = futureDate.getDate()
// extract weekday
let weekday = weekdays[futureDate.getDay()]

// console.log(year, month, date, hour, weekday, minute)

// set the date string
giveaway.textContent = `Giveaway Ends On ${weekday}, ${date} ${month} ${year}, ${hour}:${minute}`; 


// future time in ms 
const futureTime = futureDate.getTime(); 

function getRemainingTime () {
    const today = new Date().getTime();
    
    // remainign time in ms
    const t = futureTime - today; 

    // calculate in milliseconds
    // 24h * 60min * 60sec * 1000ms
    const onDay = 24 * 60 * 60 * 1000;
    const onHOur =  60 * 60 * 1000;
    const oneMinute =  60 * 1000;

    
    // remaining day 
    let days = Math.floor(t/onDay); 
    let hours = Math.floor((t % onDay) / onHOur); 
    let minutes = Math.floor((t % onHOur) / oneMinute); 
    let seconds = Math.floor((t % oneMinute) / 1000); 


    // set value to html
    let values = [days, hours, minutes, seconds]; 
    dataItems.forEach((item, index) => {
        item.innerHTML = formData(values[index]);
    })
    

    // if deadline is expired
    if(t < 0) {
        deadline.innerHTML = `<h4>Sorry this giveaway has expired!</h4>`
    }
}


// console.log(futureTime)
function formData(item) {
    if(item < 10) {
        return `0${item}`;
    }
    return item; 
}

// countdown per second
let countdown = setInterval(getRemainingTime,1000);

// call the function to get the fur
getRemainingTime()