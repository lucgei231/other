#include <stdio.h>
#include <conio.h>
#include "snake.h"

void handleInput(Snake *snake) {
    if (_kbhit()) {
        switch (_getch()) {
            case 'w':
                if (snake->direction != DOWN) snake->direction = UP;
                break;
            case 's':
                if (snake->direction != UP) snake->direction = DOWN;
                break;
            case 'a':
                if (snake->direction != RIGHT) snake->direction = LEFT;
                break;
            case 'd':
                if (snake->direction != LEFT) snake->direction = RIGHT;
                break;
            case 'q':
                snake->isGameOver = 1; // End the game
                break;
        }
    }
}