def back():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, 30)
    basic.pause(1000)
    maqueen.motor_stop(maqueen.Motors.ALL)

def on_button_pressed_a():
    global Flag
    radio.send_string("start")
    Flag = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    if Flag == 1:
        pass
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global Flag
    radio.send_string("end")
    Flag = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def rockapaperascissorsa():
    global play
    play = randint(1, 3)
    if play == 1:
        radio.send_string("scissors")
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        . # . # .
        """)
    elif False:
        radio.send_string("rock")
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
    else:
        radio.send_string("paper")
        basic.show_leds("""
            # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        """)
def go():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 30)
    basic.pause(1000)
    maqueen.motor_stop(maqueen.Motors.ALL)
play = 0
Flag = 0
radio.set_group(1)
Flag = 0