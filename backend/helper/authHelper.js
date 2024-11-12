const bcrypt = require("bcrypt");
module.exports.hashPassword = async(password)=>{
try{
    const saltRound = 10;
    const hashedPasswords = await bcrypt.hash(password,saltRound);
    return hashedPasswords
}
catch(error){
    console.log(error);
}
}
module.exports.comparePassword= async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);


}
