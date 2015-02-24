---
layout: post
title: learning unix commands on the run
date: 2015-02-24 16:58:00
categories: blog unix-command
author: Runrioter
meta: unix commands
---
用Windows系统用惯了，外加大脑不好。使用Mac的时候经常需要敲打命令行。为了自己经常翻翻（纯粹扯淡）找个地方记录，
想起一个是一个,后面慢慢补充。

- sudo tcsh
	- By default, the root user is disabled on Mac OS X. If you need to do something as root, use 
	 the sudo command. To use this command, pass in the command and arguments you want to execute, 
	 as in: sudo vi /etc/hostconfig. You'll need to be a user with Administrative privileges. 
	 The main user has this capability by default.

	- If you need a root shell, you can always use sudo tcsh or sudo bash. If you want to enable 
	 the root user, it's as simple as giving root a password with sudo passwd root. You'll also
	 want to open System Preferences, choose Accounts, then Login Options and change Display
	 Login Windows as: to Name and password. Then you can log out and log in as the root user.
	 
- whoami
- mkdir -p /data/db
- chmod 777 /data/db
- ls -ld /data/db
- exit