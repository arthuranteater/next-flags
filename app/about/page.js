import React from "react";

function About() {
  const userStories = [
    {
      href: "view-all",
      story: "View all countries as cards with summary info",
    },
    {
      href: "click-card",
      story: "Click on a country to go to detailed country page",
    },
    {
      href: "view-details",
      story: "View country details on details page",
    },
    {
      href: "click-border",
      story: "Click on border country to go detailed country page",
    },
    {
      href: "click-back",
      story: "Click back button on details page to go to previous page",
    },
    {
      href: "filter-region",
      story: "Filter countries by region",
    },
    {
      href: "search-input",
      story: "Filter by search input on change",
    },
    {
      href: "view-number",
      story: "View number of results in saerch bar",
    },
    {
      href: "sort-alpha",
      story: "Sort countries alphabetically (A to Z, Z to A)",
    },
    {
      href: "sort-population",
      story: "Sort countries by population (Sm to Lg, Lg to Sm)",
    },
    {
      href: "click-dark",
      story: "Click dark toggle to turn on/off dark mode",
    },
    {
      href: "save-dark",
      story: "When revisiting prev dark mode preference is loaded",
    },
    {
      href: "initial-dark",
      story:
        "When first visiting dark mode preference is loaded from user preferences",
    },
    {
      href: "user-login",
      story: "Click a log-in button, enter credentials and log-in",
    },
    {
      href: "click-star",
      story:
        "While logged-in can click a toggle on country card to add/remove from favorites list",
    },
    {
      href: "view-profile",
      story: "While logged-in can view favorite countries on profile page",
    },
    {
      href: "drag-list",
      story:
        "While logged-in on profile page user can drag starred into been there and wish list",
    },
    {
      href: "User",
      story:
        "While logged-in on profile page user can drag countries to arrange order",
    },
  ];

  return (
    <div className="min-h-screen text-color-txt dark:text-dark-txt bg-color-bg dark:bg-dark-bg pl-10 pr-10 pt-[125px] sm:pt-20 pb-20">
      <h1 className="text-3xl text-center font-bold mb-6 mt-10">
        About the project
      </h1>
      <div id="left col" className="flex flex-col items-center">
        <div className="max-w-[75%] flex flex-col gap-6 items-center">
          <p className="text-xl">
            The goal of this project is to explore Next.js 13 app router and
            best practices. We&apos;ll go over the basic functionality, wins,
            losses, and question marks. Once the app has been built with other
            frontend frameworks, we&apos;ll make some comparisons.
          </p>
          <h2 className="text-lg font-bold">About Flags:</h2>
          <p>
            Flags is an encyclopedia lite for &quot;countries&quot; of sorts
            using the{" "}
            <a
              className="font-bold"
              target="#"
              href="https://restcountries.com/#api-endpoints-v2"
            >
              REST Countries API
            </a>
            . *
          </p>
          <h2 className="font-bold">User Stories:</h2>
          <p>Click on user story to skip to that section</p>
          <p>As a user I can...</p>
          <ul>
            {userStories.map(({ href, story }, i) => (
              <li className="flex gap-2 flex-wrap mb-2" key={story}>
                <p>{`${i + 1})`}</p>
                <a href={`#${href}`}>{story}</a>
              </li>
            ))}
          </ul>
          <p>
            * Countries is in quotes because there is not a single source of
            thruth for countries in the world. For example the United Nations
            recognizes 193, and the CIA World Factbook lists 237. How did the
            REST Countries API get to 250? I don&apos;t know, but investigating
            further is outside the scope of this project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
