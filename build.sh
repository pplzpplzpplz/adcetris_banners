#!/bin/bash
rm -rf dist/ 
mkdir dist
echo "dist folder reset"

HTML_FILE_NAME="index.html"
CSS_FILE_NAME="styles.css"
JS_FILE_NAME="script.js"
html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype $HTML_FILE_NAME -o dist/$HTML_FILE_NAME
echo "$HTML_FILE_NAME minified"
npx postcss $CSS_FILE_NAME > dist/$CSS_FILE_NAME
echo "$CSS_FILE_NAME minified"
uglifyjs --compress --mangle -o dist/$JS_FILE_NAME -- $JS_FILE_NAME
echo "$JS_FILE_NAME minified"
echo "Minification complete!"
