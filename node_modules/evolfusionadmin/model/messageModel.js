import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    name: String,
    lastname: String,
    tel: String,
    email: String,
    message: String
});

const Info = mongoose.model('Info', messageSchema);
export default Info;
