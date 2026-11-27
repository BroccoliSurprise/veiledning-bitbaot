# Julenissen trenger hjelp!

## Velkommen! @showdialog

I dag skal vi levere julegaver til den internasjonale romstasjonen med  Bit:Bot-roboter. 
Trykk OK for å fortsette videre i denne veiledningen, så får du se hvordan du kan styre roboten.

(If you would like this guide in english, [please follow this link.](https://makecode.microbit.org/#tutorial:github:broccolisurprise/veiledning-bitbaot/sateliteEnglish))

## Programmere selv, eller fjernstyre? @showdialog

Programmering er lettere enn man skulle tro. Har du for eksempel poppet popcorn i en mikrobølgeovn før? Da har du programmert en robot!

Hvis du har lyst til å lære hvordan du programmerer Bit:Båt-roboten til å skifte lys og kjøre rundt på sjøen kan du trykke på OK for å fortsette.

Dersom du heller har lyst til å gå rett på lek og moro, kan du [trykke her for å fjernstyre Bit:Båten selv](https://vilvite.github.io/FaceRace4microbit/spaceboat.html) i stedet. Spør ViteVerten, så får du riktig type micro:bit til å fjernstyre!

## Godt valg!
La oss sette i gang.

Det første vi må gjøre er å sette riktig farge på lysene. Trykk på den turkise og lilla rundingen for å velge nye farger.

Hvis du er usikker på hvilken side som er styrbord og babord, kan du ta en titt på det store bordet. 



```blocks
bitbaot.setStarboardColor(0x00FF00)
bitbaot.setPortColor(0xFF0000)

```

## Last ned det nye programmet
micro:biten er hjernen til roboten, og det er denne som bestemmer hvordan BitBoten skal oppføre seg. For at micro:biten skal vite hva den skal gjøre, må vi koble den til med en USB-ledning og trykke ``|Download|``-knappen nede til venstre.

Spør gjerne en Vitevert i grønn skjorte om du trenger hjelp, de er her for å hjelpe og svare på spørsmål.


## Test BitBåten
Vent til nedlastingen er ferdig, og trekk ut USB-ledningen fra micro:biten. Plukk forsiktig opp Bit:Boten, og finn ON/OFF-bryteren mellom bakhjulene. 

Lyser de riktige fargene når du skrur BitBoten **på**?

## Programmer bevegelser
Nå skal vi bygge videre på programmet slik at roboten kan kjøre og svinge.

Skru BitBoten AV og sett den tilbake på bordet med USB-ledning koblet til. 

## Programmer bevegelser 
Vi vil helst at roboten ikke kjører automatisk når vi skrur på strømmen, så vi trenger en ``||input:Når knapp A trykkes||``-kloss som kan gi oss litt mer kontroll.

Du finner denne i ``||input:Inndata||``-menyen. Klikk og dra den ut i programmet, du kan plassere den hvor som helst.

```blocks

input.onButtonPressed(Button.A, function () {
	
})

```

## Programmer bevegelser
Klikk på ``||green:BitBåt||``-menyen og så ``||green:Kjøring||``. 

Plukk og velg klossene i den rekkefølgen du vil, og legg de inn i den lilla ``||input:Når knapp A trykkes||``-klossen.

Du kan eksperimentere med tallene og kommandoene her på egenhånd, eller trykke på **Lyspære**-ikonet under her for et tips til noen som er gode å begynne med.


```blocks
input.onButtonPressed(Button.A, function () {
    bitbaot.goms(BBDirection.Forward, 80, 2000)
    bitbaot.rotatems(BBRobotDirection.Left, 60, 500)
})
```

## Last ned og test
Dobbeltsjekk på at BitBoten er skrudd AV før du fortsetter.

Koble micro:biten til med USB-ledning, vent noen sekunder til du ser "smilefjeset" på ``|Download|``-knappen, og trykk på samme måte som i sted for å laste ned det nye programmet.

Vent til den er ferdig, trekk ut ledningen, og sett roboten **enten på gulvet eller på bordet med romstasjonen** før du skrur den på igjen.

## Trykk på A-knappen for å starte
Når BitBoten står trygt, kan du skru den PÅ, og trykke på A-knappen **på micro:biten** for å kjøre.

Gikk den slik du ville? Dersom BitBoten bevegde seg rart (eller ikke ville kjøre i det hele tatt), kan det være lurt å spørre en Vitevert om hjelp til å sjekke programmet eller utstyret for feil.


## Godt jobbet! Nå kan du utforske på egenhånd

Takk for følget! Da er det bare å trykke på ``||Done||``-knappen for å avslutte veiledningen, så får du fri tilgang til ***alle*** funksjonene og kommandoene som BitBoten er i stand til å følge.

Lykke til med oppdragene!

```template
bitbaot.setStarboardColor(0x00FFFF)
bitbaot.setPortColor(0xFF00FF)

```


```ghost
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showNumber(0)
basic.showString("Hello!")
for (let index = 0; index < 4; index++) {
	
}

basic.forever(function () {
	
})
```