import { db } from "~/server/db";
import SearchBarAllSpots from "../_components/all_spots/SearchBarAllSpots";

export default async function SpotsPage({ searchParams }) {
    const search = searchParams.search ?? "";
    const spots = await db.spots.findMany(...){
        where: { title: { contains: search } }
    });

    return (
        <div>
            <SearchBarAllSpots />
            {spots.map((spot) => (
                <div key={spot.id}> {spot.title} </div>
            ))}
        </div>
    );
}