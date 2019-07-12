// 表单验证
$(function() {
    $('#form1').validate({ //判断是否有效
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 20,
                remote: { //将前端的name给后端
                    url: "../php/login.php ", //后台处理程序
                    type: "post " //数据发送方式
                }
            },
            password: {
                required: true,
                minlength: 6
            },
            repass: {
                required: true,
                equalTo: '#password'
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: '用户名不能为空',
                minlength: '用户名不能小于2',
                maxlength: '用户名不能大于20',
                remote: '用户名已存在'
            },
            password: {
                required: '密码不能为空'
            },
            repass: {
                required: '密码重复不能为空'
            },
            email: {
                required: '电子邮箱不能为空',
                email: '你输入的格式有误'
            }
        }

    });
});

$.validator.setDefaults({
    /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
    success: function(label) {
        label.text('√').css('color', 'green').addClass('valid');
    }
});







// <script type="text/javascript">
// //表单验证-用户名
// $(function() {
//     $('#myform').validate({
//         rules: {
//             username: {
//                 required: true,
//                 minlength: 2,
//                 maxlength: 20,
//                 remote: { //将前端的name给后端
//                     url: "../php/register.php", //后台处理程序
//                     type: "post" //数据发送方式
//                 }
//             },
//             password: {
//                 required: true,
//                 minlength: 6,
//                 maxlength: 16,
//             },
//             repass: {
//                 required: true,
//                 equalTo: '#password'
//             },
//             email: {
//                 required: true,
//                 email: true
//             }
//         },
//         messages: {
//             username: {
//                 required: '用户名不能为空',
//                 minlength: '用户名不能小于2',
//                 maxlength: '用户名不能大于20',
//                 remote: '用户名已存在'
//             },
//             password: {
//                 required: '密码不能为空'
//             },
//             repass: {
//                 required: '密码重复不能为空'
//             },
//             email: {
//                 required: '电子邮箱不能为空',
//                 email: '你输入的格式有误'
//             }
//         }

//     });
// });

// $.validator.setDefaults({
//     /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
//     success: function(label) {
//         label.text('√').css('color', 'green').addClass('valid');
//     }
// });
// </script>