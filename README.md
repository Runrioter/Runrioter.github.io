Runrioter's blog
================

## Memo

* To keep it up to date with the GitHub Pages gem

```bash
make update
```

## Troubleshoot

* GitHub Pages Dependency Versions
   
  [check](https://pages.github.com/versions/)

* Health check

```bash
bundle exec github-pages health-check
```

* Others

* [GitHub Pages Ruby Gem](https://github.com/github/pages-gem/)

* If `libxml2` is installed by `brew`. You may got 

    > ERROR: cannot discover where libxml2 is located on your system. please make sure `pkg-config` is installed.

  Add `PKG_CONFIG_PATH`:

  ```bash
  PKG_CONFIG_PATH=/usr/local/opt/libxml2/lib/pkgconfig bundle install
  ```