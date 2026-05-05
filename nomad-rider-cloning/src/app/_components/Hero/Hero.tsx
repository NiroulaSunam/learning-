"use client";

import SearchBar from "./SearchBar";


export default function Hero () {

    return (
        <div>
            {/*Header Section */}
            <h1>
                Find your next <span>Destination</span>.
            </h1>

            {/* Paragrah Section */}
            <p> 
                Platform designed for the technical needs for travelers. 
            </p>

            {/*Search Section*/}
            < SearchBar />
        </div>

    )
}