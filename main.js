let days = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let dd = document.getElementById('dd')
let hh = document.getElementById('hh')
let mm = document.getElementById('mm')
let ss = document.getElementById('ss')

// Formato fecha mes-dia-año
let endDate = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);

let x = setInterval(function () {
    let now = new Date().getTime()
    let contDown = endDate.getTime()
    let distance = contDown - now

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

    // Simula que la cuenta regresiva ha llegado al final
    //endDate = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0);

    // Si la cuenta ha terminado, reinicia la cuenta regresiva para el próximo año
    if (distance < 0) {
        endDate = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);
        clearInterval(x);
        document.getElementById('time').style.display = "none"
        document.getElementById('newYearMessage').style.display = "block"
        document.getElementById('newYearMessage').innerHTML = (new Date().getFullYear() + 1) + "<br><span>Feliz Año Nuevo 🥂!!!</span>"; // Actualiza el mensaje de Año Nuevo
        document.querySelector('.fireworks').classList.remove('hidden');
        setTimeout(function () {
            document.getElementById('time').style.display = "block"
            document.getElementById('newYearMessage').style.display = "none"
            document.querySelector('.fireworks').classList.add('hidden');
            x = setInterval(function () {
                // ...
            }, 1000);
        }, 5000); // tiempo de espera para mostrar el texto "Feliz año nuevo"
    }
}, 1000);

const fireworks = document.querySelector('.fireworks');

function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    spark.style.top = `${y}px`;
    spark.style.left = `${x}px`;
    fireworks.appendChild(spark);
}

function animateFireworks() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        createSpark(x, y);
    }
    setTimeout(animateFireworks, 1000);
}

animateFireworks();