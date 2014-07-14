/**
 * Created by jewelknife on 2014/7/14.
 */
var curlstr = "'Cookie: pgv_pvi=3516853248; ASP.NET_SessionId=4hnboh55stcq5jib3xxaetfd; ClubName=GG%e7%ba%a6%e4%b8%87%e5%b8%8c%e5%a5%87; ClubID=2494; sidcookie=80; usertype=0; ptform=3; uidcookieid=5196087432; CNZZDATA1000062973=681817222-1404360048-http%253A%252F%252Fs80.zczq.sports.sina.com%252F%7C1405339689; IESESSION=alive; CampIndex=5; pgv_si=s7482713088' -H 'Origin: http://s80.zczq.sports.sina.com' -H 'Accept-Encoding: gzip,deflate,sdch' -H 'Host: s80.zczq.sports.sina.com' -H 'Accept-Language: zh-CN,zh;q=0.8' -H 'User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.66 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: */*' -H 'Referer: http://s80.zczq.sports.sina.com/index.aspx' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive'";

curlstr.split('-H').forEach(function(str){

    str = str.trim();
    console.log(str.replace(": ","\": \"").replace("'", "\"").replace("'", "\","));

});