'use strict';

const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const ya = require('yargs')

const DEFAULT_TITLE = 'default title';

const POST_TEMPLATE = `---
layout: post
title: <%- title %>
---

PLEASE EDIT HERE!!!
`

ya.usage('$0 <cmd> [args]')
  .command('post new [title]', 'Generate a new blog!', yargs => {
    yargs.positional('title', {
      type: 'string',
      describe: 'A title'
    })
  }, argv => {
    const title = argv.title || (pa(`Use default title: "${DEFAULT_TITLE}"`) && DEFAULT_TITLE);
    generateTemplate(title);
  })
  .help()
  .argv


function pa(msg) {
  console.log(msg);
  return true;
}

function generateTemplate(title) {
  const outstring = ejs.render(POST_TEMPLATE, { title }, {});
  const filename = fnByTitle(title);
  const dest = path.join(path.dirname(__dirname), '_posts', filename);
  if (fs.existsSync(dest)) {
    pa(`!!! Blog existed in ${dest}`);
    process.exit(1);
  }
  fs.writeFileSync(dest, outstring);
  pa(`Blog template generated in ${dest}`);
}

function pre0(x) {
  return ('0' + x).slice(-2);
}

function fnByTitle(title) {
  const titleDashed = title.split(' ').join('-');
  const date = new Date();
  const y = date.getFullYear();
  const m = pre0(date.getMonth() + 1);
  const d = pre0(date.getDate());
  return `${y}-${m}-${d}-${titleDashed}.md`;
}
