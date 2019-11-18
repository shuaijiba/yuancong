var Center=document.querySelector(".center");
            var kindUl=document.querySelector('.ul_kind')
            var Hot1=document.querySelector('.hot1')
            var Hot2=document.querySelector('.hot2')
            var Hot3=document.querySelector('.hot3')
            var Hot4=document.querySelector('.hot4')
            var Hot5=document.querySelector('.hot5')
            var Hot6=document.querySelector('.hot6')
            var Hot7=document.querySelector('.hot7')
            
            function getSongList(){
                let str=""
                let xhr=null;
                if(window.XMLHttpRequest){
                    xhr=new XMLHttpRequest()
                }else{
                    xhr=new ActiveXObject("Microsoft.XMLHTTP")
                }
    
                    //回调函数
    
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4 && xhr.status==200){
                        //获得数据库数据
                        var data=xhr.responseText
                        data=JSON.parse(data);
                        
                        
    
                        for(var i=0;i<data.length;i++){
                            
                            str+=`
                            <li><a href="#${data[i].cat_url}">${data[i].cat_name}</a></li>
                            `
                        }
                        kindUl.innerHTML+=str;
    
                        
                    }
    
                }
                xhr.open("get","getSongList.do")
                xhr.send(null)
    
            }

            function getRadioList1(){
                let str=""
                let xhr=null;
                if(window.XMLHttpRequest){
                    xhr=new XMLHttpRequest()
                }else{
                    xhr=new ActiveXObject("Microsoft.XMLHTTP")
                }
    
                    //回调函数
    
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4 && xhr.status==200){
                        //获得数据库数据
                        var data=xhr.responseText
                        data=JSON.parse(data);
                        
    
                        for(var i=0;i<data.length;i++){
                            
                            str+=`
                            <div class="#">
                                <a class="outbox" href="./radioPlay.html"><img src="${data[i].pics_src}" alt=""></a>
                                <a href=""><img class="icon" src="images/cover_play.png" alt=""></a>
                                <a href="">${data[i].pics_name}</a>
                            </div>
                            `
                        }
                        Hot1.innerHTML+=str;
    
                        
                    }
    
                }
                xhr.open("get","getRadioList1.do")
                xhr.send(null)
    
            }

            function getRadioList2(){
                let str=""
                let xhr=null;
                if(window.XMLHttpRequest){
                    xhr=new XMLHttpRequest()
                }else{
                    xhr=new ActiveXObject("Microsoft.XMLHTTP")
                }
    
                    //回调函数
    
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4 && xhr.status==200){
                        //获得数据库数据
                        var data=xhr.responseText
                        data=JSON.parse(data);
                        
    
                        for(var i=0;i<data.length;i++){
                            
                            str+=`
                            <div class="#">
                                <a class="outbox" href="./radioPlay.html"><img src="${data[i].pics_src}" alt=""></a>
                                <a href=""><img class="icon" src="images/cover_play.png" alt=""></a>
                                <a href="">${data[i].pics_name}</a>
                            </div>
                            `
                        }
                        
                        Hot2.innerHTML+=str;
    
                        
                    }
    
                }
                xhr.open("get","getRadioList2.do")
                xhr.send(null)
    
            }

            function getRadioList3(){
                let str=""
                let xhr=null;
                if(window.XMLHttpRequest){
                    xhr=new XMLHttpRequest()
                }else{
                    xhr=new ActiveXObject("Microsoft.XMLHTTP")
                }
    
                    //回调函数
    
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4 && xhr.status==200){
                        //获得数据库数据
                        var data=xhr.responseText
                        data=JSON.parse(data);
                        
    
                        for(var i=0;i<data.length;i++){
                            
                            str+=`
                            <div class="#">
                                <a class="outbox" href="./radioPlay.html"><img src="${data[i].pics_src}" alt=""></a>
                                <a href=""><img class="icon" src="images/cover_play.png" alt=""></a>
                                <a href="">${data[i].pics_name}</a>
                            </div>
                            `
                        }
                        Hot3.innerHTML+=str;
    
                        
                    }
    
                }
                xhr.open("get","getRadioList3.do")
                xhr.send(null)
    
            }

            function getRadioList4(){
                let str=""
                let xhr=null;
                if(window.XMLHttpRequest){
                    xhr=new XMLHttpRequest()
                }else{
                    xhr=new ActiveXObject("Microsoft.XMLHTTP")
                }
    
                    //回调函数
    
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4 && xhr.status==200){
                        //获得数据库数据
                        var data=xhr.responseText
                        data=JSON.parse(data);
                        
    
                        for(var i=0;i<data.length;i++){
                            
                            str+=`
                            <div class="#">
                                <a class="outbox" href="./radioPlay.html"><img src="${data[i].pics_src}" alt=""></a>
                                <a href=""><img class="icon" src="images/cover_play.png" alt=""></a>
                                <a href="">${data[i].pics_name}</a>
                            </div>
                            `
                        }
                        Hot4.innerHTML+=str;
    
                        
                    }
    
                }
                xhr.open("get","getRadioList4.do")
                xhr.send(null)
    
            }

            function getRadioList5(){
                let str=""
                let xhr=null;
                if(window.XMLHttpRequest){
                    xhr=new XMLHttpRequest()
                }else{
                    xhr=new ActiveXObject("Microsoft.XMLHTTP")
                }
    
                    //回调函数
    
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4 && xhr.status==200){
                        //获得数据库数据
                        var data=xhr.responseText
                        data=JSON.parse(data);
                        
    
                        for(var i=0;i<data.length;i++){
                            
                            str+=`
                            <div class="#">
                                <a class="outbox" href="./radioPlay.html"><img src="${data[i].pics_src}" alt=""></a>
                                <a href=""><img class="icon" src="images/cover_play.png" alt=""></a>
                                <a href="">${data[i].pics_name}</a>
                            </div>
                            `
                        }
                        Hot5.innerHTML+=str;
    
                        
                    }
    
                }
                xhr.open("get","getRadioList5.do")
                xhr.send(null)
    
            }

            function getRadioList6(){
                let str=""
                let xhr=null;
                if(window.XMLHttpRequest){
                    xhr=new XMLHttpRequest()
                }else{
                    xhr=new ActiveXObject("Microsoft.XMLHTTP")
                }
    
                    //回调函数
    
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4 && xhr.status==200){
                        //获得数据库数据
                        var data=xhr.responseText
                        data=JSON.parse(data);
    
                        for(var i=0;i<data.length;i++){
                            
                            str+=`
                            <div class="#">
                                <a class="outbox" href="./radioPlay.html"><img src="${data[i].pics_src}" alt=""></a>
                                <a href=""><img class="icon" src="images/cover_play.png" alt=""></a>
                                <a href="">${data[i].pics_name}</a>
                            </div>
                            `
                        }
                        Hot6.innerHTML+=str;
    
                        
                    }
    
                }
                xhr.open("get","getRadioList6.do")
                xhr.send(null)
    
            }

            function getRadioList7(){
                let str=""
                let xhr=null;
                if(window.XMLHttpRequest){
                    xhr=new XMLHttpRequest()
                }else{
                    xhr=new ActiveXObject("Microsoft.XMLHTTP")
                }
    
                    //回调函数
    
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4 && xhr.status==200){
                        //获得数据库数据
                        var data=xhr.responseText
                        data=JSON.parse(data);
                        
    
                        for(var i=0;i<data.length;i++){
                            
                            str+=`
                            <div class="#">
                                <a class="outbox" href="./radioPlay.html"><img src="${data[i].pics_src}" alt=""></a>
                                <a href=""><img class="icon" src="images/cover_play.png" alt=""></a>
                                <a href="">${data[i].pics_name}</a>
                            </div>
                            `
                        }
                        Hot7.innerHTML+=str;
    
                        
                    }
    
                }
                xhr.open("get","getRadioList7.do")
                xhr.send(null)
    
            }
          //---------------电台-------------------------------
          
            window.onload=function(){
                
                getSongList();
                getRadioList1();
                getRadioList2();
                getRadioList3();
                getRadioList4();
                getRadioList5();
                getRadioList6();
                getRadioList7();
            }