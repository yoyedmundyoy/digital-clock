let set = 12;

function updateTime()
{
    const now = new Date();
    var currentDateTime;

    switch (set) {
        case 24:
            currentDateTime = now.toLocaleTimeString('it-IT');
            break;
        case 12:
            currentDateTime = now.toLocaleTimeString('en-US');
            break;
        default:
            break;
    }

    document.querySelector('#time').innerHTML = currentDateTime;
}

function button()
{
    var button = document.querySelector('button');
    button.innerHTML = "View 24-hour format"
    button.addEventListener('click', buttonClicked);
}

function buttonClicked()
{
    var button = document.querySelector('button');
    set = (set == 24) ? 12 : 24;
    switch (set) {
        case 24:
            button.innerHTML = "View 12-hour format"
            break;
        case 12:
            button.innerHTML = "View 24-hour format"
            break;
        default:
            break;
    }
    updateTime();
}


document.addEventListener('DOMContentLoaded', button);
setInterval(updateTime, 1000);

