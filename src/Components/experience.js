import React, { useEffect, useState } from "react";
import skills from "../Data/skills"

const Experience = () => {
  const [active, setactive] = useState("volunteering");
  
  return (
    <section class="mx-auto mb-80 w-full px-5 lg:w-3/5">
      <div class="flex pt-3 sticky inset-x-0 top-0 left-0 z-10 bg-slate-900 overflow-x-auto custom-scroll">
        <div class="flex-none min-w-full px-4 sm:px-6">
          <ul class="border-b pb-2 border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5 justify-center gap-10 ">
            <li>
              <h2>
                <a
                onClick={()=>setactive("volunteering")}
                  class={(active == "volunteering"?"text-sky-500 border-current ":"text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700")+" flex text-xl leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px cursor-pointer"}
                >
                  Volunteering
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                onClick={()=>setactive("experience")}
                  class={(active == "experience"?"text-sky-500 border-current ":"text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700")+" flex text-xl leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px cursor-pointer"}
                >
                  Experience
                </a>
              </h2>
            </li>
            <li>
              <h2>
                <a
                onClick={()=>setactive("certificates")}
                  class={(active == "certificates"?"text-sky-500 border-current ":"text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700")+" flex text-xl leading-6 font-semibold pt-3 pb-2.5 border-b-2 -mb-px cursor-pointer"}
                >
                  Certificates
                </a>
              </h2>
            </li>
          </ul>
        </div>
      </div>
      <div class="relative sm:pb-12 py-14 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))] bg-slate-900">
        <div class="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>
        <div class="space-y-16">
          {skills.filter((item)=>item.type.includes(active)).map((item) => {
            return (
              <article class="relative group">
                <div class="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"></div>
                <svg
                  viewBox="0 0 9 9"
                  class="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    h-screen
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    class="fill-white dark:fill-slate-900"
                    stroke-width="2"
                  ></circle>
                </svg>
                <div class="relative">
                  <h3 class="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
                    {item.title}
                  </h3>
                  <div class="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2 text-slate-400">
                    <p>
                      {item.content}
                    </p>
                  </div>
                  <dl class="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dt class="sr-only">Date</dt>
                    <dd class="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                      <time datetime="2022-06-23T19:40:00.000Z">
                        {item.date}
                      </time>
                    </dd>
                  </dl>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
