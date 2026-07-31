import re

with open('original_projects.ts', 'r', encoding='utf-16') as f:
    orig = f.read()

with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    curr = f.read()

def get_project(proj_id, text):
    match = re.search(r'  \{\n    id: \'' + proj_id + r'\',.*?(?=\n  \},?\n  \{\n    id:|\n\];)', text, re.DOTALL)
    return match.group(0)

slip_str = get_project('slipstack', orig)
ff_str = get_project('ffsmart', orig)

slip_str += ",\n    section: 'Engineering and Academic Projects',\n    filterCategory: 'Mobile'"
ff_str += ",\n    section: 'Engineering and Academic Projects',\n    filterCategory: 'Mobile'"

am_pattern = r'  \{\n    id: \'android-mobile\',.*?(?=\n  \},?\n  \{\n    id:|\n\];)'
am_match = re.search(am_pattern, curr, re.DOTALL)

if am_match:
    new_curr = curr[:am_match.start()] + slip_str + "\n  },\n" + ff_str + curr[am_match.end():]
    with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
        f.write(new_curr)
    print("Successfully restored separated projects")
else:
    print("Could not find android-mobile")
