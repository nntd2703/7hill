#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:<nntdT1>/<nntdT1>.github.io.git master

# if you are deploying to https://<nntdT1>.github.io/<7hill>
git push -f git@github.com:nntd2703/vuejs.git master:gh-pages

cd -
