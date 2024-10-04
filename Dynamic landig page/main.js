// Dom Element//

const time = document.getElementById('time'),
    greeding = document.getElementById('greeding'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// options//
const showAmPm = true

// show time //
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // set AM or PM //
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 hour  formate//
    hour = hour % 12 || 12;

    // output time //
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);

}

// ADD zero //
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set Background //
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // morning
        document.body.style.backgroundImage = "url('image/img6.jpg')"
        greeting.textContent = 'Good Morning'
    } else if (hour < 18) {
        // afternoon
        document.body.style.backgroundImage = "url('image/img5.jpg')"
        greeting.textContent = 'Good Afternoon'
    } else {
        // evening 
        document.body.style.backgroundImage = "url('image/img4.jpg')"
        greeting.textContent = 'Good evening'
        document.body.style.color = 'white';
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus)

// Get name //
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
// set name //
function setName(e) {
    if (e.type === 'keypress') {
        // make sure enter is pressed //
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('name', e.target.innerText)
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// set focus //
function setFocus(e) {
    if (e.type === 'keypress') {
        // make sure enter is pressed //
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('focus', e.target.innerText)
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Get focus //
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//  Run  //
showTime();
setBgGreet();
getName();
getFocus();