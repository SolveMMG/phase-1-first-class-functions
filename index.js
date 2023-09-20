function receivesAFunction(fun){
    return fun();
}
function returnsANamedFunction(){
    return function named(a,b){a+b};
}
function returnsAnAnonymousFunction (){
    return function(a,b){a+b};
}