$(function() {
    $.ajax({
        type: "GET",
        url: "http://10.31.158.56/yanxuan/php/xinpinshoufa.php",
        dataType: "json",
        success: function(data) {
            // console.log(data);
            var str = "";
            $.each(data, function(index, elm) {
                str += `<li>
                            <a href="details.html?sid=${elm.sid}">
                                                <div class="hong">
                                                    <div class="dsaf">
                                                        <img src="${elm.path}" alt="${elm.titile}">
                                                    </div>
                                                    <div class="hong2">
                                                        <img src="${elm.path}" alt="">
                                                    </div>
                                                </div>
                                                <div class="bdt">
                                                    <div class="prdtTags">
                                                        <span class="itemTag">特价</span>
                                                    </div>
                                                    <h4 class="name">${elm.titile}</h4>
                                                    <span class="monne">￥${elm.price}</span>
                                                </div>
                                            </a></li>`
            });
            str += "";
            $(".m-newProducts .hd").append(str);
        }
    });
});

$(function() {
    $.ajax({
        type: "GET",
        url: "http://10.31.158.56/yanxuan/php/xianshigou.php",
        dataType: "json",
        success: function(data) {
            var str = "";
            $.each(data, function(index, elm) {
                str += `<dl>
                <dt>
                    <img src="${elm.path}" alt="">
                </dt>
                <dd class="rt">
                    <h2 class="itemName"><a href="detail.html">${elm.title}</a></h2>
                    <p class="itemDes">${elm.details}</p>
                    <div class="numTips">
                        <span>还剩</span>
                        <span>${elm.num}</span>
                        <span>件</span>
                    </div>
                    <div class="itemPrice">
                        <span class="aPrice">限时价</span>
                        <span class="yuan">¥</span>
                        <span class="aPriceIn">${elm.price}</span>
                    </div>
                    <a href="detail.html?id=${elm.id}" class="w-btn">立即抢购</a>
                </dd>
                </dl>`
            });
            str += "";
            $(".flashSaleLt").append(str);
        }
    });
});