import random
'''
def inc(x):
    return x+1

def dec(x):
    return x-1

f = inc
#print f(5)

flist = [inc, dec]

#print flist[1](5)

#A simple closure (i.e. inner references n)
def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

#print add3(10)
#print add5(10)

def make_counter():
    #private 'instance' data has to be a list bc of weird scoping rules
    count = [0]

    #Public methods
    def inc():
        count[0] = count[0] + 1
    def dec():
        count[0] = count[0] - 1
    def reset():
        count[0] = 0
    def get():
        return count[0]

    #Return a dictionary os we have access to all the methods
    return {'inc': inc, 'dec': dec, 'reset': reset, 'get': get}

c1 = make_counter()
c2 = make_counter()

c1['inc']()
c1['inc']()
c1['inc']()
#print c1['get']()

c2['inc']()
#print c2['get']()

c1['reset']()
#print c1['get']()
'''

#NOT A CLOSURE: no inner function
def dble(f):
    name = f()
    return name+name

#print dble(get_name)

'''
@double is the same as
get_name = double(get_name)

A Python decorator is merely shorthand for calling a wrapper-type function like doubler.
A Python decorator encapsulates a closure.
A decorator allows to transparently wrap functionality.
'''

def doubler(f):
    def inner():
        name=f()
        return name+name
    return inner

@doubler
def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

print get_name()
