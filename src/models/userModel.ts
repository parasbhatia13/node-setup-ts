import mongoose, { Schema } from 'mongoose';
import { IUser } from '../dto/types/user.type';
// Create the user schema
const userSchema = new Schema<IUser>({

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 100
    },
    profilePicture: {
        type: String,
        default: null
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

// Export the model
export default mongoose.models.User || mongoose.model('User', userSchema);