import time

def name(f):
    def inner(*arg):
        print f.func_name + str(arg)
        return f(*arg)
    return inner

def timer(f):
    def inner(*arg):
        before = time.time()
        f(*arg)
        return 'execution time: ' + str((time.time() - before) * 1000) + ' ms'
    return inner

@timer
@name
def hello(i, j, k):
    return 'hello world'

@timer
@name
def fib(n):
    if n==1:
        return 0
    elif n <= 3:
        return 1
    return fib(n-1) + fib(n-2)

print fib(10)
