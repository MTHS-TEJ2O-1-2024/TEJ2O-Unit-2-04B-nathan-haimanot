/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Haimanot
 * Created on: Sep 2024
 * This program simulates a 6 sided dice
*/

let randomNumber: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    randomNumber = randint(1, 6)
    basic.showNumber(randomNumber)
})



basic.showString('Hello, Nathan!')
