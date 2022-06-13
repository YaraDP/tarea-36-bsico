input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "lights on") {
        basic.clearScreen()
    } else if (receivedString == "lights off") {
        basic.showIcon(IconNames.Angry)
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    }
})
radio.setGroup(5)
basic.forever(function () {
    if (input.lightLevel() > 50) {
        radio.sendString("lights on")
    } else {
        radio.sendString("lights off")
    }
})
