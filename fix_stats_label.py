import re
import os

file_path = 'app/page.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# Fix Stats Section comment
content = content.replace('{/* Stats Section \\*/}', '{/* Stats Section */}')

with open(file_path, 'w') as f:
    f.write(content)
