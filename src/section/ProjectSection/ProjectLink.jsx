import React from "react";
import "./ProjectLink.css";

export default function ProjectLink() {
  return (
    <>
      <div className="relative py-10 max-sm:my-10">
        <div className="hero-banner relative">
          <h1 className="hero-banner__title">View Projects</h1>
          <img
            className="hero-banner__image max-sm:rotate-90"
            src="https://images.unsplash.com/photo-1554620121-59e7f3f6e3a4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=800&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Hero Banner"
          />
          <h1 className="hero-banner__title hero-banner__stroked-title">
            View Projects
          </h1>
        </div>
      </div>
    </>
  );
}
