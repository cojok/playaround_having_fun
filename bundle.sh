# Used internally for bundling the challenge

rm -rf node_modules dist unit.xml
rm -rf challenge.zip
zip -r -o challenge.zip  ./ -x "*.git*" -x "*/\.DS_Store" -x "\.DS_Store" -x "../"