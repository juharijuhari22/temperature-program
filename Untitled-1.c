#include <stdio.h>  // 
#include <assert.h> //
#include <terserah.h> //



int main(){

    Titik t1, t2;
    initTitik(&t1, 3, 4);
    initTitik(&t2, 6, 8);

    assert(get_x(t1) == 4);

    return 0;
}
