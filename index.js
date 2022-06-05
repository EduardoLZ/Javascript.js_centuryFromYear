function solution(year) {
    var x=year/100;
    var y=Math.floor(x);
    var z = y*100;
    if(z<year){
        return y+1;
        console.log(y+1);
    }
    else
        {
            console.log(y);
            return y;
        }
}
