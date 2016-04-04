'''
Jeffrey Zou
SoftDev2 pd3
HW07 - Closures in Python
2016-04-02
'''

#Using non-anonymous
def repeat(s):
    def inside(n):
        return s * n
    return inside

#Using anonymous
#def repeat(s):
    #return lambda x: x*s

r1=repeat('hello')
print r1
r2=repeat('goodbye')
print r2
print repeat('cool')(3)

