var mysql =require('mysql')
module.exports = {
    config: {
        host: '94.191.87.109',
        port: 3306,
        user: 'root',
        password: 'hs6j58q',
        database: 'the_second'
    },
    connection: function (sql, sqlArr, callbak) {

        var pool = mysql.createPool(this.config)
        pool.getConnection(function (err, connect) {

            connect.query(sql, sqlArr, callbak)
            connect.release()
        })
    }
}