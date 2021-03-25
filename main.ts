basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            # . . . #
            . # # # .
            `)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . # . #
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            # . # . #
            . # # # .
            `)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
