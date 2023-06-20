function turnLeft () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 125)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 100)
}
input.onButtonPressed(Button.A, function () {
    driveForward()
    basic.pause(travelDistance)
    turnLeft()
    basic.pause(turnTime)
    driveforward2()
    basic.pause(travelDistance)
    turnLeft()
    basic.pause(turntime2)
    turnRight()
    basic.pause(turnTime)
    driveforward2()
    basic.pause(traveldistance3)
    turnRight()
    basic.pause(turntime3)
    driveForward()
    basic.pause(traveldistance4)
    Stop()
})
function turnRight () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, 100)
}
function driveForward () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
}
function Stop () {
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
}
function driveforward2 () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 115)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 115)
}
let turntime3 = 0
let turntime2 = 0
let turnTime = 0
let travelDistance = 0
let traveldistance3 = 0
let traveldistance4 = 0
traveldistance4 = 1250
traveldistance3 = 1500
let traveldistance2 = 2000
travelDistance = 3700
turnTime = 470
turntime2 = 150
turntime3 = 470
