 var ulBox=$('.ulbox')
 var prevBtn=$('.prev_btn')
 var nextBtn=$('.next_btn')
 
function getRadioList(){
    
    $.ajax({
        type:"get",
        url:'getDian.do',
        data:{},
        success:function(data){
            let str=""
            console.log(data)
            for(var i=0;i<data.length;i++){
                str+=`
                <li class="radio_list_item">
                    <img class="radio_cover" src="${data[i].pics_src}" alt=""><br>
                    <a href="">${data[i].pics_name}</a>
                </li>`
            }
            
            ulBox.html(str)
            // ulBox.clone().appendTo('.ulbox')
            
            prevBtn.on('click',function(){
                
                ulBox.css('transform','translateX(-1008px)').css('transition','1s')
               
            })
            nextBtn.on('click',function(){
                
                ulBox.css('transform','translateX(-0px)').css('transition','1s')
                
                
            })

            $('.radio_list_item').on('click',function(){
                $('.inner_radio_list').css('display','none')
                $('.player_radio').css('display','block')
                $('.title1').html(data[$(this).index()].kind_music)
                $('.asinger_name').html(data[$(this).index()].kind_singer)
                $('.cover').attr('src',data[$(this).index()].kind_src)
                $('.type_btn').html(data[$(this).index()].pics_name)
                // console.log($(this)[0].innerText)
                // console.log(data[$(this).index()].kind_music)
            })
            $('.type_btn').on('click',function(){
                $('.inner_radio_list').show()
                $('.player_radio').hide()
            })

        },
        error:function(msg){
            console.log('没有获得数据')
        }
    });
    
}
$('.play').click(function(){
    if($('.play').attr('src')=='images/bofangsanjiaoxing.png'){
        $('.play').attr('src','images/zanting.png')
    }else{
        $('.play').attr('src','images/bofangsanjiaoxing.png')
    }
})
$('.shengyin').click(function(){
    if($('.shengyin').attr('src')=='images/shengyin.png'){
        $('.shengyin').attr('src','images/shengyin1.png')
        $('.voice_control').css('opacity','0')
    }else{
        $('.shengyin').attr('src','images/shengyin.png')
        $('.voice_control').css('opacity','1')

    }
})
window.onload=function(){
    getRadioList()
}

