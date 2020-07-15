
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

    let Year = prompt("Which is the year of your birthday?");

    for(let i = leap; i <= Year; i++)
    {
        if (i % everyLeapYear == 0)
        {
            console.log(i);
            timesLeap ++;
        }
    }
    
    if (timesLeap == 1) console.log(`There was ${timesLeap} leap year between 1948 and your birthday`);
    else console.log(`There were ${timesLeap} leap years between 1948 and your birthday`);
}

function fase3()
{
    const leap = 1948;
    let everyLeapYear = 4;
    let timesLeap = 0

    let fullName = prompt("What is your full name?");
    let Day = prompt("Which is your birthday day?");
    let Month = prompt("And which your month birthday?");
    let Year = prompt("And at last, the year of your birth?");
    let Confirmation;

    for(let i = leap; i <= Year; i++)
    {
        if (i % everyLeapYear == 0)
        {
            console.log(i);
            timesLeap ++;
        }
    }
    
    if (Year % 4 == 0)
    {
        Confirmation = 'El meu any és de traspàs';
    }
    else
    {
        Confirmation = 'El meu any no és de traspàs';
    }

    console.log("The years above are the leap years between 1948 and your birthday");
    console.log(`To sum up: \nEl meu nom és ${fullName} \nVaig néixer al ${Day}/${Month}/${Year} \n${Confirmation}`);
}