"use client";

import { useRouter,} from "next/navigation";
import { useRef } from "react";

export default function SearchBar() {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
   

    function handleSearch() {
        router.push(`/?listings?search=${inputRef.current?.value}`); // pushes the url to search=....
    }

    return (
        <div>
            <input
                ref = {inputRef}
                placeholder="Search destinations... "
            />

            <button 
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
}