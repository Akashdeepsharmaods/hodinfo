import userModel from "../model/user.js";
class userController{
    static homePage = async (req,res)=>{
        res.render('index')
    }
    static retriveAll= async (req,res)=>{
        try {
            const result= await userModel.find()
            res.render('index',{data: result})
            // res.send(
                // {
                    // "status":"Success",
                    // "message": result
                    // 
                // }
                // )
            
        } catch (error) {
            res.send(
                {
                    "status":"Failed",
                    "message":"Unable to find"
                }
            )
        }
    }
 
    static createDoc = async (req,res)=>{
        const {currency, change_currency, last, buy, sale, volume } = req.body
        console.log(currency);
        if (currency && change_currency && last && buy && sale && volume) {
            try {
                const doc = new userModel({
                    name:currency+"/"+change_currency,
                    last:last,
                    buy:buy,
                    sale:sale,
                    volume:volume,
                    base_unit:change_currency
                })
                 await  doc.save()
                res.send(
                    {
                        "status":"Success",
                        "message":'Save data'
                    }
                )
            } catch (error) {
                res.send(
                    {
                        "status":"Failed",
                        "message":error
                    }
                )
            }

            
        } else {
            res.send(
                {
                    "status":"Failed",
                    "message":"All filed are required please check again"
                }
            )
        }
    }
}
export default userController
