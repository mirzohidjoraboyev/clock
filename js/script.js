let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

function clock() {

    let time = new Date();
    let hour = new Date().getHours();
    let minut = new Date().getMinutes();
    let sec = new Date().getSeconds();

    hours.innerText = hour
    minutes.innerText = minut

    if (minut < 10) {
        minutes.innerHTML = '0' + minut
    } else {
        minutes.innerHTML = minut
    }
    if (hour < 10) {
        hours.innerHTML = '0' + hour
    } else {
        hours.innerHTML = hour
    }

    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${minut * 6}deg)`
    h.style.transform = `rotate(${hour * 6}deg)`

    setTimeout(() => {
        clock()
    }, 1000);

}
clock()


let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', () => {
        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove('active')
            tabsContentItem[k].classList.remove('active')

        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}

let hoursMetr = document.querySelector('.stopwatch__hours')
let minsMetr = document.querySelector('.stopwatch__minutes')
let secundsMetr = document.querySelector('.stopwatch__seconds')

let btn = document.querySelector('.stopwatch__btn')
let span = document.querySelector('.tabsLink__span')

let stop

btn.addEventListener('click',function(){
    if(this.innerHTML === 'start'){
        this.innerHTML = 'stop'
        span.classList.add('active')
        startTimer()
    }else if(this.innerHTML === 'stop'){
        this.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
        clearInterval(stop)
    }else if (this.innerHTML === 'clear'){
        this.innerHTML = 'start'
        span.classList.remove('active_clear')

        hoursMetr.innerHTML = 0
        minsMetr.innerHTML = 0
        secundsMetr.innerHTML = 0
    }
})

function startTimer() {
    secundsMetr.innerHTML++

    if (secundsMetr.innerHTML > 59){
        secundsMetr.innerHTML = 0
        minsMetr.innerHTML++

        if(minsMetr.innerHTML > 59){
            hoursMetr.innerHTML++
        }
    }

    stop = setTimeout(() => {
        startTimer()
    }, 1);
}