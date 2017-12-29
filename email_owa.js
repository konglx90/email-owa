function email_owa() {

    var to = document.getElementById('txtto'),
        subject = document.getElementById('txtsbj'),
        body = document.getElementsByName('txtbdy')[0],
        today = new Date(),
        day = prefixInteger(today.getDate(), 2),
        month = prefixInteger(today.getMonth() + 1, 2),
        to_template = '<table class="rcptWll" cellspacing="0" cellpadding="0" border="0">' +
            '<tbody><tr><td><div id="divTo"><span class="rwRO">' +
            '17600367421@163.com ' +
            '<span class="sq">[<a href="#" onclick="return onClkRmRcp(\'1,0\')">删除</a>]</span></span></div></td></tr></tbody></table>' +
            '<input type="text" name="txtto" id="txtto" class="edt" value="" maxlength="1000" onchange="onChg();">';
        body_template = '<textarea name="txtbdy" title="邮件正文" rows="19" ' +
        'cols="104" onchange="onChgBdy();">今日完成: \n\n1. \n2. \n\n 祝好， \n\nQQ: YOUR QQ </textarea>';

    /***********************对主题操作*******************/
    subject.setAttribute("type", "button");
    subject.setAttribute("value", "Your Name" + month + day + "工作日报");
    subject.setAttribute("type", "text");
    // 仅限于数字
    function prefixInteger(num, length) {
        return (num / Math.pow(10, length)).toFixed(length).substr(2);
    }

    if (subject.value[0] != "Your Name First string" || subject.value[10] != "报") alert("请先填写主题");

    /**********************对正文操作**********************/
    var body_parent = body.parentNode;
    if (body.value === '') {
        body_parent.removeChild(body);
        body_parent.innerHTML = body_template;
    }

    /*********************对收件人操作**********************/
    // TODO
}

email_owa();
