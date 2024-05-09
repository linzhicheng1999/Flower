import os

def replace_char(file_path, old_char, new_char):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    content = content.replace(old_char, new_char)

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

os.chdir(os.path.dirname(os.path.abspath(__file__)))
# Usage
old_char = input('请输入要替换的字符：')
new_char = input('请输入替换后的字符：')
replace_char('备用.txt', old_char, new_char)