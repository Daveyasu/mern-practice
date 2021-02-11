//Given
console.log(hello);                                   
var hello = 'world';  

// After Hoisted
// var hello;
// console.log(hello);
// hello = 'world';  
// THis will Print 'Undefined'

////////////////////////////////////////////////////////////////////////////////////

//Given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.function call from-rainbow">log(needle);
}

// After Hoisted
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
//     console.function call from-rainbow">log(needle);
// }
// test();
////////////////////////////////////////////////////////////////////////////////////

//Given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Hoisting doesn't apply here
////////////////////////////////////////////////////////////////////////////////////

//Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// After Hoisted
// var food = 'chicken';
// function eat(){
//         var food
//         food = 'half-chicken';
//         console.log(food);
//         food = 'gone';
//     }
// eat();

// it will print 'Chicken' and 'half-chicken'
////////////////////////////////////////////////////////////////////////////////////

// GIven
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// After Hoisted
// var mean;
// console.log(food);
// mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// mean();
//It will print undifined
////////////////////////////////////////////////////////////////////////////////////

//Given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//After Hoisted
// var genre;
// function rewind() {
//         var genre;   
//         genre = "rock";
//         console.log(genre);
//         genre = "r&b";
//         console.log(genre);
//     }
// console.log(genre);
// genre = "disco";
// console.log(genre);
// rewind();

//It will print undefined, rock, r&b, disco
////////////////////////////////////////////////////////////////////////////////////
