var utils = require("./utils.js")

worker.onMessage(function(res){
  console.log("接收到消息：" + res);
})