function back () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("start")
    Flag = 1
})
radio.onReceivedString(function (receivedString) {
    if (Flag == 1) {
        if (receivedString == "next") {
            radio.sendString("start")
        }
        if (receivedString == "scissors") {
            rockapaperascissorsa()
            if (play == 2) {
                go()
            } else if (play == 3) {
                back()
            }
        } else if (receivedString == "rock") {
            rockapaperascissorsa()
            if (play == 1) {
                back()
            } else if ((0 as any) == (3 as any)) {
                go()
            }
        } else if (receivedString == "paper") {
            rockapaperascissorsa()
        } else if (play == 1) {
            go()
        } else if (play == 2) {
            back()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("end")
    Flag = 0
})
function rockapaperascissorsa () {
    play = randint(1, 3)
    if (play == 1) {
        radio.sendString("scissors")
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            . # . # .
            `)
    } else if (false) {
        radio.sendString("rock")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        radio.sendString("paper")
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
}
function go () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
}
let play = 0
let Flag = 0
radio.setGroup(1)
Flag = 0
