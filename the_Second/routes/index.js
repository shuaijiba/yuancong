var express = require('express');
var db=require('./../utils/db.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getSongList.do',function(req,res){
  let sql='select * from pic_category'
  db.connection(sql,[],function(err,data){
    console.log(data)
    res.send(data)

  })
})

router.get('/getRadioList1.do',function(req,res){
  let sql='select * from pics where cat_id =1'
  db.connection(sql,[],function(err,data){
    console.log(data)
    res.send(data)

  })
})

router.get('/getRadioList2.do',function(req,res){
  let sql='select * from pics where cat_id =2'
  db.connection(sql,[],function(err,data){
    console.log(data)
    res.send(data)

  })
})

router.get('/getRadioList3.do',function(req,res){
  let sql='select * from pics where cat_id =3'
  db.connection(sql,[],function(err,data){
    console.log(data)
    res.send(data)

  })
})

router.get('/getRadioList4.do',function(req,res){
  let sql='select * from pics where cat_id =4'
  db.connection(sql,[],function(err,data){
    console.log(data)
    res.send(data)

  })
})

router.get('/getRadioList5.do',function(req,res){
  let sql='select * from pics where cat_id =5'
  db.connection(sql,[],function(err,data){
    console.log(data)
    res.send(data)

  })
})

router.get('/getRadioList6.do',function(req,res){
  let sql='select * from pics where cat_id =6'
  db.connection(sql,[],function(err,data){
    console.log(data)
    res.send(data)

  })
})

router.get('/getRadioList7.do',function(req,res){
  let sql='select * from pics where cat_id =7'
  db.connection(sql,[],function(err,data){
    console.log(data)
    res.send(data)

  })
})


// 搜索
router.get('/getPic.do',function(req,res){
  let sql='select * from music_list where 1=1 '
  let keywords=req.query.img_keywords;
  // let sqlArr=[];
  console.log(keywords)

  
  if(keywords!=""){
    sql+='and  singer_name like ? or song_name like ? or album like ? '
    // sqlArr.push('%'+keywords+'%')
    keywords='%'+req.query.img_keywords+'%'
  }
  // console.log(sql,sqlArr);
  db.connection(sql,[keywords,keywords,keywords],function(err,data){
    console.log(data);
    
    
    if(data.length>0){
            res.send(data)
          }else{
            
            res.json({
              code:0,
              msg:'未查询到数据'
            })
            
          }
    })
})

//首页
router.get("/getEverydaySong.do",function(req,res){
  let sql='select * from recommend_category'
  db.connection(sql,[],function(err,data){
    // console.log(data)
    res.send(data)

  })

})

router.get("/getEverydaySongs.do",function(req,res){
  let theVal=req.query.theVal;
  let sql=`select * from recommend_songs where cat_id=${theVal}`
  db.connection(sql,[],function(err,data){
    res.send(data)

  })

})

router.get("/rankinglistid.do",function(req,res){
  let sql='select * from ranking_list_id'
  db.connection(sql,[],function(err,data){
    res.send(data)

  })

})

router.get("/getRankingList.do",function(req,res){
  let i=req.query.i;
  let sql=`select * from ranking_list where ranking_id=${i} LIMIT 3`
  db.connection(sql,[],function(err,data){
    res.send(data)
  })
})


router.get("/singertype.do",function(req,res){
  let sql='select * from singer_recommend'
  db.connection(sql,[],function(err,data){
    // console.log(101010101)
    // console.log(data,123445)
    res.send(data)


  })
})


router.get("/singerlist.do",function(req,res){
  let cat_id=req.query.cat_id;
  let sql=`select * from recommend_singers where cat_id=${cat_id}`
  db.connection(sql,[],function(err,data){
    // console.log(cat_id,77)
    // console.log(data,999)
    res.send(data)
  })
})


// 获取总页数
// router.get('/getCountNum.do',function(req,res){
//   let sql='select count(*) as count from p_info'
//   db.connection(sql,[],function(err,data){
//     res.send(data)
//   })
// })


//电台歌曲
router.get('/getDian.do',function(req,res){
  let sql='select * from pics where kind_id =1'
  db.connection(sql,[],function(err,data){
    res.send(data)
  })
})

module.exports = router;
