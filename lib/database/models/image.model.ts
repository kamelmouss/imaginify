import { transformationTypes } from "@/constants";
import { model, models, Schema } from "mongoose";

export interface IImage extends Document {
    title: string; // Required title of the image
    transformationType: string; // Required type of transformation applied to the image
    publicId: string; // Required unique identifier for the image
    secureUrl: string; // Required URL for the secure version of the image
    width?: number; // Optional width of the image
    height?: number; // Optional height of the image
    config?: Record<string, any>; // Optional config object (could be a JSON or similar)
    transformationUrl?: URL; // Optional URL that represents the transformation
    aspectRatio?: string; // Optional aspect ratio, e.g., "16:9"
    color?: string; // Optional dominant color or other color info
    prompt?: string; // Optional prompt for generating the image, if applicable
    author: {
        _id:string;
        firstName: string;
        lastName: string;
    };
    createdAt?: Date; // Optional date of creation
    updatedAt?: Date; // Optional date of last update
}


const ImageSchema = new Schema({
    title: {type: String, required: true}, 
    transformationType: {type: String, required: true},
    publicId: {type:String, required: true},
    secureUrl: {type: URL, required: true},
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: {type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const Image = models?.Image || model('Image', ImageSchema);

export default Image;