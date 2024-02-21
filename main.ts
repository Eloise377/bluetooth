bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.House)
    connect_flag = 1
    while (connect_flag == 1) {
        bluetooth_val = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        serial.writeString(bluetooth_val)
        serial.writeLine("")
        if (bluetooth_val == "a") {
            pins.digitalWritePin(DigitalPin.P16, 1)
        } else if (bluetooth_val == "b") {
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
let bluetooth_val = ""
let connect_flag = 0
serial.redirectToUSB()
