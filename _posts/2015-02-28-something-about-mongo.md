---
layout: post
title:  Something about Mongo
date:   2015-02-28 13:24:04
categories: blog mongodb
author: Runrioter
meta: mongodb
---

下面只是记录一下学习mongodb过程中的一些知识点：

- 导入json格式的数据条目进入mongo数据库
{% highlight bash %}
mongoimport  -d <database source name> -c <collection name> <json-formated file>

mongo <database name> #直接连接到database所指的数据库

{% endhighlight %}
