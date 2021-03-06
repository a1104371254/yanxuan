function addCookie(key, value, day) {
    let date = new Date(); //创建日期对象
    date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
    document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
}


$("#loginbtn").on('click', function() {
    let $username = $('#username').val();
    let $password = $('#password').val();
    $.ajax({
        type: 'POST',
        url: 'http://10.31.158.56/yanxuan/php/login.php',
        data: { //将用户名和密码传输给后端
            name: $username,
            pass: $password,
        },
        success: function(data) { //请求成功，接收后端返回的值
            console.log(data);
            if (!data) { //用户名或者密码错误
                $('#username').html('用户名或者密码错误');
                $('#password').val('');
            } else { //成功,存cookie,跳转到首页
                addCookie('UserName', $username, 7);
                // location.href = '_index.html';
            }
        }
    })
});