class CommonController{
    async removeEmptyParams(body,type=null){
        Object.keys(body).forEach(function(key) {
            let val = body[key];
            if(val == ""){
                if(type != null){
                    body[key] = null;
                }else{
                    delete body[key];
                }
            }
        });
        return body;
    }
}

module.exports = new CommonController();
