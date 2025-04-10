# Snake Game in C

This is a simple implementation of the classic Snake game written in C. The game is designed to be run in a terminal environment, and it allows players to control the snake using keyboard inputs.

## Project Structure

- `src/main.c`: Entry point of the application. Initializes the game, sets up the game loop, and handles rendering.
- `src/snake.c`: Contains the game logic for the Snake. Functions for initializing the snake, updating its position, checking for collisions, and rendering the snake.
- `src/snake.h`: Header file that declares functions and structures used in `snake.c`.
- `src/input.c`: Handles user input. Reads keyboard input and updates the direction of the snake.
- `Makefile`: Build instructions for compiling the source files and linking them into an executable.

## Building the Project

To build the project, navigate to the project directory and run the following command:

```
make
```

This will compile the source files and create an executable named `snake`.

## Running the Game

After building the project, you can run the game using the following command:

```
./snake
```

## Controls

- Use the arrow keys to control the direction of the snake.
- The goal is to eat the food that appears on the screen, which will make the snake grow longer.
- Avoid running into the walls or into yourself.

## License

This project is open-source and available for modification and distribution. Enjoy playing!