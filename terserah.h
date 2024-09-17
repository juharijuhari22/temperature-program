typedef struct{
    int x;
    int y;
}Titik;

int get_x(Titik t){
    return t.x;
}

void initTitik(Titik* t, int x, int y){
    t -> x = x;
    t -> y = y;

}
