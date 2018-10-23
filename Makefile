build:
	@# Performs a one off build your site to ./_site (by default)
	bundle exec jekyll build

update:
	@# To keep it up to date with the GitHub Pages gem
	@# Only github-pages update: bundle update github-pages
	bundle update

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