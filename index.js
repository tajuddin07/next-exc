const { response } = require('express');
const express = require('express');
const app = express();

const fetch = require ('node-fetch');

app.listen(3000,()=> console.log('connected'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

app.post('/api' , (request,response)=>{
    
    var inpDate =request.body.inputDate;
    var data = request.body;
    
    //console.log(inpDate);
    var start = inpDate -(60000*60);
    var end = inpDate + (60000*60);
    
    var param = start;

    // // looping to get 1hr before and after for the parameter
    for(loopTime = start; loopTime < end; loopTime +=600000)
    {
        var NormalDate = new Date(loopTime);

        if(loopTime != start)
        {
            param += ','+loopTime;
            
        }
        
    }
    api_param=param;
    //console.log(param);
    response.json({
        parameter : param,
        status:'success',

     });
    
});


// app.post('/weather' , async (request,wresponse)=>{
    
    
//     var q =request.body.lat+request.body.lng;
//     var t = request.body.timest;
    
//     var url='http://api.weatherapi.com/v1/current.json?key=981e0ba7e1fd4627a1380438211612&q='+ q +"unixend_dt"+ t;
//     const  response = await fetch(url);
//     const json = await wresponse.json();
//     console.log(json);
//     // response.json({
//     //     temp:temp_c,
//     //     status:'success',
//     //  });
    
// });
   
