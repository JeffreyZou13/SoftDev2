'''
Jeffrey Zou
SoftDev2 pd3
HW06 - List Comprehensions in Python
2016-04-01
'''

UC_LETTERS='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
LC_LETTERS='abcdefghijklmnopqrstuvwxyz'
SYMBOLS = '.?!&#,;:-_*'

def isPassword(password):
    '''
    Checks if the password is valid (contains lowercase and uppercase letters, and a number)

    Args:
        password (string)

    Returns:
        True if the password meets the requirements, False otherwise
    '''

    #Check for uppercase letters
    upper = [x for x in password if x in UC_LETTERS]
    if len(upper) == 0:
        return False

    #Check for lowercase letters
    lower = [x for x in password if x in LC_LETTERS]
    if len(lower) == 0:
        return False

    #Check for number
    number = [x for x in password if x.isdigit()]
    if len(number) == 0:
        return False
    return True

def passwordStrength(password):
    '''
    Rates the strength of a password on a scale of from 1 - 10

    Args:
        password (string)

    Returns:
        0 for a password that does not meet the requirement or is too weak
        10 for a very strong password
    '''
    strength = 5
    UCCount = len([x for x in password if x in UC_LETTERS ])
    LCCount = len([x for x in password if x in LC_LETTERS ])
    SYMCOUNT = len([x for x in password if x in SYMBOLS])
    numbers = len([x for x in password if x.isdigit()])

    if not isPassword(password):
        return 0

    if len(password) <= 5:
        return 1
    else:
        strength += 1

    if LCCount + UCCount <= 8:
        strength -= 1
    else:
        strength += 1

    if SYMCOUNT == 0:
        strength -= 1
    else:
        strength += 1

    if numbers < 3:
        strength -= 1
    else:
        strength += 1

    if strength > 10:
        return 10

    if strength < 0:
        return 0

    return strength

#Mr. Brown's Strength Checker
NUMERALS = '0123456789'

def strength_check(p):
    l = [1 if x in UC_LETTERS else
          2 if x in LC_LETTERS else
           3 if x in NUMERALS else
            4 if x in SYMBOLS else 0 for x in p]
    uc = len(p) - l.count(1)
    lc = len(p) - l.count(2)
    nums = len(p) - l.count(3)
    chars = len(p) - l.count(4)

    strength = uc + lc + nums + chars
    return strength 

print strength_check('12342525')
