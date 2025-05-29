import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./index.css?inline";
import type { DocumentHead } from "@builder.io/qwik-city";

const Header = () => (
  <header class="mx-auto my-10 flex max-w-screen-lg flex-col items-center justify-between gap-2 px-6 md:flex-row">
    <h1 class="text-2xl font-extrabold md:text-3xl">Aarnav Pai</h1>
    <div class="flex items-center gap-2 text-sm md:flex-col md:items-start md:text-[1rem]">
      <div class="text-overlay2 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5 md:size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        Karnataka, India
      </div>
      <span class="text-overlay1 md:hidden">|</span>
      <div class="text-overlay2 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5 md:size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <a class="text-overlay2 underline" href="mailto:me@aarnavpai.in">
          me@aarnavpai.in
        </a>
      </div>
    </div>
  </header>
);

const Experience = () => (
  <section class="experience">
    <article>
      <h3>
        Presence
        <a
          class="text-overlay2"
          href="https://presence.is"
          aria-label="Link to Presence"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </a>
        <em>Jan 2022 &#8212; Present</em>
      </h3>
      <p class="text-subtext2 my-2 text-right text-lg">
        <em>Software Engineer</em>
      </p>
      <ul class="ml-4 list-disc">
        <li>
          Built the <a href="https://presence.is">main website</a> with Astro
          and Svelte
        </li>
        <li>
          Built <a href="https://stickershub.presence.is">StickersHub</a> with
          SvelteKit.
        </li>
        <li>
          Took on many different roles, from backend to frontend to devops.
        </li>
      </ul>
    </article>
    <article>
      <h3>
        IIIT
        <a
          class="text-overlay2"
          href="https://iiit.ac.in"
          aria-label="Link to IIIT"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </a>
      </h3>
      <ul class="ml-4 list-disc">
        <li>
          Redesigned the student mess system, to make it more automated and
          user-friendly.
        </li>
        <ul style="list-style-type: square" class="ml-4">
          <li>Technologies used: Go, Rust, and React.</li>
          <li>
            Integration with the internal authentication and management system.
          </li>
          <li>Code is open source (currently visible to IIIT students only)</li>
        </ul>
        <li>
          Part of the{" "}
          <a href="https://osdg.iiit.ac.in">Open Source Developers Group</a>.
        </li>
      </ul>
    </article>
    <article>
      <h3>
        Technical Writing
        <a
          class="text-overlay2"
          href="https://dev.to/arnu515"
          aria-label="Link to DEV.to"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 inline"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          <sup>1</sup>
        </a>
        <a
          class="text-overlay2"
          href="https://aarnavpai.in/posts"
          aria-label="Link to my blog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4 inline"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          <sup>2</sup>
        </a>
      </h3>
      <ul class="ml-4 list-disc">
        <li>Writing technical articles for four years.</li>
        <ul style="list-style-type: square" class="ml-4">
          <li>
            Includes tutorials and techniques in a vast array of technologies.
          </li>
          <li>
            Have written paid articles for{" "}
            <a href="https://www.sitepoint.com/create-a-github-tracker-with-push-notifications-in-svelte/">
              Sitepoint
            </a>
            ,{" "}
            <a href="https://blog.railway.com/p/implement-feature-flags-from-scratch">
              Railway
            </a>
            , and DigitalOcean
          </li>
          <li>These articles have garnered thousands of views.</li>
        </ul>
      </ul>
    </article>
  </section>
);

type PersonalProjectProps = {
  title: string;
  description: string;
  link: string;
};

