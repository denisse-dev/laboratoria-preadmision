var menu = ["ceviche", "tacos al pastor", "empanada chilena", "hamburguesa"];
var availableMenu = [];
var elements = 4;

var available = function()
{
    for (var i = 0; i < elements; i++)
    {
        food = confirm("¿Hay " + menu[i] + " ?");

        if (food)
        {
            availableMenu.push(menu[i]);
        }
    }

    if (typeof availableMenu[0] != 'undefined')
    {
        console.log("Hoy comerás " + availableMenu[0])
    }
    else
    {
        console.log("Hoy no hay ni " + menu[3])
    }
}

available();
