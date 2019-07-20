

//进行正则匹配 匹配出 {{name}} 类格式
function matchTemplate(html) {
    return html.match(/{{[a-zA-Z_]+[a-zA-Z0-9_]*}}/g);
}

/**
 * 将数 {{name}} 据进行包括好
 *  @param {{name}} = 例子格式
 */
function dropBorder(text) {
    return text.substring(2, text.length - 2);
}


//最后渲染函数
function renderData(el, defaultTemplate, templates, data) {
    var result = defaultTemplate;
    for (var i = 0; i < templates.length; i ++) {
        let templateValue = data[dropBorder(templates[i])];
        if (templateValue) {
            result = result.replace(templates[i], templateValue );
        }
    }
    el.innerHTML = result;
}
// 初始函数
function MVVM(id, data){
    this.id = id;
    this.data = data;
    this.el = document.getElementById(id);
    //保留一份默认模板 
    this.defaultTemplate = this.el.innerHTML;
    this.templates = matchTemplate(this.el.innerHTML);
    renderData(this.el, this.defaultTemplate, this.templates, this.data);
}