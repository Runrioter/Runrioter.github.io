---
layout: post
title: Learning Rust
date: 2015-05-18 16:30:00
categories: blog rust
author: Runrioter
meta: rust-lang primitive
---

# Rust
---
## Primitive
* Boolean: `bool`
  - true
  - false
  
  ```
  let x = false;
  let y: bool = true;
  ```
  
* Character: `char`

  ```
  let c: char = 'A';
  let d = 'D';
  ```
  
* Numeric Types: `i8`,`i16`,`i32`,`i64`,`u8`,`u16`,`u32`,`u64`,`isize`,`usize`,`f32`,`f64`

  - defaults
  
  ```
  let x = 32; // default type i32
  let y = 64.0 // default  type f64
  ```
  
* Array: `[T, N]` 

  - T stands for type of element.
  - N stands for the number of element.
  
  ```
  let arr = [1, 2, 3]; //type: [i32, 3]
  let mut arr = [4, 5, 6]; //type: [i32, 3]
  ```
  
  - Shorthand for initializing each element of an array to the same value.
  
  ```
  let m = [0; 3]; // value: [0, 0, 0], type: [i32, 3]
  ```
  
  - Get array length.
  
  ```
  let arr = [12; 3]
  println!("The length of array is {}", arr.len());
  ```
  
  - Access the element by subscript notation.
  
  ```
  let str_arr = ["Gerrad", "Adam", "Bruno"]; // type: [&str, 3] # &str not str
  println!("The second name is {}", str_arr[1]);
  ```
  
  **Note: If we access it out of the bound, we got a runtime error.**
  
* Slices: `&[T]`

  - The Slice is a reference to an existing variable, and is not created directly.
  - Slice has length and can be immutable or not.
  
  ```
  let a = [0,1,2,3,4];
  let b = &a[1..4]; // a slice of a: element 1, 2, 3
  let c = &a[..]; // a slice of a: all elements
  ```
  
* String: `str`

  - str is a unsized type.
  - usefull after a reference such as `&str`
  
* Tuples: `(T, [T...])`

  ```
  let x: (i32, &str) = (63, 'Runrioter');
  ```
  
  - if elemnts in two tuples has the same type and arity, you can assign one to another.
  
  ```
  let mut x = (1, 3, 5);
  let y = (4, 6, 7);
  x = y;
  ```
  
  - access element through a *destructuring let*
  
  ```
  let (x, y, z) = (1, 2, 3);
  println!("y is: {}", y);
  ```
  
  - Note:
  
  ```
  (0,) // single element tuple
  (0) // zero in parentheses
  ```
  
  - access element by indexing
  
  ```
  let tuple = (1,2,3);
  let x = tuple.0; // use . not [],
  let y = tuple.1;
  println!("x: is {}", x);
  ```
  
* Functions: `fn(T,[T...]) [-> T]`

  ```
  fn foo(x: i32) -> i32 {x}
  let n: fn(i32) -> i32 = foo;
  ```