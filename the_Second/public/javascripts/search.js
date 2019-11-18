 // var resultBox=document.querySelector('.child_view')
 var picBox=document.querySelector('.search_list')
 var btn=document.querySelector('#btn')
 
 // var img_type=document.querySelector('#img_type')
 var img_keywords=document.querySelector('#img_keywords')
 function getSongs(img_keywords=""){
     var xhr=null;
     if(window.XMLHttpRequest){
         xhr=new XMLHttpRequest();
     }else{
         xhr=new ActiveXObject('Microsoft.XMLHTTP')
     }
 
     xhr.onreadystatechange=function(){
         var str=''
         if(xhr.readyState==4 && xhr.status==200){
             var data=xhr.responseText
             // data=JSON.parse(data)
             if(JSON.parse(data)){
                 data= JSON.parse(data)// 后台传送过来的数据是 json 字符串  要转换
                 for(var i=0;i<data.length;i++){
                     str+=`<li class="song_item">
                             <ul class="song_ranky">
                                 <li class="song_rank"><span>${i+1}</span><img class="cover" src="${data[i].song_img}" alt=""></li>
                                 <li class="song_name">${data[i].song_name}</li>
                                 <li class="singer_name">${data[i].singer_name}</li>
                                 <li class="album_name">${data[i].album}</li>
                                 <li class="time_long">${data[i].play_time}</li>
                                 <div class="song_opts">
                                     <img src="./images/player-play.png" alt="">
                                     <img src="./images/jiahao.png" alt="">
                                     <a class="collection"><img src="./images/collection.png" alt="" ></a>
                                     <img src="./images/download.png" alt="">
                                 </div>
                             </ul>
                             
                         </li>`
                 }
                 picBox.innerHTML=str;
                 if(!data.length){
                     picBox.innerHTML=`<div class="nodata">
                                         <img src="./images/nodata.png" alt="">
                                             <p>没有查询到数据，请刷新重试</p>
                                             <a class="refresh">刷新</a>
                                         </div>`
                 }
             }
             console.log(data);
             
             
         }
     }

     xhr.open('get',`getPic.do?img_keywords=${img_keywords}`)
     xhr.send(null)
 }

 // 获取 总条数
 // function getCountNum(){
 //     var xhr=null;
 //     if(window.XMLHttpRequest){
 //         xhr=new XMLHttpRequest();
 //     }else{
 //         xhr=new ActiveXObject('Microsoft.XMLHTTP')
 //     }
 
 //     xhr.onreadystatechange=function(){
 //        if(xhr.status==200 && xhr.readyState==4){
 //            var data=xhr.responseText
 //            data= Math.ceil(JSON.parse(data)[0].count/4)
 //            console.log(data);
 //            var str=''
 //            for(var i=0;i<data;i++){
 //                if(i==0){

 //                 str+=` <li class="page-item active"><a class="page-link" href="#">${i+1}</a></li>`
 //                }else{
                    
 //                 str+=` <li class="page-item"><a class="page-link" href="#">${i+1}</a></li>`
 //                }
 //            }
 //            console.log(str);
 //            $(str).insertAfter($('.firstLi'))
 //        }
         
 //     }

 //     xhr.open('get',`getCountNum.do`)
 //     xhr.send(null)
 // }
 window.onkeydown=function(event){
     // console.dir(event.keyCode)
     if(event.keyCode==13){
         event.preventDefault()                
         getSongs(img_keywords.value)
     }
 }    
 window.onload=function(){
     getSongs(img_keywords.value)
     
     btn.onclick=function(){
         // console.log(111111111)
         getSongs(img_keywords.value)
     }

     // getCountNum()
 }