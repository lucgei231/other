CC = gcc
CFLAGS = -I./src -Wall -Wextra
SRC = src/main.c src/snake.c src/input.c
OBJ = $(SRC:.c=.o)
EXEC = snake

ifeq ($(OS),Windows_NT)
	RM = del /Q
else
	RM = rm -f
endif

all: $(EXEC)

$(EXEC): $(OBJ)
	$(CC) -o $@ $^

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	$(RM) $(OBJ) $(EXEC)