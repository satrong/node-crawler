/*	配置文件
 *
 */
 
/// 示例抓取：妹子图
module.exports = {
    /// 是否是分页
    isPagination: true, 
    /// 开始页码
    from: 9,
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
};
