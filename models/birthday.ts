import mongoose ,{model, Document, Schema} from 'mongoose';

interface Ibirthday extends Document{
    name:string;
    date:Date;
}

const Birthdayschema:Schema =new Schema<Ibirthday>({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }

})

export default mongoose.model<Ibirthday>('Birthday',Birthdayschema);