const PersonalProject = component$(({
  title,
  description,
  link,
}: PersonalProjectProps) => (
  <article class="flex flex-col gap-2">
    <h3 class="my-2 flex items-center gap-3 text-lg font-bold">
      {title}{" "}
      <a class="text-overlay2" href={link} aria-label={`Link to ${title}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      </a>{" "}
    </h3>
    <p class="text-subtext1 mb-2"><em>{description}</em></p>
    <Slot />
  </article>
));

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <Header />
      <main>
        <div class="flex flex-col-reverse gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
          <div class="lg:col-span-2">
            <p>
              I'm a Software Engineer with six years of experience. I excel in
              Web Development, Cloud, Dev-ops, and I'm learning native app
              development (both mobile and desktop), and systems programming.
            </p>
            <p>
              I'm pursuing my Computer Science Bachelor's degree, along with a
              Master of Science in Humanities & Computing from{" "}
              <a href="https://iiit.ac.in">IIIT Hyderabad</a>.
            </p>
          </div>
          <div class="flex md:justify-end">
            <ul class="flex flex-col items-start">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:me@aarnavpai.in">aarnavpai.in</a>
              </li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/arnu515">arnu515</a>
              </li>
              <li>
                <strong>GitLab:</strong>{" "}
                <a href="https://gitlab.com/arnu515">arnu515</a>
              </li>
              <li>
                <strong>DEV.to:</strong>{" "}
                <a href="https://dev.to/arnu515">arnu515</a>
              </li>
              <li>
                <strong>YouTube:</strong>{" "}
                <a href="https://youtube.com/@arnu515">@arnu515</a>
              </li>
              <li>
                <a href="https://fosstodon.org/@arnu515">
                  @fosstodon.org@arnu515
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h2>Experience</h2>
        <Experience />
        <h2>Personal Projects</h2>
        <p class="text-subtext1 text-lg">
          <em>
            Some selected personal projects follow. A complete list is available
            on <a href="https://github.com/arnu515">GitHub</a>.
          </em>
        </p>
        <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <PersonalProject
            title="End-to-end Encrypted Chat (Dec 2021)"
            description="An end-to-end encrypted chatting application with Supabase."
            link="https://github.com/arnu515/supabase-e2ee-chat"
          >
            <ul class="list-disc ml-4">
              <li>
                Built for Supabase's Holiday Hackdays hackathon. Won runner-up
                in the "Best Realtime" category.
              </li>
              <li>
                Uses React, Tailwind, and Formik in the frontend, and supabase
                in the backend.
              </li>
              <li>35 stars on GitHub</li>
            </ul>
          </PersonalProject>
          <PersonalProject
            title="SpeakCaptcha (Oct 2022)"
            description="A captcha that makes you speak out the answer."
            link="https://github.com/arnu515/speakcaptcha"
          >
            <ul class="list-disc ml-4">
              <li>
                An audio captcha using speech-to-text.
              </li>
              <li>
                Built with FastAPI, MongoDB, and Svelte.
              </li>
            </ul>
          </PersonalProject>
          <PersonalProject
            title="ChatCrafters (Apr 2024)"
            description="AI chat application"
            link="https://github.com/arnu515/chatcrafters"
          >
            <ul class="list-disc ml-4">
              <li>
                An AI chat application that lets you create AI personas and talk to them.
              </li>
              <li>
                Uses models hosted on Cloudflare Workers AI. Uses an image generation model, a speech-to-text model, and text generation models.
              </li>
              <li>Built using SvelteKit and Cloudflare D1 (SQLite).</li>
            </ul>
          </PersonalProject>
          <PersonalProject
            title="Crazy Candy Chaos (Oct 2024)"
            description="Game created with Raylib and C"
            link="https://github.com/arnu515/megathon"
          >
            <ul class="list-disc ml-4">
              <li>
                A project created for the <a href="https://megathon.in">Megathon</a>.
              </li>
              <li>
                Won first place in its category.
              </li>
            </ul>
          </PersonalProject>
          <PersonalProject
            title="I Wanna Do (Jan 2025)"
            description="AI powered habit-tracker"
            link="https://github.com/arnu515/i-wanna-do"
          >
            <ul class="list-disc ml-4">
              <li>
                Built for the GitHub Copilot 1-Day challenge.
              </li>
              <li>
                Uses SvelteKit and X Ai.
              </li>
            </ul>
          </PersonalProject>
          <PersonalProject
            title="erlang-etf.js (Mar 2025)"
            description="JavaScript library to convert erlang ETF encoded binaries into equivalent javascript objects."
            link="https://github.com/arnu515/erlang-etf.js"
          />
          <PersonalProject
            title="gleamail (May 2025)"
            description="Gleam SMTP library."
            link="https://github.com/arnu515/gleamail"
          />
        </div>
        <h2>Skills</h2>
          <section class="languages">
            <h3>Languages (in no order)</h3>
            <ul>
              <li>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Rust</title><path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z"/></svg>
                <a href="https://rust-lang.org">Rust</a>
              </li>
              <li>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Go</title><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"/></svg>
                <a href="https://go.dev">Go</a>
              </li>
              <li>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Zig</title><path d="m23.53 1.02-7.686 3.45h-7.06l-2.98 3.452h7.173L.47 22.98l7.681-3.607h7.065v-.002l2.978-3.45-7.148-.001 12.482-14.9zM0 4.47v14.901h1.883l2.98-3.45H3.451v-8h.942l2.824-3.45H0zm22.117 0-2.98 3.608h1.412v7.844h-.942l-2.98 3.45H24V4.47h-1.883z"/></svg>
                <a href="https://ziglang.org">Zig</a>
              </li>
              <li>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C</title><path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9371-7.8762 2.9201-2.19-.017-5.2261.034-8.1602-2.97-2.938-3.0101-3.436-5.9302-3.436-8.8002 0-2.8701.556-6.6702 4.047-9.5502C7.444.72 9.849 0 12.254 0c10.0422 0 10.7172 9.2602 10.7172 9.2602z"/></svg>
                <a href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a>
              </li>
              <li>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Kotlin</title><path d="M24 24H0V0h24L12 12Z"/></svg>
                <a href="https://kotlinlang.org">Kotlin</a>
              </li>
              <li>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dart</title><path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z"/></svg>
                <a href="https://dart.dev">Dart</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coffee-icon lucide-coffee"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/></svg>
                <a href="https://java.com">Java</a>
              </li>
              <li>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Erlang</title><path d="M8.859 7.889c.154-1.863 1.623-3.115 3.344-3.119 1.734.004 2.986 1.256 3.029 3.119zm12.11 11.707c.802-.86 1.52-1.872 2.172-3.03l-3.616-1.807c-1.27 2.064-3.127 3.965-5.694 3.977-3.738-.012-5.206-3.208-5.198-7.322h13.966c.019-.464.019-.68 0-.904.091-2.447-.558-4.504-1.737-6.106l-.007.005H24v15.186h-3.039zm-17.206-.001C1.901 17.62.811 14.894.813 11.64c-.002-2.877.902-5.35 2.456-7.232H0v15.187h3.761Z"/></svg>
                <a href="https://erlang.org">Erlang</a>
              </li>
              <li>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gleam</title><path d="M10.6144.0026a1.9 1.9 0 0 0-.229.0261l.0001.0002C9.78.1358 9.2263.538 8.9971 1.1873l-1.7855 5.059A1.8 1.8 0 0 1 6.1704 7.323L1.1706 9.282c-1.283.5027-1.531 2.2673-.4373 3.1027l4.2646 3.257a1.795 1.795 0 0 1 .7031 1.3212l.3179 5.3537c.0815 1.3735 1.6836 2.1548 2.819 1.3729v-.0002l4.4212-3.0459v-.0001a1.8 1.8 0 0 1 1.4757-.2601l5.1962 1.3498c1.3342.3467 2.5725-.9356 2.1794-2.2543v.0002l-1.532-5.1397a1.796 1.796 0 0 1 .209-1.482v-.0002l2.8934-4.5194c.742-1.1591-.0945-2.7324-1.472-2.766l-5.368-.1303a1.8 1.8 0 0 1-1.3467-.6558L12.0862.6422c-.3827-.4654-.9342-.6678-1.4718-.6396m5.7066 10.4086c.4626-.0106.8762.3176.959.7872a.953.953 0 0 1-.773 1.1038.9528.9528 0 1 1-.186-1.891M8.6439 11.765a.953.953 0 0 1 .959.7873c.0913.5182-.2548 1.0123-.773 1.1038s-1.0125-.2547-1.1038-.7729c-.0914-.5182.2547-1.0124.773-1.1038a.96.96 0 0 1 .1448-.0144m4.928 1.3841a.486.486 0 0 1 .3397.15.485.485 0 0 1 .1339.3463 1.264 1.264 0 0 1-.3917.8853v.0001h-.0002a1.266 1.266 0 0 1-.9026.3488h-.0004a1.26 1.26 0 0 1-.4812-.1079 1.26 1.26 0 0 1-.4038-.284 1.27 1.27 0 0 1-.2642-.4168.485.485 0 0 1 .278-.6272.483.483 0 0 1 .371.009.485.485 0 0 1 .2561.2687.29.29 0 0 0 .0615.097v.0002a.3.3 0 0 0 .0938.0658v.0001h.0003a.295.295 0 0 0 .2252.0055l.0003-.0001a.292.292 0 0 0 .1628-.1553l.0002-.0002v-.0001a.29.29 0 0 0 .025-.1116.486.486 0 0 1 .15-.3395.485.485 0 0 1 .3463-.134z"/></svg>
                <a href="https://gleam.run">Gleam</a>
              </li>
              <li>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>
              </li>
              <li>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TypeScript</title><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
                <a href="https://typescriptlang.org">TypeScript</a>
              </li>
              <li>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>
                <a href="https://python.org">Python</a>
              </li>
            </ul>
          </section>
        <section class="skills">
          <article>
            <h3>Frontend Development</h3>
            <ul>
              <li>React</li>
              <li>Svelte</li>
              <li>Qwik</li>
              <li>Astro</li>
              <li>TailwindCSS</li>
              <li>NextJS</li>
              <li>SvelteKit</li>
            </ul>
          </article>
          <article>
            <h3>Backend Development</h3>
            <ul>
              <li>NodeJS/Deno/Bun &#8212; Express, Hono, Elysia, Fastify, NestJS</li>
              <li>Python &#8212; FastAPI, Flask, Sanic, Robin</li>
              <li>Golang &#8212; gorilla/mux, gin, chi, net/http, echo</li>
              <li>Rust &#8212; Axum, Salvo</li>
              <li>Kotlin &#8212; Ktor</li>
              <li>Databases &#8212; Postgres, MySQL, SQLite, libSQL, MongoDB, Surreal, EdgeDB, TiKV, Firestore, CouchDB, Redis, S3</li>
            </ul>
          </article>
          <article>
            <h3>Other tools</h3>
            <ul>
              <li>Containers &#8212; Docker, Kubernetes, docker-compose, earthly</li>
              <li><a href="https://nixos.org">Nix and NixOS</a></li>
              <li>Cloud Providers &#8212; AWS, GCP, Azure, DigitalOcean, Linode, Hetzner</li>
              <li>Hosting &#8212; Cloudflare, Vercel, Netlify, Railway</li>
              <li>BaaS &#8212; Firebase, Supabase</li>
              <li>and much more, scattered throughout my GitHub repos</li>
            </ul>
          </article>
        </section>
      </main>
      <footer class="my-8">
        <p class="text-center font-mono text-lg text-subtext2">Contact me: <a href="mailto:me@aarnavpai.in">me@aarnavpai.in</a></p>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "My Resumé — Aarnav Pai",
  meta: [
    {
      name: "description",
      content: "I'm a Software Engineer with six years of experience. I excel in Web Development, Cloud, Dev-ops, and I'm learning native app development (both mobile and desktop), and systems programming."
    }
  ]
}
