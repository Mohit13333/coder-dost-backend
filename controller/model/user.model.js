import mongoose,{Schema} from "mongoose"
// const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  cart:[{type: Schema.Types.ObjectId, ref:'Product' }],
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
    required: true,
  },
  password: { type: String, minLength: 6, required: true },
  token: String,
});


const User = mongoose.model('User', userSchema);

export default User;
