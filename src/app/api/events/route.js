import { Event } from '@/database';
import connectDB from '@/lib/mongoose';
import { NextResponse as Response } from 'next/server';
import { NextRequest as Request } from 'next/server';

export async function POST(req) {
    try{
        await connectDB();
        const formData = await req.formData();
        let event;
        
        try{
            event=Object.fromEntries(formData.entries());

        }catch(err){
            return Response.json({ error: 'Invalid form data' }, { status: 400 });
        }

        const  createdEvent = await Event.create(event);
        return Response.json({ message: 'Event created successfully', event: createdEvent }, { status: 201 });
    }catch(error){
        console.error('Error creating event:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}