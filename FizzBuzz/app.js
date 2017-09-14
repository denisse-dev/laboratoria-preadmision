var array = [];

for (var number = 1; number < 101; number++)
{
    if (number % 3 == 0 && number % 5 == 0)
    {
        array.push("FizzBuzz");
    }

    else if (number % 3 == 0)
    {
        array.push("Fizz");
    }

    else if (number % 5 == 0)
    {
        array.push("Buzz");
    }

    else
    {
       array.push(number);
    }
}

console.log(array);
