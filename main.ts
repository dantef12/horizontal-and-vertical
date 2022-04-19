input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, 0)
        basic.pause(300)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(0, 4 - index)
        basic.pause(300)
    }
})
basic.forever(function () {
	
})
