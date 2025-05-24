import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { getPosts } from "~/fetchers/posts";

export { getPosts };

export default component$(() => {
  const posts = getPosts();

  return (
    <>
      <h1>My Posts</h1>
      <hr class="border-surface0 mx-auto my-4 max-w-sm border-2 border-t md:my-6 lg:my-8" />

      <dl class="mt-4 ml-4">
        {posts.value.map((post) => (
          <>
            <dt class="pt-4 text-xl">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              <span class="text-overlay1 mx-2 font-mono text-sm">
                {post.created.getFullYear()}-{post.created.getMonth()}-
                {post.created.getDate()}
                {post.edited && "*"}
              </span>
              {post.suggested && (
                <svg
                  aria-label="Suggested"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="text-peach/70 mb-1 ml-2 inline-block size-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </dt>
            <dd class="text-overlay2 ml-2">{post.summary}</dd>
          </>
        ))}
      </dl>
    </>
  );
});
