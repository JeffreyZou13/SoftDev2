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
