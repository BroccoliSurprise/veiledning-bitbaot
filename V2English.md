# Set sail with Bit:Boat!

## Welcome! @showdialog

Today we set sail with the Bit:Boat robots. There's lots of different missions to solve out at sea, and you can solve them in whatever way you like.

Press OK to continue this guide and learn how the robot works.

(Hvis du vil ha denne veiledningen på norsk, [trykker du her](https://makecode.microbit.org/#tutorial:github:broccolisurprise/veiledning-bitbaot/V2Norsk))

## Write your own programs or use the simple remote? @showdialog

Programming is easier than you might think. Have you ever popped popcorn in a microwave oven? Then you're already an experienced robot programmer!

If you want to learn how to write commands and programs for the Bit:Boat robot (Changing lights, driving set paths and so on), press OK to continue.

Or, if you would rather just have fun and play, you can [click here to control the Bit:Boat with a remote control.](https://vilvite.github.io/FaceRace4microbit/bitbaot.html)


## Good choice!

Awesome, let's get to it!

The first order of business is to fix the lights. Click the cyan and magenta circles to choose new colours.

If you're uncertain which side is port or starboard, take a look around the room.

Why do you think it's important for boats to have correct coloured lights?


```blocks
bitbaot.setStarboardColor(0x00FF00)
bitbaot.setPortColor(0xFF0000)

```


## Download the new programmer
The micro:bit is the robot's brain, and is what sends signals to control the lights and motors. To tell it how to behave, we need to connect it with a USB wire and click the ``|Download|``-button in the bottom left corner.

Don't hesistate to ask a guide for help, they're happy to help and answer any question you have.

## Test the Bit:Boat
Wait for the download to finish, and unplug the USB wire from the micro:bit. Gently pick up the Bit:Boat, and flip the ON/OFF-switch between the wheels.

Are the right colours showing when you turn the Bit:Boat **on**?

## Program movements
Now we'll add to the program so that the robot can move and turn.

Turn the Bit:Boat **off** and place it back on the table with the USB wire connected.

## Program movements
We would prefer that the robot didn't start driving as soon as we turn on the power, so we need a ``||input:on button A pressed||``-block to give us a little bit more control.

You can find this in the ``||input:Input||``-menu. Click and drag this block into the programming canvas, you can place it anywhere you like.

```blocks

input.onButtonPressed(Button.A, function () {
	
})

```

## Program movements
Klick the ``||green:Bitbaot||``-meny and then ``||green:Motors||``.

Pick and choose the blocks in any order, and place them in the purple ``||input:on button A pressed||``-block.

You can experiment with the values and commands here on your own, or click the **Lightbulb**-ikon to the left for an example.

```blocks
input.onButtonPressed(Button.A, function () {
    bitbaot.goms(BBDirection.Forward, 80, 2000)
    bitbaot.rotatems(BBRobotDirection.Left, 60, 500)
})
```

## Download and Test
Verify that the Bit:Boat is turned **off** before continuing.

Connect the micro:bit with the USB wire, wait a few seconds for the "smiley face" to show on the ``|Download|``-button, and download the new program the same way you did earlier with the lights.

Wait for the download to finish, unplug the wire, and place the boat **either on the floor or a table with walls** before turning it back on again.

## Press A to start
When the Bit:Boat is standing in a safe spot, you can turn it **on**, then press the A-button **on the micro:bit** to start.

Did it go well? If the Bit:Boat moved strange (or not at all), you might want to ask a guide for help checking the code and equipment.

## Well done! Now you can explore on your own
Thanks for following! Click the ``||Done||``-button to finish the tutorial, and you'll get free access to ***all*** the functions and commands the BitBoat can follow.

Good luck with the missions!

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