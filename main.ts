input.onGesture(Gesture.LogoUp, function () {
    mov = 2
})
input.onButtonPressed(Button.A, function () {
    if (com == 0) {
        radio.sendNumber(mov)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    mov = 3
})
input.onGesture(Gesture.TiltLeft, function () {
    mov = 4
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "1") {
        com = 0
        basic.showIcon(IconNames.Yes)
    } else {
        com = 1
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    mov = 1
})
let com = 0
let mov = 0
radio.setGroup(10)
basic.forever(function () {
	
})
