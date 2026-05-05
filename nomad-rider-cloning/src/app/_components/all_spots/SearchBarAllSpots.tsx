"use client";

// can be done using 2 methods: this is using useSearchParams+ useRouter and another is using useState + useRouter

import { useRouter, useSearchParams} from "next/navigation";
import { useRef } from "react";

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const inputRef = useRef<HTMLInputElement>(null);
   

    function handleSearch() {
        router.push(`/?listings?search=${inputRef.current?.value}`); // pushes the url to search=....
    }

    return (
        <div>
            <input
                ref = {inputRef}
                defaultValue={searchParams.get("search") ?? ""}
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