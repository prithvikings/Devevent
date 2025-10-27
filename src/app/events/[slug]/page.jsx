import { Suspense } from "react";
import EventDetails from "@/components/EventDetails";

const EventDetailsPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        {/* ✅ Pass the slug normally */}
        <EventDetails params={slug} />
      </Suspense>
    </main>
  );
};

export default EventDetailsPage;
