# node-crawler
Nodejs爬虫工具，可抓取图片和文本

## 安装
在本地新建一个目录`test`，然后下载所有文件，并放到`test`目录中，在CMD/shell中进入到该目录，执行如下代码安装依赖包：
```shell
$ npm install
```

## 使用
```shell
$ node app.js
```

## 配置参数 
- **mode**：显示的方式。`console`：cmd显示方式；`web`：通过在浏览器中访问页面显示`http://127.0.0.1:8000`
- **url**：被爬的网址，如果为分页，则用`%%`替换页码，如：`http://www.xiaoboy.com/?page=%%`
- **isPagination**：是否为分页，true或false
- **from**：如果`isPagination`为true，则此参数生效。表示从第几页开始爬
- **to**：同上。表示到第几页结束
- **type**：爬取的类型：图片(`image`)和文本(`text`)
- **saveDir**：保存的目录。如：`./download`
- **selector**：数组，存储各个页面的选择器及URL所在的属性，按页面层级写。如：`[{$:'$("#test").find("a")',attr:'href'},{$:'$("#img li")',attr:'data-img'}]`
	- **$**：字符串，写法类似于jQuery。如：`'$("#test").find("a")'`
	- **attr**：url所在的属性（即`$`中查找的dom元素）
- **headers**：头部信息。可选
- **imageFn**：自定义函数，对图片地址进行处理，如抓取到的图片地址是：`http://xxx.com/imgsmall/123.jpg`此地址是一张小图，而大图的地址是：`http://xxx.com/imgbig/123.jpg`，此时可以使用到`imageFn`函数：function(url){ return url.replace('imgsmall','imgbig'); }
