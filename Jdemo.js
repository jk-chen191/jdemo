//**** 是北邮人的用户名 -----是密码

//登录 北邮人论坛
var http = require("http");
var querystring = require("querystring");

var getId = querystring.stringify({
    "StartMatch": 39,
    "GoalDiff": 2
});

var contents = querystring.stringify({
    "ClubList": 401
});

var options = {
    host: "s80.zczq.sports.sina.com",
    path: "/data/challengehandler.ashx",
    method: "post",
    headers: {
        "Cookie": "pgv_pvi=8587534336; ASP.NET_SessionId=ufuod555iwzvoga1mbvrgamk; ClubName=GG%e7%ba%a6%e4%b8%87%e5%b8%8c%e5%a5%87; ClubID=2494; sidcookie=80; usertype=0; ptform=3; uidcookieid=5196087432; CNZZDATA1000062973=1296596430-1403886680-http%253A%252F%252Fs80.zczq.sports.sina.com%252F%7C1405345422; IESESSION=alive; pgv_si=s6001277952; CampIndex=5",
        "Origin": "http://s80.zczq.sports.sina.com",
//        "Accept-Encoding": "gzip,deflate,sdch",
        "Host": "s80.zczq.sports.sina.com",
        "Accept-Language": "zh-CN,zh;q=0.8",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.66 Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "*/*",
        "Referer": "http://s80.zczq.sports.sina.com/index.aspx",
        "X-Requested-With": "XMLHttpRequest",
        "Connection": "keep-alive"
    }
};
var objarry = [
    {"ShowMatch": 0, "Category": 1},
    {"QuickEnd": 1, "MatchID": 0},
    {"ShowAward": 1},
    {"PickCard": 1, "CardIndex": 3},
    {"GetAward": 1, "IsDropPlayer": 0, "isdouble": 0},
    {"ClubList": 401}
];

function getObj(index, id) {
    var obj = objarry[index];
    if (obj.hasOwnProperty('ShowMatch')) {
        obj.ShowMatch = id;
    }
    if (obj.hasOwnProperty('MatchID')) {
        obj.MatchID = id;
    }
    return obj;
}

function post(id, index) {
    var req = http.request(options, function (res) {
        res.setEncoding("utf8");
        res.on("data", function (data) {
            console.log(data);
            if (index < objarry.length - 1) {
                post(id, index + 1);
            }
        });
    });
    var sestr = querystring.stringify(getObj(index, id));
    console.log(sestr);
    req.write(sestr);
    req.end();
}


    var req1 = http.request(options, function (res) {
        res.setEncoding("utf8");
        res.on("data", function (data) {
            console.log(data);
            var id = eval(data)[0].a1;
            if (id) {
                console.log('Get id' + id);
                post(id, 0);
            } else {
                var req2 = http.request(options, function (res) {
                    res.setEncoding("utf8");
                    res.on("data", function (data) {
                        console.log(data);
//                    var id = querystring.stringify(data)[0].a2;
                        console.log();
                        var id = data.substring(data.indexOf("a2\":\"") + 5, data.indexOf("\",\"a4"));
//                    var id = eval('(' + data + ')')[0].a2;
                        console.log('Get id ' + id);
                        post(id, 0);
                    });
                });
                req2.write(querystring.stringify({"ClubList": 401}));
                req2.end();
            }

        });
    });

    req1.write(querystring.stringify({"StartMatch": 38, "GoalDiff": 4}));

    req1.end();


//req.write(querystring.stringify({"ShowMatch": id, "Category":1}));


//req.write(contents);
//
//req.end();