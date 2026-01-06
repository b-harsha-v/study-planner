import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            index: true
        },
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120
        },
        description: {
            type: String,
            default: "",
            maxlength: 1000
        },
        dueAt: {
            type: Date,
            required: true,
            index: true
        },
        completedAt: {
            type: Date,
            default: null
        },
        taskStatus: {
            type: String,
            enum: ["PENDING", "COMPLETED", "LATE"],
            default: 2
        } 
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Task", TaskSchema);