let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let dd = document.getElementById('dd')
let hh = document.getElementById('hh')
let mm = document.getElementById('mm')
let ss = document.getElementById('ss')


// Formato fecha mes-dia-año
let endDate = '01/01/2024 00:00:00'

let x = setInterval(function () {
    let now = new Date(endDate).getTime()
    let contDown = new Date().getTime()
    let distance = now - contDown

    // Cálculo de tiempo por días, horas, minutos y segundos

    let d = Math.floor(distance / (1000 * 60 * 60 * 24))
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let s = Math.floor((distance % (1000 * 60)) / (1000))

    // Salida del resultado en el elemento con Id

    days.innerHTML = d + "<br><span>Días</span>"
    hours.innerHTML = h + "<br><span>Horas</span>"
    minutes.innerHTML = m + "<br><span>Minutos</span>"
    seconds.innerHTML = s + "<br><span>Segundos</span>"

    dd.style.strokeDashoffset = 440 - (440 * d) / 365
    hh.style.strokeDashoffset = 440 - (440 * h) / 24
    mm.style.strokeDashoffset = 440 - (440 * m) / 60
    ss.style.strokeDashoffset = 440 - (440 * s) / 60

    // Si la cuenta ha terminado se muestra el texto "Feliz año nuevo"

    if (distance < 0) {
        clearInterval(x)
        document.getElementById('time').style.display = "none"
        document.querySelector(".newYear").style.display = "block"
    }

});