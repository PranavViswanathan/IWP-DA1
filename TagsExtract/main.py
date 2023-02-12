from bs4 import BeautifulSoup
import requests


url = "https://pranavviswanathan.github.io/IWP-DA1/"
html_content = requests.get(url).text
soup = BeautifulSoup(html_content, "html.parser")
tags = [tag.name for tag in soup.find_all()]
tags = set(tags)

print("Tags used: ")
for tag in tags:
    print(tag)
print("Number of tags: ", len(tags))
