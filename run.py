# dunder = double underscore: __builtIn__, __init__

message = "everything is Object in python"
print(message)

result = type(message)
print('result:', result)

''' in python there are built-in tools
(1)types: int, float, string,list, dict
(2)functions: print(), type(), len()
(3)constants: true, false, none 

'''

print(dir(__builtins__))
