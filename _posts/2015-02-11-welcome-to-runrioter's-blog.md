---
layout: post
title:  "欢迎来到我的blog！"
date:   2015-02-11 13:24:04
categories: blog golang
author: Runrioter
meta: This is my first blog!
---
今天开始使用[Github][github]来托管我的博客。嘿嘿！

值得一提的是除了纯粹的静态文件Github还支持[jekyll][jekyll],可是jekyll是用[ruby][ruby]编写的。
所以之后我有可能还会发一些ruby相关。
遗憾的是，现在我还不会ruby……

但是我仍要先贴一段ruby的代码。

```ruby
class Runrioter
	def initialize(name)
		@name = name
	end

	def welcome
		puts "Welcome to #{@name}'s blog!"
	end
end

me = Runrioter.new("Runrioter")
me.welcome
```

OK!

当我顺利看到这个页面的时候，证明blog已经部署成功了。

希望我的热情不会随着时间的流逝而流失。

[jekyll]: http://jekyllrb.com
[ruby]: https://www.ruby-lang.org
[github]: https://github.com