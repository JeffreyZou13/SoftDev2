import time

def timer(f):
    def inner(*arg):
        before = time.time()
        f(*arg)
        print 'execution time: ' + str((time.time() - before) * 1000) + ' ms'
        return 'execution time: ' + str((time.time() - before) * 1000) + ' ms'
    return inner

curr = time.time()
def fib(n):
    if n<2:
        return n
    return fib(n-1) + fib(n-2)

#fib(25)

'''
DYNAMIC PROGRAMMING = Dynamic optimization
means of solving a complex problem by solving its component subproblems once and storing their solutions

MEMOIZATION
-technique of storing solutions to subproblems to avoid recomputation
-use of caches to retrieve previously computered values to reduce time complexity of algorithms
'''

def memoize(f):
    memo = {}
    def inner(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return inner

@memoize
def fastFib(n):
    if n <= 1:
        return 1
    return fastFib(n-1) + fastFib(n-2)

print fastFib(400)
