$(function() {
    $.ajax({
        type: "GET",
        url: "http://10.31.158.56/yanxuan/php/details.php",
        dataType: "json",
        success: function(data) {
            // console.log(data);
            var str = "";
            $.each(data, function(index, elm) {
                str += `
        <div class="wrap">
                <div id="spic">
                    <img src="${elm.url} " alt="" id="smallpic">
                    <div id="sf"></div>
                </div>
                <div id="bf">
                    <img src=" " alt="" id="bpic">
                </div>
                <div id="ulist">
                    <a href="javascript:;" id="left">&lt;</a>
                    <div id="list">
                        <ul>
    
    
                        </ul>
                    </div>
                    <a href="javascript:;" id="right">&gt;</a>
                </div>
            </div>
            <div class="goodsinfo-word">
                <div class="p-name">
                    <a class="loadtitle" href="##"></a>
                </div>
                <div class="p-price"><strong><em>￥</em><i class="loadpcp"></i></strong></div>
                <div class="p-btn">
                    <input type="text" id="count" value="1" />
                    <a href="##">加入购物车</a>
                </div>
            </div> -->`
            });
            str += "";
            $(".goodsinfo").append(str);
        }
    });
});