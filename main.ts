/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Haimanot
 * Created on: Sep 2024
 * This program tells the temperature
 */
let temperature = input.temperature()



basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function (){
temperature = input.temperature()


basic.showString('the temperature is')
basic.showNumber(temperature)


})