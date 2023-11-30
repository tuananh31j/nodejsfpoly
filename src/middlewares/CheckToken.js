const jwt = require('jsonwebtoken');
require('dotenv').config();
class CheckToken{
    verifyUser(rep,res,next){
        try {
            const token = rep.headers.authorization?.split(' ')[1];
            console.log(token);
            if(token) {
                jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, user) => {
                    if(err) return res.status(400).json({message:'Token không hợp lệ!'})
                    rep.user = user;
                    next();
                })
            }else{
                res.status(400).json({message: 'Bạn chưa đăng nhập!'})
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    verifyAdmin(rep,res,next) {
        try {
                if(rep.user.role == 1 || rep.user.id === rep.params.id) {
                    return next();
                }else{
                    res.status(400).json({
                        message: "Bạn không phải admin!",user: rep.user})
                }
        } catch (error) {
            res.status(500).json({
                message: "lôi server",
                error
            })
        }
    }
}

module.exports = new CheckToken;