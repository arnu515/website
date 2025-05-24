import {
  component$,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";
import { getSuggestedPosts } from "~/fetchers/posts";

export { getSuggestedPosts };

export default component$(() => {
  useStylesScoped$(styles);

  const posts = getSuggestedPosts();
  const email = useSignal("");

  // display email once the website loads
  useVisibleTask$(() => {
    email.value = atob("bWVAYWFybmF2cGFpLmlu");
  });

  return (
    <main class="mx-auto max-w-screen-md px-10 py-20">
      <h1 class="flex items-center gap-4 text-xl font-bold md:text-2xl lg:text-3xl">
        <div class="waving-hand">👋</div> Hi! I'm Aarnav Pai.
      </h1>
      <p class="my-8 font-mono md:text-lg">
        I am a web developer who has recently been dipping into systems
        development! I write articles and tutorials that you'll find on{" "}
        <Link href="/posts">this website</Link> and on{" "}
        <a href="https://dev.to/arnu515">DEV.to</a>. I'm currently studying
        Computer Science at <a href="https://iiit.ac.in">IIIT Hyderabad</a>.
      </p>
      <p class="my-8 font-mono md:text-lg">
        <Link href="/resume">View my resum&eacute;</Link>
      </p>
      <h2 class="border-text my-4 mt-8 w-max border-b pb-2 text-lg font-bold lg:text-xl">
        Here's how we can connect:
      </h2>
      <ul class="l">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          Email me:{" "}
          {email.value ? (
            <a href={`mailto:${email.value}`}>{email.value}</a>
          ) : (
            <span class="bg-surface0 inline-block h-3 w-36 animate-pulse rounded-lg border border-transparent" />
          )}
        </li>
        <li>
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          GitHub: <a href="https://github.com/arnu515">arnu515</a>
        </li>
        <li>
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>dev.to</title>
            <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
          </svg>
          DEV.to: <a href="https://dev.to/arnu515">arnu515</a>
        </li>
      </ul>
      <h2 class="border-text my-4 mt-8 w-max border-b pb-2 text-lg font-bold lg:text-xl">
        Other accounts I have:
      </h2>
      <ul class="l">
        <li>
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitLab</title>
            <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" />
          </svg>
          GitLab: <a href="https://gitlab.com/arnu515">arnu515</a>
        </li>
        <li>
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>YouTube</title>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          YouTube: <a href="https://youtube.com/@arnu515">@arnu515</a>
        </li>
        <li>
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mastodon</title>
            <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z" />
          </svg>
          Mastodon:{" "}
          <a href="https://fostodon.org/arnu515">@arnu515@fostodon.org</a>
        </li>
      </ul>
      <hr class="border-surface0 mx-auto my-8 max-w-sm border-2 border-t md:my-12 lg:my-16" />

      <div class="flex items-center justify-between gap-4">
        <h2 class="text-2xl font-bold md:text-3xl lg:text-4xl">
          Selected Posts
        </h2>
        <Link
          href="/posts"
          class="bg-surface1 text-text hover:text-text hover:bg-surface0 border-overlay0 rounded border px-2 py-1 transition-colors duration-200 hover:no-underline"
        >
          View All
        </Link>
      </div>
      <dl class="mt-8 ml-4 list-disc md:ml-8">
        {posts.value.map((post) => (
          <>
            <dt class="pt-4 text-xl">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              <span class="text-overlay1 mx-2 font-mono text-sm">
                {post.created.getFullYear()}-{post.created.getMonth()}-
                {post.created.getDate()}
                {post.edited && "*"}
              </span>
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
            </dt>
            <dd class="text-overlay2 ml-2">{post.summary}</dd>
          </>
        ))}
      </dl>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Aarnav Pai's Homepage",
  meta: [
    {
      name: "description",
      content: "I'm a programmer who writes articles about web and software!",
    },
  ],
};
