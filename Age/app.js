var stages = ["baby", "toddler", "preschooler", "gradeschooler", "teen", "young adult"];

var yourStage = function(age)
{
    if (age >= 1 && age < 3)
    {
        console.log("You're a " + stages[1]);
    }

    else if (age >= 3 && age < 5)
    {
        console.log("You're a " + stages[2]);
    }

    else if(age >= 5 && age < 12)
    {
        console.log("You're a " + stages[3]);
    }

    else if(age >= 12 && age < 18)
    {
        console.log("You're a " + stages[4]);
    }

    else if(age >= 18 && age < 21)
    {
        console.log("You're a " + stages[5]);
    }

    else
    {
        console.log("Are you a " + stages[0] + "?");
    }
}

var age = prompt("Dame tu edad");
yourStage(age);
