l = [10, 4, -1, 4, 5, 20, 19, 20000, -13]

def quicksort(l):
    '''
    1. Pick a pivot
    2. Partition into two lists such that
    *all values < pivot are on the left
    *all values > pivot are on the right
    *pivot is in the right place, it's in the final resting position
    3. quicksort(lowerhalf) + pivot + quicksprt(higherhalf)
    '''
    if len(l) <= 1:
        return l
    pivot = l[len(l)/2]
    lower = [x for x in l if x < pivot]
    higher = [x for x in l if x >= pivot]
    return quicksort(lower) + [pivot] + quicksort(higher)

quicksort(l)
