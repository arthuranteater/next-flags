"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import { useState } from "react";

function About() {
  const { data: session } = useSession();
  const { showForm, setShowForm } = useState(false);
  console.log("session.user", session?.user);

  const userStories = [
    {
      href: "view-all",
      story: "View all countries as cards with summary info",
      completed: true,
    },
    {
      href: "click-card",
      story: "Click on a country to go to detailed country page",
      completed: true,
    },
    {
      href: "view-details",
      story: "View country details on details page",
      completed: true,
    },
    {
      href: "click-border",
      story: "Click on border country to go detailed country page",
      completed: true,
    },
    {
      href: "click-back",
      story: "Click back button on details page to go to previous page",
      completed: true,
    },
    {
      href: "filter-region",
      story: "Filter countries by region",
      completed: true,
    },
    {
      href: "search-input",
      story: "Filter by search input on change",
      completed: true,
    },
    {
      href: "view-number",
      story: "View number of results in search bar",
      completed: true,
    },
    {
      href: "sort-alpha",
      story: "Sort countries alphabetically (A to Z, Z to A)",
      completed: true,
    },
    {
      href: "sort-population",
      story: "Sort countries by population (Sm to Lg, Lg to Sm)",
      completed: true,
    },
    {
      href: "click-dark",
      story: "Click dark toggle to turn on/off dark mode",
      completed: true,
    },
    {
      href: "save-dark",
      story: "When revisiting prev dark mode preference is loaded",
      completed: true,
    },
    {
      href: "initial-dark",
      story: "If no prev visit, dark mode is loaded from user preferences",
      completed: true,
    },
    {
      href: "user-login",
      story: "Click a log-in button, enter credentials and log-in",
      completed: false,
    },
    {
      href: "click-star",
      story:
        "Click toggle on country card/details page to add/remove from favorites (Logged-in user only)",
      completed: false,
    },
    {
      href: "view-prompt",
      story:
        "Receive prompt to login upon clicking star icon on card/details page",
      completed: false,
    },
    {
      href: "view-profile",
      story: "View favorites on profile page (Logged-in user only)",
      completed: false,
    },
    {
      href: "drag-list",
      story:
        "Drag favorites into visited and wish list categories on profile page (Logged-in user only)",
      completed: false,
    },
    {
      href: "order-list",
      story: "Drag countries to arrange order in lists (Logged-in user only)",
      completed: false,
    },
  ];

  const devStories = [
    {
      href: "test-unit",
      story: "Run unit tests for all components",
      completed: false,
    },
    {
      href: "automate-testing",
      story: "Run the test automatically on each push",
      completed: false,
    },
    {
      href: "test-end",
      story: "Run automated end-to-end testing",
      completed: false,
    },
    {
      href: "write-typescript",
      story: "Write the entire application using typescript",
      completed: false,
    },
    {
      href: "write-markdown",
      story: "Write descriptive markdown file",
      completed: false,
    },
    {
      href: "convert-markdown",
      story: "Convert markdown to inject html for this page",
      completed: false,
    },
    {
      href: "document-project",
      story: "Document stories and findings",
      completed: false,
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
            {userStories.map(({ href, story, completed }, i) => (
              <li
                className="grid grid-cols-[30px_minmax(0,_500px)_50px] gap-2 mb-2 border-b"
                key={story}
              >
                <span>{`${i + 1})`}</span>
                <a href={`#${href}`}>{story}</a>
                {completed && <FontAwesomeIcon icon={faCheck} />}
              </li>
            ))}
          </ul>
          <h2 className="font-bold">Developer Stories:</h2>
          <p>Click on dev story to skip to that section</p>
          <p>As a dev I can...</p>
          <ul>
            {devStories.map(({ href, story, completed }, i) => (
              <li
                className="grid grid-cols-[30px_minmax(0,_500px)_50px] gap-2 mb-2 border-b"
                key={story}
              >
                <span>{`${i + 1})`}</span>
                <a href={`#${href}`}>{story}</a>
                {completed && <FontAwesomeIcon icon={faCheck} />}
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
          {session?.user ? (
            <button
              onClick={() => showForm(true)}
              className="border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
              Logout
            </button>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider}
                    className="border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3"
                    onClick={() => signIn(provider.id)}
                  >
                    <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                    Login
                  </button>
                ))}
            </>
          )}
          <button
            onClick={() => signIn(provider.id)}
            className="border rounded-lg dark:border-none dark:bg-dark-bg focus:outline-none font-medium text-sm px-4 py-2 text-center mr-3"
          >
            <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
            {session?.user ? "Leave a Comment" : "Login to Comment"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
