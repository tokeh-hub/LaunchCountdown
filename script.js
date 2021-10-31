const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const launchDate = new Date('December 1 2021 00:00:00')
function countDown(){
    const currentDate = new Date()
    const difference = launchDate - currentDate
    console.log(difference)
    var day = Math.floor(difference/1000/60/60/24)
    var hour =  Math.floor(difference/1000/60/60) % 24
    var minute =  Math.floor(difference/1000/60) % 60
    var second =  Math.floor(difference/1000) % 60

    days.innerHTML = day
    hours.innerHTML = hour < 10 ? '0' + hour : hour
    minutes.innerHTML = minute < 10 ? '0' + minute : minute
    seconds.innerHTML = second < 10 ? '0' + second  : second
}
setInterval(countDown,1000)



