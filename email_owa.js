function eamil_owa() {

    var to = document.getElementById('txtto'),
        subject = document.getElementById('txtsbj'),
        body = document.getElementsByName('txtbdy')[0],
        today = new Date(),
        day = prefixInteger(today.getDate(), 2),
        month = prefixInteger(today.getMonth() + 1, 2),
        to_template = '<table class="rcptWll" cellspacing="0" cellpadding="0" border="0">' +
            '<tbody><tr><td><div id="divTo"><span class="rwRO">' +
            '18215565503@163.com ' +
            '<span class="sq">[<a href="#" onclick="return onClkRmRcp(\'1,0\')">删除</a>]</span></span></div></td></tr></tbody></table>' +
            '<input type="text" name="txtto" id="txtto" class="edt" value="" maxlength="1000" onchange="onChg();">';


    /***********************对主题操作*******************/
    subject.setAttribute("type", "button");  // TODO 疑似是owa网站的bug
    subject.setAttribute("value", "孔令星" + month + day + "工作日报");
    subject.setAttribute("type", "text");
    // 仅限于数字
    function prefixInteger(num, length) {
        return (num / Math.pow(10, length)).toFixed(length).substr(2);
    }

    console.log(subject.value);
    if (subject.value[0] != "孔" || subject.value[10] != "报") alert("请先填写主题");

    /**********************对正文操作**********************/
    //console.log(body);   TODO 不知道为什么直接在原来的节点上加入文本没有用
    var body_parent = body.parentNode;
    body_parent.removeChild(body);
    body_parent.innerHTML = '<textarea name="txtbdy" title="邮件正文" rows="19" ' +
        'cols="104" onchange="onChgBdy();">今日完成: \n\n1. \n2. \n\n 祝好， \n\nQQ: 2403693382 </textarea>';

    /*********************对收件人操作**********************/
    //var to_parent = to.parentNode;
    //to_parent.removeChild(to)
    //to_parent.innerHTML = to_template;
    // TODO
}

eamil_owa();
