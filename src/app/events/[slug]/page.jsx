import {Suspense} from "react";
import EventDetails from "@/components/EventDetails";

const EventDetailsPage = async ({ params }) => {
    const slug = await params.then((p) => p.slug);

    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <EventDetails params={slug} />
            </Suspense>
        </main>
    )
}
export default EventDetailsPage