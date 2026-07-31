with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(r"section: \'", "section: '")

with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed slashes in projects.ts")
