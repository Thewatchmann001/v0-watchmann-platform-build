import re
import os

file_path = 'app/page.tsx'
with open(file_path, 'r') as f:
    content = f.read()

# Fix the duplicate Stats Section and potential other duplicates
content = content.replace('{/* Stats Section \\*/}', '{/* Stats Section */}')
# If there are two Stats sections, remove the second one.
stats_sections = content.count('{/* Stats Section */}')
if stats_sections > 1:
    content = content.replace('{/* Stats Section */}', '{/* Stats Section %}', 1)
    content = content.replace('{/* Stats Section */}', '')
    content = content.replace('{/* Stats Section %}', '{/* Stats Section %}')
    # Need to remove the actual section as well.
    # regex to find and remove the second stats section
    content = re.sub(r'\{/\* Stats Section \*/\}.*?</section>', '', content, count=1, flags=re.DOTALL)
    content = content.replace('{/* Stats Section %}', '{/* Stats Section %}')

# Fix the duplicate "Final CTA" markers
content = content.replace('{/* Final CTA Section */}{/* Final CTA Section */}', '{/* Final CTA Section */}')

# Fix the double closing tag if any
# current: </div>\n          </div>\n          </div>\n\n          <motion.div
# should be: </div>\n          </div>\n\n          <motion.div
content = content.replace('</div>\n          </div>\n          </div>\n\n          <motion.div', '</div>\n          </div>\n\n          <motion.div')

with open(file_path, 'w') as f:
    f.write(content)
