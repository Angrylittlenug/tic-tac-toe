
/**
 * PIRMAS UŽRAKTAS
 * Čipinam?
 * Aš kilęs iš Jonavos - esu pratęs čipinti. Nemanau, kad prieš mane laimėsi ;)
 * Įsivaizduok, kad žinai čiu-pa-čiups konkurento ėjimą. Ką turi išmesti kad laimėtum?
 * ------------------------------------
 * | action    | funkcijos rezultatas |
 * ------------------------------------
 * | "lapas"   |            "zirkles" |
 * | "akmuo"   |              "lapas" |
 * ... ir taip toliau
 * ------------------------------------
 */
function playGame(action) {
    if (action.toLowerCase() == "lapas") {
        return "zirkles"
    }
    if (action.toLowerCase() == "zirkles") {
        return "akmuo"
    }
    if (action.toLowerCase() == "akmuo") {
        return "lapas"
    }
}

/**
 * ANTRAS UŽRAKTAS
 * Saldainiai
 * Aš - terabaitas - mėgstu boilerkinius saldainius. Tau duotas žmonių ir saldainių skaičius. Kiek saldainių teks vienam žmogui?
 * Pastaba: Saldainių laužyti negalima. Jei negalima pasidalinti, saldainiai niekam neatitenka.
 * -------------------------------------------------
 * | numPeople | numCandies | funkcijos rezultatas |
 * -------------------------------------------------
 * |        14 |          7 |                    2 |
 * |         5 |          3 |                    0 |
 * |         3 |          7 |                    2 |
 * ... ir taip toliau
 * --------------------------------
 */
function calculateCandy(numPeople, numCandies) {
    return 999
}

/**
 * TREČIAS UŽRAKTAS
 * Sugalvojau skaičių seriją - 1, 2, 3, 5, 8, 13, 21, ...
 * Ši funkcija turi apskaičiuoti sekos skaičių pagal duotą sekos indeksą:
 * --------------------------------
 * | index | funkcijos rezultatas |
 * --------------------------------
 * |     0 |                    1 |
 * |     1 |                    2 |
 * |     2 |                    3 |
 * |     3 |                    5 |
 * |     4 |                    8 |
 * ... ir taip toliau
 * --------------------------------
*/
function getNextInSeries(index) {
    return 999
}