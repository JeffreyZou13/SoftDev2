'''
Jeffrey Zou
SoftDev pd3
HW08 - Write list comprehension-based Python functions
2016-04-08
'''

set1 = [1, 2 , 3]
set2 = [2, 3 , 4]

def setDifference(A, B):
    '''
    Returns the set of all objects that are a member of A but not B
    '''
    return [x for x in A if x not in B]

#print setDifference([1,2,3],[2,3,4])

def union(A, B):
    '''
    Returns the set of all objects that are a member of A or B or both
    '''
    return [x for x in A if x not in B] + B
    #return setDifference(A, B) + B

#print union(set1, set2)

def intersection(A, B):
    '''
    Return the set of all objects that are a member of both A and B
    '''
    return [x for x in A if x in B]

#print intersection(set1, set2)

def symmetricDifference(A, B):
    '''
    Returns the set of all objects that are a member of exactly one of the sets
    '''
    return union(setDifference(A, B), setDifference(B, A))

#print symmetricDifference(set1, set2)

def cartesianProduct(A, B):
    '''
    Returns the set of tuples (a,b) such that a is in A and b is in B
    '''
    return [(a,b) for a in A for b in B]

#print cartesianProduct(set1, set2)
