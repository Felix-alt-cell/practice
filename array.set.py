''' 
ARRAY & SET
(1) ARRAY
(2) Set
(3) Specific operators with set

'''


from array import array

print("===== Array =====")

numbers = array("i", [1, 4, 5, 7, 8, 41])
print("numbers(1):", numbers)

numbers.append(100)
numbers.insert(0, 14)
print("numbers(2):", numbers)

numbers.remove(5)
numbers.pop()
print("numbers(3):", numbers)

del numbers[0:2]
print("numbers(4):", numbers)


print("===== Set =====")
# { set } of unique collection without keeping order!

new_numbers = array("i", [1, 4, 7, 5, 7, 5, 4, 7, 8, 4, 41])
nums_set = set(new_numbers)

print(f"the nums_set: {nums_set} and type: {type(nums_set)}")

nums_set.add(200)
print("nums_set(1):", nums_set)

nums_set.add(7)
print("nums_set(2):", nums_set)

print("===== Specific operators =====")
# | & - ^

a = {10, 20, 50}
b = {20, 40}

result1 = a | b   # union
result2 = a & b   # intersection
result3 = a - b   # difference
result4 = a ^ b   # symmetric difference

print("result1:", result1)
print("result2:", result2)
print("result3:", result3)
print("result4:", result4)