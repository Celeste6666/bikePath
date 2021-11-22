#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
# npm run build

# cd 到构建输出的目录下
# cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

# git init
git add -A
git commit -m '完成景點及餐廳顯示、簡化查詢景點及餐廳marker顯示功能'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Celeste6666/bikePath.git main:main

cd -