import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="flex items-center gap-2 md:gap-4">
        <Link href="/" title="Back" aria-label="Back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 md:size-5 lg:size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            />
          </svg>
        </Link>{" "}
        404 Not Found
      </h1>
      <hr class="border-surface0 mx-auto my-4 max-w-sm border-t-2 md:my-6 lg:my-8" />
      <p class="text-lg text-subtext2">The page you are looking for does not exist.</p>
   </>
  );
});

export const head: DocumentHead = {
  title: "404 Not Found"
}
