// global variables
let days = 8;
let hours = 23;
let minutes = 56;
let seconds = 5;

let IntervalVAR;
let INTERVALTEST;
let tempo = 5;

// clock
function clock() {
    let updateSeconds = false;
    let updateMinutes = false;
    let updateHours = false;
    let updateDays = false;

    if (seconds > 1) {
        seconds--;
        updateSeconds = true; // seconds changed
    }else if (seconds === 1 && minutes > 0) {
        minutes--;
        seconds = 60; // Reset seconds to 60
        updateSeconds = true; // seconds changed
        updateMinutes = true; // minutes changed
    } 
    else if (minutes > 0) {
        minutes--;
        seconds = 59;
        updateSeconds = true; // seconds changed
        updateMinutes = true; // minutes changed
    } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
        updateSeconds = true; // seconds changed
        updateMinutes = true; // minutes changed
        updateHours = true; // hours changed
    } else if (days > 0) {
        days--;
        hours = 23;
        minutes = 59;
        seconds = 59;
        updateSeconds = true; // seconds changed
        updateMinutes = true; // minutes changed
        updateHours = true; // hours changed
        updateDays = true; // days changed
    }

    if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
        clearInterval(IntervalVAR);
        console.log("CONGRATS BOOOOM");
    }

    // Update animation only if changed
    if (updateSeconds) calendarAnimation("Seconds", seconds);
    if (updateMinutes) calendarAnimation("Minutes", minutes);
    if (updateHours) calendarAnimation("Hours", hours);
    if (updateDays) calendarAnimation("Days", days);

    console.log(days, hours, minutes, seconds);
}

function calendarAnimation(element_name, SECONDS) {
    if (element_name === "Days") {
        // paragraphs
        top_f = "number_front-top-d";
        top_b = "number_back-top-d";
        bottom_f = "number_front-bottom-d";
        bottom_b = "number_back-bottom-d";
        // animations
        wrapper_top_f = "wrapper_front-top-d";
        wrapper_top_b = "wrapper_back-top-d";
        wrapper_bottom_f = "wrapper_front-bottom-d";
        wrapper_bottom_b = "wrapper_back-bottom-d";
    } else if (element_name === "Hours") {
        // paragraphs
        top_f = "number_front-top-h";
        top_b = "number_back-top-h";
        bottom_f = "number_front-bottom-h";
        bottom_b = "number_back-bottom-h";
        // animations
        wrapper_top_f = "wrapper_front-top-h";
        wrapper_top_b = "wrapper_back-top-h";
        wrapper_bottom_f = "wrapper_front-bottom-h";
        wrapper_bottom_b = "wrapper_back-bottom-h";
    } else if (element_name === "Minutes") {
        // paragraphs
        top_f = "number_front-top-m";
        top_b = "number_back-top-m";
        bottom_f = "number_front-bottom-m";
        bottom_b = "number_back-bottom-m";
        // animations
        wrapper_top_f = "wrapper_front-top-m";
        wrapper_top_b = "wrapper_back-top-m";
        wrapper_bottom_f = "wrapper_front-bottom-m";
        wrapper_bottom_b = "wrapper_back-bottom-m";
    } else if (element_name === "Seconds") {
        // paragraphs
        top_f = "number_front-top-s";
        top_b = "number_back-top-s";
        bottom_f = "number_front-bottom-s";
        bottom_b = "number_back-bottom-s";
        // animations
        wrapper_top_f = "wrapper_front-top-s";
        wrapper_top_b = "wrapper_back-top-s";
        wrapper_bottom_f = "wrapper_front-bottom-s";
        wrapper_bottom_b = "wrapper_back-bottom-s";
    }

    const number_topEL_f = document.getElementById(`${top_f}`);
    const number_topEL_b = document.getElementById(`${top_b}`);
    const number_bottomEL_f = document.getElementById(`${bottom_f}`);
    const number_bottomEL_b = document.getElementById(`${bottom_b}`);

    const wrapper_topEL_f = document.getElementById(`${wrapper_top_f}`);
    const wrapper_topEL_b = document.getElementById(`${wrapper_top_b}`);
    const wrapper_bottomEL_f = document.getElementById(`${wrapper_bottom_f}`);
    const wrapper_bottomEL_b = document.getElementById(`${wrapper_bottom_b}`);

    // Only update if there's a change
    if (SECONDS !== undefined) {
        setTimeout(() => {
            number_topEL_f.innerText = SECONDS - 1;
        }, 500);

        setTimeout(() => {
            number_bottomEL_f.innerText = SECONDS;
        }, 500);

        wrapper_topEL_f.classList.add("top_movedown");

        setTimeout(() => {
            number_topEL_b.innerText = SECONDS - 1;
        }, 500);

        wrapper_bottomEL_f.classList.add("back_movedown");

        setTimeout(test, 500);

        function test() {
            number_bottomEL_f.innerText = SECONDS - 1;
            tempo = SECONDS - 1; 
        }

        setTimeout(test2, 800);

        function test2() {
            wrapper_topEL_f.classList.remove("top_movedown");
            wrapper_bottomEL_f.classList.remove("back_movedown");
        }
    }
}

// main
function call_clock() {
    IntervalVAR = setInterval(clock, 1200); 
}

function call_animation() {
    console.log("here");
    INTERVALTEST = setInterval(() => calendarAnimation("Seconds", seconds), 1200); 
}

call_clock(); 
call_animation();
