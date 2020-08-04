/**
 * @supported Your Device ID
 */

var obj = JSON.parse($response.body);
obj.advertisement_num = 0;
obj.advertisement_info = [];
delete obj.appid;
$done({ body: JSON.stringify(obj) });

/*
 obj: 微信公众号返回的数据，obj 里的 appid，advertisement_num 和 advertisement_info 都是和广告有关的数据。
 如何判断 advertisement_num 和 advertisement_info 分别给 0 和 [] 呢？
    我们只需要参考一个没有广告的公众号会发现这个请求还会存在，而且返回数据对应正是 0 和 []。
    没有广告的响应也没有 appid 字段，所以我们也要删掉。
 */
