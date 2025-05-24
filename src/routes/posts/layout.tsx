import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import styles from "./layout.css?inline";
import { Link, useDocumentHead } from "@builder.io/qwik-city";
import { normalizeFrontmatter } from "~/fetchers/posts";

const formatDate = (date: Date) =>
  `${date.getFullYear().toString().padStart(4, "0")}-${date.getMonth().toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

export default component$(() => {
  useStyles$(styles);

  const head = useDocumentHead();
  const frontmatter = normalizeFrontmatter({
    ...head.frontmatter,
    title: head.title,
  });

  return (
    <div class="prose-invert mx-auto max-w-screen-md px-10 py-20">
      {frontmatter && (
        <>
          <p class="my-4">
            <Link href="/posts">⇠ All articles</Link>
          </p>
          <h1 class="my-8 text-xl font-bold md:text-2xl lg:text-4xl">
            {head.title || frontmatter.title}
          </h1>
          <div class="my-4 flex flex-wrap items-center justify-between gap-4 text-lg">
            <div class="text-overlay2 font-mono">
              On: {formatDate(frontmatter.created)}
              {frontmatter.edited &&
                ` | Edited: ${formatDate(frontmatter.edited)}`}
            </div>
            <div class="text-overlay2 flex items-center gap-2 font-mono text-sm">
              <span class="text-overlay1 font-sans text-xs">Tags:</span>
              {frontmatter.tags.map((i) => (
                <span>{i}</span>
              ))}
            </div>
          </div>
          <hr class="border-surface0 mx-auto my-4 max-w-sm border-2 border-t md:my-6 lg:my-8" />
        </>
      )}
      <main class="content">
        <Slot />
      </main>
      {frontmatter && (
        <>
          <hr class="border-surface0 mx-auto my-4 max-w-sm border-2 border-t md:my-6 lg:my-8" />
          <p class="text-lg md:text-xl">
            Thanks for reading!{" "}
            <span class="text-overlay2">
              If you like my work, please consider supporting me through any of
              the links below:
            </span>
          </p>
          <ul class="my-4 ml-4 list-disc md:ml-8">
            <li>
              <a href="https://github.com/sponsors/arnu515">GitHub Sponsors</a>
            </li>
            <li>
              <a href="https://m.do.co/c/371591aa3027">
                Use my DigitalOcean referral link
              </a>
            </li>
            <li>
              <a href="https://www.prisma.io/?via=arnu515">
                Use my Prisma referral link
              </a>
            </li>
          </ul>
          <p class="text-overlay1 font-mono lg:text-lg">
            Let's chat! <a href="mailto:me@aarnavpai.in">Drop me an email</a>.
          </p>
          <p class="my-4">
            <Link href="/posts">⇠ All articles</Link>
          </p>
        </>
      )}
    </div>
  );
});
