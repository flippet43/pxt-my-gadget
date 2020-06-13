input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.showString("Process completed. Initiating...")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
    }
    basic.showString("Has been activated.")
    basic.showString("Press B")
})
input.onButtonPressed(Button.AB, function () {
	
})
for (let index = 0; index < 5; index++) {
    basic.pause(500)
    led.toggle(2, 4)
    led.toggle(1, 4)
    led.toggle(0, 4)
    led.toggle(3, 4)
    led.toggle(4, 4)
}
basic.pause(500)
basic.showString("Press A")
