
function fase1()
{
    let Name = prompt("What is your name?");
    let lastName1 = prompt("What is your first last name?");
    let lastName2 = prompt("What is your second last name?");

    console.log(`Your name is ${Name} ${lastName1} ${lastName2}`);

    let Day = prompt("Which is your birthday day?");
    let Month = prompt("And which your month birthday?");
    let Year = prompt("And at last, the year of your birth?");

    console.log(`Your birthday is on ${Day}/${Month}/${Year}`);
}

function fase2(fase1)
{
    const leap = 1948;
    let everyLeapYear = 4;
    let timesLeap = 0
    for(let i = leap; i <= Year; i++)
    {
        if (i % everyLeapYear == 0)
        {
            prompt(i);
            timesLeap ++;
        }
    }
    prompt(`There was ${timesLeap} leap years between 1948 and your birthday`);
}
