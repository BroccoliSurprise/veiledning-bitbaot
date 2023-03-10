# Ut på tur med Bitbaot

##Steg 0 YEAH @showdialog
micro:biten settes oppi skuta med skjermen fremover.

![Bilde av en micro:bit i båten](https://d14xnrffmhx4ml.cloudfront.net/1661434482/smarthus-veiledning-microbit-for-seg-selv.png)



##Steg 1 prokkprik @showdialog
Legg merke til ON/OFF-bryteren bakerst i båten. Den må være OFF når du programmerer og er koblet til PCen.

![Bilde av ON/OFF-bryter](https://d14xnrffmhx4ml.cloudfront.net/1661434772/smarthus-veiledning-usbconnect.png)

##Steg 000 
Da er du klar til å begynne å programmere båten! Hent blokker fra menyen til venstre.

Første oppdrag er å få båten til å kjøre 1 meter frem, snu, og kjøre tilbake.

Trykk på NESTE når du har fått det til.

##Steg 0 YEAH
Nå skal du ut på sjøen! Husk å tenne lyktene så de andre båtene ser deg.


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
bitbot.BBBias(BBRobotDirection.Left, 10)
Hev_anker = false
basic.pause(100)
bitbaot.BBBias(BBRobotDirection.Left, 10)
bitbaot.go(BBDirection.Forward, 60)
bitbaot.rotate(BBRobotDirection.Left, 60)
basic.showArrow(ArrowNames.West)
for (let index = 0; index < 4; index++) {
    	
    }
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