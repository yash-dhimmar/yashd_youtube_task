const jwt = require("jsonwebtoken");
const { UserToken, User } = require("../../../data/models/index");

const generateTokens = async (user) => {
    try {
        const payload = { _id: user[0]._id, };
        const accessToken = jwt.sign(
            payload,
            'secretkey',
            { expiresIn: "1m" }
        );
        const refreshToken = jwt.sign(
            payload,
            'secretkey',
            { expiresIn: "2m" }
        );
        const userToken = await User.find({ _id: user[0]._id });
        if (userToken) {
            var data = await User.updateOne({ _id: user[0]._id }, {
                $set: {
                    refreshToken: refreshToken, accessToken: accessToken
                }
            });
            console.log("data===========>",data)
            console.log("userToken===========>",userToken)
        }
        var data = await UserToken.create({ userId: user[0]._id, refreshToken: refreshToken, accessToken: accessToken })
        return Promise.resolve({ accessToken, refreshToken });
    } catch (err) {
        return Promise.reject(err);
    }
};

module.exports = generateTokens;