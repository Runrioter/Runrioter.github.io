Runrioter's blog
================

## Memo

* To keep it up to date with the GitHub Pages gem

  ```bash
  make update
  ```

* Make a post file quickly

  ```bash
  make post POST_TITLE="an awesome title"
  ```

## Troubleshoot

* GitHub Pages Dependency Versions
   
  Check [here](https://pages.github.com/versions/)

* Health check

  ```bash
  make check
  ```

* [GitHub Pages Ruby Gem](https://github.com/github/pages-gem/)

* ERROR: cannot discover where libxml2 is located on your system. please make sure `pkg-config` is installed.

  ```bash
  # If `libxml2` is installed by `brew`
  PKG_CONFIG_PATH=/usr/local/opt/libxml2/lib/pkgconfig bundle install
  ```

* Page build failed

  * [Official docs](https://help.github.com/articles/troubleshooting-github-pages-builds/)