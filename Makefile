# The page itself needs no build. This only regenerates the blog's list and feeds
# (content/blog/index.json, feed.xml, feed.en.xml) from content/blog/*.md.

.PHONY: all blog check serve

all: blog

blog:
	python3 scripts/build-blog.py

# Fails when a post changed and `make` wasn't run
check:
	python3 scripts/build-blog.py --check

serve: blog
	python3 -m http.server 8000
