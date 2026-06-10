input.onButtonPressed(Button.A, function () {
    bitbaot.goms(BBDirection.Forward, 80, 2000)
    bitbaot.rotatems(BBRobotDirection.Left, 60, 500)
})
bitbaot.setStarboardColor(0x00FFFF)
bitbaot.setPortColor(0xFF00FF)
