import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // URL or file path to the image
      required: true,
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

bannerSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});


const Banner = mongoose.model('Banner', bannerSchema);

export default Banner;
