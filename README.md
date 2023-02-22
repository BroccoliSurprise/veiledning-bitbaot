# Kom i gang med micro:bit

##Steg 0 YEAH @showdialog
Før vi begynner, må vi koble sammen PCen og micro:biten.

![Bilde av en micro:bit koblet til](https://d14xnrffmhx4ml.cloudfront.net/1661434482/smarthus-veiledning-microbit-for-seg-selv.png)

Hent micro:bit og USB-ledning og plugg ting sammen.

##Steg 1 prokkprik @showdialog
Og så må vi koble nettleseren til micro:biten, så vi kan laste ned programmene direkte

![Bilde av USB-connect device](https://d14xnrffmhx4ml.cloudfront.net/1661434772/smarthus-veiledning-usbconnect.png)

##Steg 000 

Trykk på de tre prikkene ved siden av "Last ned" og så "Connect Device". Følg informasjonen på skjermen for å koble til.

Hvis ikonet på "Last ned" ser ut som et micro:bit-ansikt i stedet for et papir-ark med en pil, har dere gjort det riktig.

Trykk på "Neste" for å fortsette.

##Steg 0 YEAH

Nå er du klar til å seile! Hent blokker fra menyen til venstre for å bygge programmet ditt.

Vent på klarsignal fra formidleren før dere går for å hente båten.

##Steg 2232 WOO
Godt jobbet! Trykk på Slutt/Finish for å avslutte veiledningen og få tilgang til resten av blokkene i MakeCode.



```ghost
input.onButtonPressed(Button.A, function () {
    Hev_anker = true
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.B, function () {
    Hev_anker = false
    basic.showArrow(ArrowNames.West)
})
let Hev_anker = false
bitbaot.setPortColor(0xFF0000)
bitbaot.setStarboardColor(0x00FF00)
Hev_anker = false
basic.showArrow(ArrowNames.West)
basic.forever(function () {
    if (Hev_anker) {
        bitbaot.goms(BBDirection.Forward, 60, randint(300, 1200))
        if (Math.randomBoolean()) {
            bitbaot.rotatems(BBRobotDirection.Left, 60, 400)
        } else {
            bitbaot.rotatems(BBRobotDirection.Right, 60, 400)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Heart)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showString("Hello!")
})
basic.forever(function () {
	
})
```