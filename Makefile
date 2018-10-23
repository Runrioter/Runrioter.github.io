update:
	@# To keep it up to date with the GitHub Pages gem
	bundle update github-pages

serve:
	@# Builds your site any time a source file changes and serves it locally
	bundle exec jekyll serve

doctor:
	@# Outputs any deprecation or configuration issues
	bundle exec jekyll doctor

check:
	@# Health check
	bundle exec github-pages health-check

clean:
	@# Removes the generated site and metadata file
	bundle exec jekyll clean

.PHONY: serve doctor clean update