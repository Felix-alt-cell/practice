"""
CLASS
(1) What is class
(2) ordinary vs static properties
(3) special methods
"""

print("===== What is class =====")

# class = blueprint for object creation!
# structure > state constructor method


class Person():

    # state (class property / static property)
    message = "class state property"

    # constructor
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # method
    def introduce(self):
        print(f"{self.name} says: How do you do!")

    def say_age(self):
        print(f"{self.name} says: I am {self.age}!")
    @classmethod
    def class_message(cls):
        print("Static method property executed")

# Ordinary state
person1 = Person("Justin", 25)
person2 = Person("Martin", 35)
person3 = Person("John", 22)

#Ordinary method
print("person1.name:", person1.name)

person1.introduce()
person2.say_age()


print("=====ordinary vs static properties=====")

#static state
new_message = Person.message
print("new_message:", new_message)

#static method
Person.class_message()


print("===== special/magic methods =====")

# Python's most common special methods are below:
# __init__ __new__ __str__ __call__ __getitem__ __eq__ __len__ ...

class Car():

    # state
    description = "This class makes cars"

    # constructor
    def __new(cls, *args):
        print("new")
        return super().__new__(cls)

    def __init__(self, name, year):
        self.name = name
        self.year = year

    # method
    def start_engine(self):
        print(f"the {self.name} started engine!")

    def stop_engine(self):
        print(f"the {self.name} stopped engine!")

    def __str__(self):
        return f"{self.name} was produced in {self.year} year!"

    def __call__(self):
        print("Object called as function!")


my_car = Car("Ferrari", 2025)
my_car.start_engine()
my_car.stop_engine()

print("-----")

your_car = Car("Toyota", 2026)
print(your_car)

your_car() 