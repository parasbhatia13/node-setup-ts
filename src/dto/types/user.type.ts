
// Define the interface for the user document
export interface IUser extends Document {
  email: string;
  fullname: string;
  profilePicture: string | null;
  isVerified: boolean;
  isDeleted: boolean;
  updatedAt: Date;
  createdAt: Date;
}
