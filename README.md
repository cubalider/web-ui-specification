# Compile

reset && rm -rf build/* && node_modules/.bin/babel src --out-dir build

# Test

yarn test