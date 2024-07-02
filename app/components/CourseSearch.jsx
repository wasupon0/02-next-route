"use client";

import { useState } from "react";

export default function CourseSearch({ getSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    console.log(courses);
    getSearchResults(courses);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="Search for a course"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}
