input.onButtonPressed(Button.A, function () {
    tall += 1
    basic.showNumber(tall)
})
input.onGesture(Gesture.Shake, function () {
    tall = 0
    basic.showNumber(tall)
})
input.onButtonPressed(Button.B, function () {
    tall += -1
    basic.showNumber(tall)
})
let tall = 0
tall = 0
basic.showNumber(tall)
