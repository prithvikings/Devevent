import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";
export default function Home() {
  return (
    <section>
      <h1 className="text-center">The Hub of Every Dev <br/> Event you can&#39;t Miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Confrences, All in One Place</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events list-none">
          {events.map((event)=>(
            <li  key={event.title}><EventCard {...event}/></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
