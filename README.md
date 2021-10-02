# tiptap-extension-font-size
custom extension for font size in tiptap.


## Introduction

This is a custom extension for managing the font-size in tiptap. It follows the same structure as the official extensions.

Tiptap is a headless wrapper around ProseMirror – a toolkit for building rich text WYSIWYG editors, which is already in use at many well-known companies such as New York Times, The Guardian or Atlassian.

## Instalation

``yarn add tiptap-extension-font-size``

## Usage

Add it as any extension in ``useEditor()``

```      
<div
  @click="editor.chain().focus().setFontSize('16pt').run()"
  :class="{'active': editor.isActive('textStyle', {fontSize: '16pt'})}"
/> 
```

## Official Documentation

Documentation can be found on the tiptap website.
