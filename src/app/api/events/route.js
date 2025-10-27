export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import { Event } from '@/database';
import connectDB from '@/lib/mongoose';
import { NextResponse as Response } from 'next/server';
import { NextRequest as Request } from 'next/server';
import {v2 as cloudinary} from 'cloudinary';

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
        const file= formData.get('image');
        if(!file){
            return Response.json({ error: 'Image file is required' }, { status: 400 });
        }

        let tags = JSON.parse(formData.get('tags') || '[]');
let agenda = JSON.parse(formData.get('agenda') || '[]');
        const arrayBuffer= await file.arrayBuffer();
        const buffer= Buffer.from(arrayBuffer);
        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: 'image', folder: 'DevEvent' }, (error, results) => {
                if(error) return reject(error);

                resolve(results);
            }).end(buffer);
        });
        event.image= uploadResult.secure_url;

        const  createdEvent = await Event.create({
            ...event,
            tags: tags,
            agenda: agenda
        });
        return Response.json({ message: 'Event created successfully', event: createdEvent }, { status: 201 });
    }catch(error){
        console.error('Error creating event:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(req){
    try{
        await connectDB();
        const events = await Event.find().sort({ createdAt: -1 });
        return Response.json({ message:"Event Fetched Successfully",events }, { status: 200 });
    }
    catch(error){
        console.error('Error fetching events:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}