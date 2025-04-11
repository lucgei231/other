#ifndef CONIO_H
#define CONIO_H

#include <stdio.h>
#include <termios.h>
#include <unistd.h>
#include <sys/select.h>

/* 
 * Minimal replacement for conio.h functions on Unix-like systems.
 * You can add macro aliases to map _getch, _getche, _kbhit to the functions below.
 */
static int getch(void) {
    struct termios oldt, newt;
    int ch;
    tcgetattr(STDIN_FILENO, &oldt);
    newt = oldt;
    newt.c_lflag &= ~(ICANON | ECHO);
    tcsetattr(STDIN_FILENO, TCSANOW, &newt);
    ch = getchar();
    tcsetattr(STDIN_FILENO, TCSANOW, &oldt);
    return ch;
}

static int getche(void) {
    struct termios oldt, newt;
    int ch;
    tcgetattr(STDIN_FILENO, &oldt);
    newt = oldt;
    newt.c_lflag &= ~(ICANON);
    tcsetattr(STDIN_FILENO, TCSANOW, &newt);
    ch = getchar();
    tcsetattr(STDIN_FILENO, TCSANOW, &oldt);
    return ch;
}

static int kbhit(void) {
    struct timeval tv = { 0L, 0L };
    fd_set readfds;
    FD_ZERO(&readfds);
    FD_SET(STDIN_FILENO, &readfds);
    return select(STDIN_FILENO+1, &readfds, NULL, NULL, &tv);
}

/* Create macro aliases so that calls to _getch, _getche, _kbhit use our functions */
#ifndef _getch
#define _getch getch
#endif

#ifndef _getche
#define _getche getche
#endif

#ifndef _kbhit
#define _kbhit kbhit
#endif

#endif // CONIO_H