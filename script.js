let set = '24'

function updateTime()
{
    const now = new Date();

    const currentDateTime = now.toLocaleTimeString('en-US');

    document.querySelector('#time').innerHTML = currentDateTime;
}

let button = document.querySelector('button');
button.onclick = alert('I was clicked');
function toggleTime()
{
    document.querySelector('button').innerHTML = "test";
}

function test()
{
    document.querySelector('button').innerHTML = "changed";
}


//document.addEventListener('DOMContentLoaded', toggleTime);
//setInterval(updateTime, 1000);
//document.querySelector('button').addEventListener("click", test);
console.log("test");
