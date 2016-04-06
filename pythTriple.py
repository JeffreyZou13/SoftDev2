def pt(n):
    '''
    Very inefficient pythagorean triple outputer
    Returns a list of lists of pythagorean triples
    '''
    triples = []
    for c in xrange(n):
        for b in xrange(c):
            for a in xrange(b):
                if a**2 + b**2 == c**2:
                    triples.append([a, b, c])
    return triples

def pt2(n):
    '''
    Pythagorean triple outputer
    Returns a list of tuples of pythagorean triples
    Includes degenerate triangles
    '''
    return [(a,b,c)
            for c in xrange(n)
            for b in xrange(c+1)
            for a in xrange(b+1)
            if a**2 + b**2 == c**2]

def quicksort(list):
    '''
    1. Pick a pivot
    2. Partition into two lists such that
    *all values < pivot are on the left
    *all values > pivot are on the right
    *pivot is in the right place, it's in the final resting position
    3. quicksort(lowerhalf) + pivot + quicksprt(higherhalf)
    '''
    pivot = len(list)/2
    lower = [list[x] for x i
