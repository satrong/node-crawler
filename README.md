# node-crawler
Nodejs爬虫工具，可抓取图片和文本

## 安装
在本地新建一个目录`test`，然后下载所有文件，并放到`test`目录中，在CMD/shell中进入到该目录，执行如下代码安装依赖包：
```shell
$ npm install
```

## 使用
```shell
$ node index.js
```

## 配置参数 
- **url**：被爬的网址，如果为分页，则用`%%`替换页码，如：`http://www.xiaoboy.com/?page=%%`
- **isPagination**：是否为分页，true或false
- **from**：如果`isPagination`为true，则此参数生效。表示从第几页开始爬
- **to**：同上。表示到第几页结束
- **type**：爬取的类型：图片(`image`)和文本(`text`)
- **saveDir**：保存的目录。如：`./download`
- **selector**：选择器，写法类似于jQuery。
- **headers**：头部信息。可选
