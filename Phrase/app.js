var concatString = "string"
var phrase = "";
var phraseUp = "";
var phraseLength = 0;

var getPhrase = function(concatString)
{
    phrase = prompt("Dame una frase");
    phraseUp = phrase.toUpperCase();
    phraseUp = phraseUp + concatString;
    console.log("La frase \"" + phrase + "\"");
}

var getLength = function(phraseUp)
{
    phraseLength = phraseUp.indexOf(concatString);
    console.log("Contiene " + phraseLength + " caractéres");
}

var getChars = function(phrase, phraseLength)
{
    var whiteSpace = 0;
    var letter = 0;
    for (var i = 0; i < phraseLength; i++)
    {
        if (phraseUp.charAt(i) == " ")
        {
            whiteSpace++;
        }

        else
        {
            letter++;
        }
        console.log(phraseUp.charAt(i));
    }
    console.log("Hay " + whiteSpace + " espacios");
    console.log("Hay " + letter + " letras");

}

getPhrase(concatString);
getLength(phraseUp);
getChars(phraseUp, phraseLength);
