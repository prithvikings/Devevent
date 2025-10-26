'use server';

import Booking from '@/database/booking.model';

import connectDB from '@/lib/mongoose';


export const createBooking = async ({ eventId, slug, email }) => {
    try {
        await connectDB();

        await Booking.create({ eventId, slug, email });

        return { success: true };
    } catch (e) {
        console.error('create booking failed', e);
        return { success: false };
    }
}