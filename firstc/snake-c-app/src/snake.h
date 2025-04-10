typedef struct {
    int x;
    int y;
} Position;

typedef struct {
    Position *body;
    int length;
    int direction; // 0: up, 1: right, 2: down, 3: left
} Snake;

void initSnake(Snake *snake, int initialLength);
void updateSnake(Snake *snake);
void renderSnake(Snake *snake);
int checkCollision(Snake *snake);