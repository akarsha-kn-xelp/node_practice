var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "",
    database: "node"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


module.exports = class Product {
    constructor(name ='', price='') {
        this.name = name;
        this.price = price;
    }
 
    save(callback) {
        let sql = "INSERT INTO products (name,price) value ('"+this.name +"',"+this.price+")";
        con.query(sql , function (err, result) {
            if (err) {
                throw err;
            }
            else{
                callback();
            }
        });
    }

    findById(id,callback){
        let sql = "Select * FROM products WHERE id =  "+id +";";
        con.query(sql , function (err, result) {
            if (err) {
                throw err;
            }
            else{
                callback(result);
            }
        });
    }

    findByIdAndUpdate(id,data,callback){

        let sql = "UPDATE products SET";
        let condition = "";
        if(data.name)
            condition += " name = '"+data.name +"',";
        if(data.price)
            condition += " price = "+data.price +",";
        condition = condition.slice(0, -1);
        sql = sql+condition+ "  WHERE id=  "+id +";"
        con.query(sql , function (err, result) {
            if (err) {
                throw err;
            }
            else{
                callback();
            }
        });
    }

    findByIdAndRemove(id,callback){
        let sql = "DELETE FROM products WHERE id = "+id +";";
        con.query(sql , function (err) {
            if (err) {
                throw err;
            }
            else{
                callback();
            }
        });
    }
 }
