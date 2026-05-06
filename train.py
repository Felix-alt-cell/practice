# I-TASK (PYTHON)

# Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
# MASALAN: get_digits("m14i1t") return qiladi "141"

def get_digits(text):
    result = ""

    for ch in text:
        if ch.isdigit():
            result += ch

    return result


print(get_digits("m14i1t"))  # "141"
# '''
# G-TASK (PYTHON)

# Shunday function tuzingki 
# unga integerlardan iborat array pass bolsin
# va function bizga osha arrayning eng katta qiymatiga 
# tegishli birinchi indexni qaytarsin.
# MASALAN: get_highest_index([5, 21, 12, 21, 8]) return 
# qiladi 1 sonini.

# '''
# def get_highest_index(arr):
#     if not arr:
#         return None  

#     max_value = max(arr)
#     return arr.index(max_value)



# numbers = [34, 2, 10, 45, 4]

# result = get_highest_index(numbers)
# print("Index of highest value:", result)