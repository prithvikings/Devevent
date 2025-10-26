'use server';

import Event from '@/database/event.model';
import connectDB from '@/lib/mongoose';


export const getSimilarEventsBySlug = async (slug) => {
    try {
        await connectDB();
        const event = await Event.findOne({ slug });

        return await Event.find({ _id: { $ne: event._id }, tags: { $in: event.tags } }).lean();
    } catch {
        return [];
    }
}