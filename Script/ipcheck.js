/*
https://raw.githubusercontent.com/congcong0806/surge-list/master/Script/ipcheck.js

* [Panel]
* 节点信息 = script-name=节点信息, title="节点信息", content="请刷新", style=info, update-interval=60
* ...
* [Script]
* 节点信息 = type=generic,timeout=3,script-path=https://raw.githubusercontent.com/gzfynn/Surge/main/Script/ipcheck.js
*/

let url = "http://ip-api.com/json/?lang=zh-CN"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.query
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
    
  body = {
    title: "节点信息",
    content: `IP位置: ${emoji}${country} - ${city}\n运营商: ${isp}`,
    icon: "globe.asia.australia.fill"
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
