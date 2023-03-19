var a=100
var b=200
function f1()
{
    function f2()
    {
        function f3()
        {
        console.log("hiiiii")
    }
    console.log("Bye")
    return f3
    }
    return f2
}
console.log(a)
console.log(b)
f1()()()
