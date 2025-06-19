function fun(){
    const sym1=Symbol();

    const sym2=Symbol(9);

    const sym3=Symbol("GFG");

    console.log(typeof(sym1));

    console.log(sym2);

    console.log("GFG"==="GFG")
}
fun();