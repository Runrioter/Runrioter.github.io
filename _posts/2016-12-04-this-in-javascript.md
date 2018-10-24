---
title:  Javascript中this详解
categories: programming javascript
meta: Javascript中this详解
---

对于熟悉Java和PHP的程序员来说，刚开始会觉得this的用法"非常简单"。
但是当他们完全地把基于class的面向对象的直觉直接搬来时，会发现其实JS里的this并不一样。
所以我写这篇文章用来记录一下。

字面上，this就像英文单词一样表示一个“代词”，至于它代表什么，我们好好说说。

在讲this之前我们要先声明一下JS里面的4种调用类型:

1. 函数调用 `parseInt('43');`
2. 方法调用 `console.log('Runrioter learns Javascript');`
3. 构造器调用 `var date = new Date(2016, 11, 4);`
4. 间接调用 `parseInt.call(undefined, "43");`

之所以先讲这4种调用，就是因为this的取值在不同的调用类型中有不同的表现。

### 函数调用下的this
JS里的函数调用是指函数对象表达式后面跟着`()`, 常见的有两种

- 先声明后调用

```javascript
function foo() {
    console.log('I am a function named foo');
}
foo();
```

- IIFT (immediately-invoked function expression) 立即执行函数表达式

```javascript
(function() {console.log('I am an anonymous function')})();
```

> 知识点一: 在函数调用下，this指向全局对象。全局变量是什么要取决于js的执行环境。浏览器下为window，node下为global。

```javascript
// env: node
function foo() {
    console.log(typeof this);
    console.log(this === global);
}
foo();
// output:
// object
// true
```

> 知识点二：因为在函数调用下this指向全局对象，所以很有可能带来安全问题，因此当在strict模式下时，this为undefined。

```javascript
// env: node, mode: stritct
'use strict';

function foo() {
    console.log(typeof this);
    console.log(this === global);
}
foo();
// output:
// undefined
// false
```

> 知识点三： 内部函数调用时，this不会受外部函数影响，仍只依赖于调用方式。这一点足以让一部分人迷糊了。

```javascript
// env: node
var func = {
    outer : function() {
        // outer: this
        console.log(this === func);
        function inner() {
            // inner: this
            console.log(this === global);
        }
        return inner();
    }
}
func.outer();
// output:
// true
// true
```

### 方法调用的this

所谓方法调用很简单，就是调用对象实例的方法。

```javascript
var me = {
    say: function() {
        console.log("Hello, 世界");
    }
};
me.say();
```

也就是说此时函数是属于某个对象的，我们用`<expression>.functionProperty()`或`<expression>['functionProperty']()`的方式调用。

> 知识点四：在方法调用的场景下， this是指拥有该方法的对象（包括继承的方法)。 es6中方法调用this也指向实例自己。此处确实和Java等相似。

```javascript
var me = {
    name: "Runrioter",
    say: function() {
        console.log("Hello, I am", this.name);
    }
};
me.say();
// output:
// Hello, I am Runrioter
var newMe = Object.create(me);
newMe.name = 'new Runrioter';
newMe.say();
// output:
// Hello, I am new Runrioter
```

> 知识点五：当属于某个对象的方法分离后调用，就等同于函数调用。

```javascript
// env: node
var me = {
    name: 'Runrioter',
    say: function() {
        console.log("I am", this.name);
    }
}
var ms = me.say;
ms();
// output:
// I am undefined
```
为了达到我们想要的结果可以用`bind`方法。

```javascript
var me = {
    name: 'Runrioter',
    say: function() {
        console.log("I am", this.name);
    }
}
var ms = me.say.bind(me);
ms();
```

### 构造函数调用下this

当函数和new关键字调用创建对象的时候，this代表该新创建的对象。

```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    console.log(this.name);
}

var p = new Person("Runrioter");
p.getName();
```

### 间接调用中的this

所谓间接调用是指利用函数自身的`call`和`apply`方法进行调用。

```javascript
function add(a, b) {
    return a + b;
}
add.call(undefined, 1, 2);
add.apply(undefined, [1, 2]);
```

> 知识点六：当用间接调用时this指的是call和apply方法用的第一个参数。

