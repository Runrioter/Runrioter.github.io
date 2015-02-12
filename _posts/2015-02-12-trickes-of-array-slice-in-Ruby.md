---
layout: post
title: array slice trickes in Ruby
date: 2015-02-12 16:30:00
categories: blog ruby
author: Runrioter
meta: Ruby array slice
---
在学习ruby的时候，发现ruby中对于array slice的处理和别的语言有些不同，有些诡异啊。

{% highlight ruby %}

arr = [1, 3, 5, 7, 9]
# normal
arr[0] #1
arr[3] #7
arr[5] #nil
arr[6] #nil

# trickes
arr[5,0]#[]
arr[5,100]#[]
arr[6,0]#nil
arr[6,100]#nil

{% endhighlight %}

The following description is [here][ruby-array-slice]

>Element Reference — Returns the element at index, or returns a subarray 
>starting at the start index and continuing for length elements, or returns a 
>subarray specified by range of indices.

>Negative indices count backward from the end of the array (-1 is the last 
>element). For start and range cases the starting index is just before an 
>element. Additionally, an empty array is returned when the starting index for >an element range is at the end of the array.

>Returns nil if the index (or starting index) are out of range.

看了解释之后，大家就会明白了，只能说好诡异！！

[ruby-array-slice]: http://ruby-doc.org//core-2.2.0/Array.html