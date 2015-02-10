/*	配置文件
 *
 */
 
/// 示例抓取：妹子图
/*module.exports = {
    mode: 'web',
    
    /// 是否是分页
    isPagination: true, 
    /// 开始页码
    from: 8,
    /// 结束页码
    to: 9,
    
    /// 抓取的类型 text:文本，images:图片
    type: 'image', 
    
    /// %% 表示页码
    url: 'http://sexy.faceks.com/?page=%%',
    
    /// 保存的路径
    saveDir: 'E:/img',
    
    /// 选择器
    /// $:{String} 选择器，与jQuery的语法相似
    /// attr:{String} url所在的属性
    selector: [
        { $: '$("a.img")', attr: 'href' },
        { $: '$("a[bigimgsrc]")', attr: 'bigimgsrc' }
    ]
};*/


module.exports = {
    mode: 'web', /// console:cmd窗口方式，web:网页形式
    isPagination: true,
    from: 1,
    to: 1,
    
    type: 'image',
    url: 'http://list.jd.com/list.html?cat=670%2C671%2C672&JL=6_0_0&page=%%',
    charset: 'gbk',
    saveDir: 'E:/jd',
    selector: [
        { $: '$(".p-img a")', attr: 'href' },
        { $: '$("#spec-list").find("img[data-url]")', attr: 'src' }
    ],
    imageFn: function (url) {
        return url.replace('/n5/', '/n0/')
    }
};