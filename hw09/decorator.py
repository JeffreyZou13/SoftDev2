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
        return str((time.time() - before) * 1000) + ' ms'
    return inner

@timer
@name
def hello(i, j, k):
    return 'hello world'

print hello(1, 2, 3)
