
var host = 'http://localhost:8080';

module.exports = {
    titleUrl: `${host}/request/vote/title.js`, //获取投票
    resultUrl: `${host}/request/vote/result.js`,//查看投票结果
    submitUrl: `${host}/request/vote/submit.js`, //提交投票
}