let set = '24'

function updateTime()
{
    const now = new Date();

    const currentDateTime = now.toLocaleTimeString('en-US');

    document.querySelector('#time').innerHTML = currentDateTime;
}

function toggleTime()
{
    set = '12';
    console.log(set);
}

console.log("test");
setInterval(updateTime, 1000);
document.querySelector('#toggle').addEventListener(onclick) = toggleTime();