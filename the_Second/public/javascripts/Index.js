var thealist = null;

var getEverydaySongMenu = document.querySelector("#getEverydaySongMenu");
var list1 = document.querySelector(".list-1")


//----------------------每日歌单渲染---------------------
function getEverydaySongMenus() {
    let str = ""
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    //回调函数

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //获得数据库数据
            var data = xhr.responseText

            data = JSON.parse(data);


            for (let i = 0; i < data.length; i++) {

                str += `
                <li><a href="https://www.baidu.com" class="everydaymenu">${data[i].cat_name}</a></li>
                `
            }
            // console.log(str)
            getEverydaySongMenu.innerHTML += str;

            var alist = $('.everydaymenu')
            // console.log(alist, 909);
            thealist = alist;
            // console.log(thealist, 808);
            thealist = thealist


            let theVal = null;
            for (let j = 0; j < alist.length; j++) {


                $(alist[j]).on('click', function (theVal) {
                    theVal = data[j].cat_id;

                    console.log(theVal, j)


                    event.preventDefault();
                    let str1 = ''
                    var xhr1 = null;
                    if (window.XMLHttpRequest) {
                        xhr1 = new XMLHttpRequest()
                    } else {
                        xhr1 = ActiveXObject('Microsoft.XMLHTTP')
                    }
                    xhr1.onreadystatechange = function () {
                        if (xhr1.readyState == 4 && xhr1.status == 200) {
                            // console.log(01010101)
                            //获得数据库数据
                            var data1 = xhr1.responseText

                            data1 = JSON.parse(data1);
                            // console.log(data1)
                            for (let k = 0; k < data1.length; k++) {
                                str1 += `
                                            <div class="reconmend-${k + 1}">
                    <a href=""><img src="${data1[k].pic_src}" alt=""></a>
                    <a href=""><img class="icon" src="images/cover_play.png" alt=""></a>
                    <a href="">${data1[k].songs_name}</a>
                    <p>
                        <font color="gray">播放量：${data1[k].play_times}</font>
                    </p>
                </div>                                             
                                `
                            }
                            list1.innerHTML = str1;
                        }
                    }
                    xhr1.open("get", `getEverydaySongs.do?theVal=${theVal}`)
                    // xhr1.open()
                    xhr1.send(null)
                })
            }
        }
    }
    xhr.open("get", "getEverydaySong.do?theVal=")
    xhr.send(null)

}







