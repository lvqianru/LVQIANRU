//引入系统提供的模块，第三方模块  引入模块名称

var HTTP=require('http');
HTTP.createServer(function(req,res){
    
    //处理请求
    //req.url      有效请求
    if(req.url!='/favicon.ico'){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        var info="";
        var info2="我说完了"
        if(req.url=='/a'){
            info="来了老弟";
        }else{
            info="来了老妹";
        }
        res.write(info);
        sres.end(info2);
                
    }
}).listen(3000,function(){
    console.log('server is running');
})
