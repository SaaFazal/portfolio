import re

with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'([^,])(\s+)section: \'', r'\1,\2section: \'', text)

with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed commas in projects.ts")
