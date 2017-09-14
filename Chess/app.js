var grid = prompt("Ingresa el número de filas y columnas");
var chess = "";

for (var i = 0; i < grid; i++)
{
    if (i % 2 == 0)
    {
        for (var j = 0; j < grid; j++)
        {
            if (j % 2)
            {
                chess += "X";
            }

            else
            {
                chess += "O";
            }
        }
    }

    else
    {
        for (var j = 0; j < grid; j++)
        {
            if (j % 2)
            {
                chess += "O";
            }

            else
            {
                chess += "X";
            }
        }
    }
    chess += "\n";
}

console.log(chess);
