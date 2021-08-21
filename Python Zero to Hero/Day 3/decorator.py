def mod_division(function):
    def inner(a,b):
        if(a<b):
            a,b = b,a
        function(a,b)
    
    return inner


@mod_division
def divison(a,b):
    print(a/b)

a = int(input())
b = int(input())
divison(a,b)
