import mongoose from 'mongoose';

const marqueeSchema = new mongoose.Schema(
  {
    string: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default:false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

marqueeSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});


const Marquee = mongoose.model('Marquee', marqueeSchema);

export default Marquee;
