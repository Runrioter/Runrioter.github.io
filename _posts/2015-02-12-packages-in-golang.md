---
title: Packages in golang
date: 2015-02-12 11:34:55
categories: blog golang
meta: something about packages in go programming language
---
golang是google公司推出的开源的语言。它的包（package）设计还是比较别致的。

从结构上讲，go程序是由package之间相互依赖调用而成；而包又是有源文件组成，源文件又抽象可以看成是由各种元素如变量，常量，结构体，函数等组成。这些元素在其所在包内是可以访问的，但是如果在外包内想访问是需要利用命名规范来限制的（别致的特征）。元素首字母为大写时，可以被包内外访问；反之，只能在包内访问。如下，

{% highlight go linenos %}
package toybox

// scope: package
type point struct {
	x int
	y int
}
// scope: global
type Toy struct {
	name         string
	manufacturer string
	position     point
}
// scope: global
func (t *Toy) Move() {
	t.turnLeft()
	t.turnRight()
}
// scope: package
func (t Toy) turnLeft() {
	// ...
}
func (t Toy) turnRight() {
	// ...
}
{% endhighlight %}
