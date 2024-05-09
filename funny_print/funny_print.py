import os
import time

# Revised patterns for each character in "World", correcting spacing and alignment issues
patterns = {
    'H': ["*   *", "*   *", "*****", "*   *", "*   *"],
    'E': ["*****", "*    ", "*****", "*    ", "*****"],
    'L': ["*    ", "*    ", "*    ", "*    ", "*****"],
    'O': ["*****", "*   *", "*   *", "*   *", "*****"],
    'W': ["*     *", "*     *", "*     *", "*  *  *", "*     *"],
    'R': ["**** ", "*   *", "**** ", "*  * ", "*   *"],
    'D': ["**** ", "*   *", "*   *", "*   *", "**** "],
    ' ': ["  ", "  ", "  ", "  ", "  "]  # Space for better alignment
}

# Sentence to be printed, focusing on correct "World" representation
sentence = "HELLO WORLD"

# Define the number of rows for each character (height of characters)
height = 5

def clear_screen():
    # Clear the screen based on the operating system
    if os.name == 'nt':  # for windows
        os.system('cls')


def print_animation():
    for index in range(len(sentence) + 1):
        clear_screen()  # Clear the console screen
        for row in range(height):
            line = ' '.join(patterns[char][row] for char in sentence[:index])
            print(line)
        time.sleep(0.5)  # Delay for half a second

# Run the animation
print_animation()