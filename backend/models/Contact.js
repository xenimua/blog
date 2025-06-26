import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Contact', ContactSchema);
