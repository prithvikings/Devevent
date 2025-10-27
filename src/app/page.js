export const dynamic = "force-dynamic";  // <--- Add this line
export const revalidate = 0;

import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";
import { cacheLife } from "next/cache";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Home() {

  // 'use cache';
  // cacheLife('hours')

  const response = await fetch(`${base_url}/api/events`, {
    cache: 'no-store'
});

  const { events } = await response.json();
  return (
    <section>
      <h1 className="text-center">
        The Hub of Every Dev <br /> Event you can&#39;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, and Confrences, All in One Place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events &&
            events.length > 0 &&
            events.map((event) => (
              <li className="list-none" key={event.title}>
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
