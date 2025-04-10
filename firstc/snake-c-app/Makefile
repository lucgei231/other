CC=gcc
CFLAGS=-I./src -Wall -Wextra
SRC=src/main.c src/snake.c src/input.c
OBJ=$(SRC:.c=.o)
EXEC=snake

all: $(EXEC)

$(EXEC): $(OBJ)
	$(CC) -o $@ $^

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@
CC=gcc
CFLAGS=-I./src -Wall -Wextra
SRC=src/main.c src/snake.c src/input.c
OBJ=$(SRC:.c=.o)
EXEC=snake

all: $(EXEC)

$(EXEC): $(OBJ)
    $(CC) -o $@ $^

%.o: %.c
    $(CC) $(CFLAGS) -c $< -o $@

clean:
    rm -f $(OBJ) $(EXEC)