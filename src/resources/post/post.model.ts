import { Schema, model } from "mongoose";
import post from "@/resources/post/post.interface";

const postSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },

        body: {
            type: String,
            require: true
        },
    },
    { timestamps: true }
);

export default model<post>("post", postSchema);