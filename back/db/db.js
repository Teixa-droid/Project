import mongoose from "mongoose";
//const {connect} = require('mongoose');

const DBconect = async ()=>{
    return await mongoose.connect(process.env.DATABASE_URL)
    .then(()=> {
        console.log('existing connection')
    })
    .catch((e) => {
        console.error('Error to connect db')
    })
};

export default DBconect;
