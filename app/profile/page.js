"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoePrints,
  faPlane,
  faPen,
  faStar,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import PuffLoader from "react-spinners/PuffLoader";

function Profile() {
  const { data: session } = useSession({ required: true });
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {session?.user ? (
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            My Profile
          </h5>
          <img
            class="w-10 h-10 rounded-full"
            src={session?.user?.image}
            alt="Rounded avatar"
          ></img>
          {/* <div class="flex items-baseline text-gray-900 dark:text-white">
        <span class="text-3xl font-semibold">$</span>
        <span class="text-5xl font-extrabold tracking-tight">49</span>
        <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /month
        </span>
      </div> */}
          <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
              <FontAwesomeIcon icon={faUserAstronaut} />
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Username: {session?.user?.name || "not logged in"}
              </span>
            </li>
            <li class="flex">
              <FontAwesomeIcon icon={faPen} />
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Stories Commented: 0
              </span>
            </li>
            <li class="flex">
              <FontAwesomeIcon icon={faStar} />
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Stories Bookmarked: 0
              </span>
            </li>
            <li class="flex">
              <FontAwesomeIcon icon={faShoePrints} />
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Countries Visited: 0
              </span>
            </li>
            <li class="flex">
              <FontAwesomeIcon icon={faPlane} />
              <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                Countries to Visit: 0
              </span>
            </li>
          </ul>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Delete Account
          </button>
        </div>
      ) : (
        <>
          <h2>Loading</h2>
          <PuffLoader aria-label="Loading Spinner" />
        </>
      )}
    </div>
  );
}

export default Profile;