//-----------------------排行榜渲染----------------
function rankinglistid() {
    var ranking = document.querySelector(".ranking")
    let str1 = ""
    let xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    var arry1 = []
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            arry1 = xhr.responseText;
            arry1 = JSON.parse(arry1)
            var smallstr = ''
            // console.log(arry1, 222222222)

            //-------------------4个div--------------------
            for (let i = 0; i < arry1.length; i++) {
                smallstr = ''
                var smallArr = [];
                function getRankingList(i) {
                    let xhr1 = null;
                    if (window.XMLHttpRequest) {
                        xhr1 = new XMLHttpRequest()
                    } else {
                        xhr1 = new ActiveXObject("Microsoft.XMLHTTP")
                    }
                    xhr1.onreadystatechange = function () {
                        if (xhr1.readyState == 4 && xhr1.status == 200) {
                            smallArr = xhr1.responseText;
                            smallArr = JSON.parse(smallArr)
                            console.log(smallArr, i);         //----打印每一个div 顺序问题
                            smallstr = ""
                            for (let m = 0; m < smallArr.length; m++) {
                                console.log("m=",m)
                                smallstr += `
                            <div>
                            <img src="${smallArr[m].before_img_src}" alt="">
                            <p><a href="">${smallArr[m].song_name}</a></p>
                            <span><a href="">${smallArr[m].singer}</a></span>
                            </div>                                
                        `
                            }
                            str1 += `
                            <div class="ranking-1">
                            <div class="ranking-gj">
                                <img src="${arry1[i].bg_img}" alt="">
                                <img class="ranking-text" src="images/ranking-text-${i+1}.png" alt="">
                            </div>
                            <div class="rank-list">
                                ${smallstr}            
                            </div>
                            </div>
                     `
                        }
                        ranking.innerHTML = str1;
                    }


                    xhr1.open("get", `getRankingList.do?i=${i+1}`,false)
                    xhr1.send(null)
                //     {
                //     if (xhr1.readyState == 4 && xhr1.status == 200) {
                //         smallArr = xhr1.responseText;
                //         smallArr = JSON.parse(smallArr)
                //         // console.log(smallArr, i);         //----打印每一个div 顺序问题

                //         smallstr = ""
                //         for (let m = 0; m < smallArr.length; m++) {
                //             console.log("m=",m)
                //             smallstr += `
                //         <div>
                //         <img src="${smallArr[m].before_img_src}" alt="">
                //         <p><a href="">${smallArr[m].song_name}</a></p>
                //         <span><a href="">${smallArr[m].singer}</a></span>
                //         </div>                                
                //     `
                //         }
                //         console.log(arry1,i,arry1[i],999);
                        
                //         str1 += `
                //         <div class="ranking-1">
                //         <div class="ranking-gj">
                //             <img src="${arry1[i].bg_img}" alt="">
                //             <img class="ranking-text" src="images/ranking-text-${i+1}.png" alt="">
                //         </div>
                //         <div class="rank-list">
                //             ${smallstr}            
                //         </div>
                //         </div>
                //  `
                //     }
                //     ranking.innerHTML = str1;
                // }




                }
                getRankingList(i)
            }
        }
    }





    xhr.open("get", "rankinglistid.do")
    xhr.send(null)

}


//-------歌手类型渲染----
var thedate = []
function singertype() {
    var xuanranul = document.querySelector(".xuanranul");
    var str = "";
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            thedate = xhr.responseText
            thedate = JSON.parse(thedate)
            //    thedate = JSON.parse(thedate);
            console.log(thedate, 2020202)
            for (let i = 0; i < thedate.length; i++) {
                str += `
                <li><a href="http://www.baidu.com" class="thesinger">${thedate[i].cat_name}</a></li>
                `

            }
            xuanranul.innerHTML += `
            <li>
                    <h1><a href="#fanhui">歌手</a></h1>
                </li>
                ${str}
                <li><a href="">更多></a></li> 
            
            `;
            singerlist()


        }
    }
    xhr.open("get", "singertype.do")
    xhr.send(null)
}
//---------歌手头像图片----
function singerlist() {
    var singer=document.querySelector(".singer")
    var str=""
    // var thei;
    var thesinger = $(".thesinger")
    // console.log(thesinger, 9090)
    for (let i = 0; i < thesinger.length; i++) {

        $(thesinger[i]).on("click", function (thei) {
            thei = thedate[i].cat_id
            if(!thei){
                thei=1
            }
            
            console.log(thei, 404)
            event.preventDefault()
            console.log(thesinger[i])
            // console.log(thedate[i].cat_id,303)
            var xhr=null
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest()
            } else {
                xhr = new ActiveXObject("Microsoft.XMLHTTP")
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var thedate=xhr.responseText;
                    thedate=JSON.parse(thedate)
                    console.log(thedate,1234)
                    str=""
                    for(let j=0;j<thedate.length;j++){
                        str+=`
                    <div class="singer-list-${j+1}">
                        <a href=""><img src="${thedate[j].pic_src}" alt=""></a>
                        <p><a href="">${thedate[j].singer_name}</a></p>
                        <p>
                            <font color="gray" size="2">${thedate[j].singer_works}</font>
                        </p>
                    </div>
                    
                    `
                    }
                    singer.innerHTML=str;

                
                }
            }
            xhr.open("get", `singerlist.do?cat_id=${thei}`)
            xhr.send(null)


        })
    }


}








window.onload = function () {
    getEverydaySongMenus();
    rankinglistid();
    singertype();//歌手类型
    singerlist()
    // singerlist();

}