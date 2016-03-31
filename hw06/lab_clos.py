'''
Jeffrey Zou
SoftDev2 pd3
HW06
2016-04-01
'''

def isPassword(password):
    '''
    
    '''
    UC_LETTERS='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    LC_LETTERS='abcdefghijklmnopqrstuvwxyz'

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
