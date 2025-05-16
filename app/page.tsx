import StateManagementDemo from "@/components/StateManagementDemoLoader";

export default function Home() {
  return (
    <main className="prose dark:prose-invert prose-lg mx-auto max-w-[80ch] py-16 px-4">
      <h1>
        JUST FUCKING USE REACT <br />
        <small className="text-xs font-bold font-sans">
          (OR ANY FRAMEWORK, YOU GODDAMN LUDDITE)
        </small>
      </h1>

      <ul className="sr-only">
        <li>
          <a href="#start">Content</a>
        </li>
        <li>
          <a href="#wtf">What the fuck is this about?</a>
        </li>
        <li>
          <a href="#why">
            Why the fuck would I ditch my &quot;pure HTML&quot; Nirvana for this
            JavaScript sorcery?
          </a>

          <ul>
            <li>
              <a href="#components">
                Components, motherfucker! Do you speak it?
              </a>
            </li>
            <li>
              <a href="#ui">
                Smarter UI updates, so you don&apos;t have to be a fucking
                DOM-manipulating peasant.
              </a>
            </li>
            <li>
              <a href="#accessibility">
                Accessibility at scale? Good luck with your &quot;semantic&quot;
                div soup and prayers, asshole.
              </a>
            </li>
            <li>
              <a href="#developer-experience">
                Developer experience (DX) actually fucking matters, unless you
                enjoy pain.
              </a>
            </li>
            <li>
              <a href="#performance">
                Performance is just about initial load like some primitive page
                speed fetishist, it&apos;s about perceived performance and
                interaction, you short-sighted goon.
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#bloat">
            But what about the fucking bloat? The JavaScript overload? My users
            are on dial-up in Antarctica!
          </a>
        </li>
        <li>
          <a href="#when">
            When should I just fucking use React (or a similar framework), you
            slow learner?
          </a>
        </li>
        <li>
          <a href="#problem">
            The real fucking problem isn&apos;t React. It&apos;s you, you
            misguided fool.
          </a>
        </li>
        <li>
          <a href="#footer">Footer</a>
        </li>
      </ul>

      <p id="start">
        Look, I get it. You saw that other site. &quot;HTML is king&quot;,
        &quot;Keep it simple, stupid&quot;,{" "}
        <span className="geocities">
          &quot;My GeoCities page from &apos;98 still loads faster than your
          SPA.&quot;
        </span>
        . Fucking adorable. Like a toddler proudly showing off a mud pie.
      </p>
      <p>
        It&apos;s a nice sentiment, like wishing we could all go back to
        bartering with seashells instead of dealing with the goddamn stock
        market. But the web isn&apos;t just a collection of fucking pamphlets
        anymore, you fossil. It&apos;s where work gets done, where communities
        are built, where complex interactions happen. You know, shit that
        actually <em>does</em> something beyond displaying your &quot;Fucking
        beautiful button.&quot;
      </p>
      <h2 id="wtf">SO, WHAT THE FUCK IS THIS ABOUT?</h2>
      <p>
        This is about acknowledging that{" "}
        <mark>
          sometimes, complexity is not a choice, it&apos;s a fucking
          requirement.
        </mark>{" "}
        And when that complexity hits, trying to wrangle it with{" "}
        <code>document.getElementById</code> and a prayer is like trying to
        build a goddamn space shuttle with fucking popsicle sticks and glue. You
        might get something that looks vaguely shuttle-shaped, but it&apos;ll be
        a wobbly, unmaintainable, terrifying piece of shit that explodes on the
        launchpad.
      </p>
      <p>
        This is a call to embrace the tools built by smart motherfuckers to
        solve the hard problems so you can focus on building your cool shit, not
        reinventing the goddamn wheel for the 87th time this sprint, you
        stubborn jackass.
      </p>
      <h2 id="why">
        WHY THE FUCK WOULD I DITCH MY &quot;PURE HTML&quot; NIRVANA FOR THIS
        JAVASCRIPT SORCERY?
      </h2>
      <p>
        Because you&apos;re not just displaying static text from a fucking stone
        tablet, are you? You want to build something interactive, something
        dynamic, something that doesn&apos;t make your users want to gouge their
        eyes out with a rusty spoon. You want to build an <em>application</em>,
        not a fucking flyer.
      </p>
      <p>
        Here&apos;s why you should just fucking use React (or Vue, or Svelte, or
        Angular if you&apos;re a masochist - the point is a modern framework,
        you troglodyte):
      </p>

      <h3>
        HTML&apos;S &quot;INTERACTIVITY&quot; IS FOR FUCKING GUESTBOOKS AND
        CIRCUS SIDESHOWS, NOT ACTUAL APPLICATIONS, YOU DELUSIONAL TWIT.
      </h3>
      <p>
        &quot;But HTML has <code>&lt;details&gt;</code> and{" "}
        <code>&lt;dialog&gt;</code> and forms!&quot; Yeah, and your toddler has
        crayons. Adorable, but not exactly the tools for designing a fucking
        skyscraper, are they?
      </p>
      <p>
        You think you&apos;re gonna build a real-time collaborative editor, a
        dynamic trading dashboard, or an enterprise-grade project management
        tool with those HTML &quot;interactive&quot; elements and a sprinkle of{" "}
        <code>onClick</code>? You&apos;re dreaming, you magnificent simpleton.
        That shit is for when you need a button to say &quot;boo!&quot; not for
        orchestrating complex user workflows.
      </p>
      <p>
        HTML gives you a fucking pebble; frameworks give you a goddamn quarry
        and the heavy machinery to build a fortress. What are you gonna build
        with your pebble, huh? A really impressive fucking paperweight?
      </p>
      <h3 id="state-management">STATE MANAGEMENT, YOU CLUELESS APE!</h3>
      <p>
        Oh, you think managing a &quot;like&quot; button&apos;s state by
        toggling a class is peak complexity? Cute. Try building a dashboard with
        a dozen filters, real-time updates from ten different sources, user
        preferences that change everything, and collaborative editing where five
        assholes are mashing keys at once. Your &quot;simple&quot; JavaScript
        will turn into a spaghetti monster that&apos;ll make Cthulhu look like a
        fucking Teletubby having a tea party. Frameworks give you sane ways to
        manage this chaos. Without them, you&apos;re just pissing in the wind,
        hoping a global variable doesn&apos;t fuck you sideways.
      </p>
      <StateManagementDemo />
      <h3 id="components">COMPONENTS, MOTHERFUCKER! DO YOU SPEAK IT?</h3>
      <p>
        Remember when you copied and pasted that same navigation bar HTML into
        30 different pages, then had to update it in 30 different places because
        the client wanted a new fucking link? Yeah, fucking brilliant. You
        probably felt like a goddamn genius.
      </p>
      <p>
        Frameworks like React force you to think in terms of reusable,
        encapsulated components. Build a button once, style it once, add its
        logic once, and then reuse that beautiful bastard everywhere. Change it
        in one place, and it updates everywhere. This isn&apos;t just
        convenience; it&apos;s fucking sanity at scale, you repetitive dolt.
      </p>
      <h3 id="ui">
        SMARTER UI UPDATES, SO YOU DON&apos;T HAVE TO BE A FUCKING
        DOM-MANIPULATING PEASANT.
      </h3>
      <p>
        Remember trying to manually update a dozen different parts of your page
        whenever one piece of data changed? You&apos;d be there, meticulously
        telling each <code>&lt;span&gt;</code> and <code>&lt;div&gt;</code> to
        refresh, praying you didn&apos;t miss one or cause the whole goddamn
        page to flicker like a haunted TV possessed by a meth addict.
      </p>
      <p>
        Frameworks are built to be clever about this shit. You tell them what
        your UI <em>should</em> look like based on your data. When the data
        changes, the framework does the heavy lifting. It&apos;s like having a
        super-smart assistant who only redraws the bits that actually need
        redrawing, instead of repainting the whole damn house every time you
        move a fucking chair. Are you really going to sit there and imperatively
        poke at the DOM like some kind of digital caveman?
      </p>
      <h3 id="accessibility">
        ACCESSIBILITY AT SCALE? GOOD LUCK WITH YOUR &quot;SEMANTIC&quot; DIV
        SOUP AND PRAYERS, ASSHOLE.
      </h3>
      <p>
        &quot;Just use semantic HTML!&quot; they shriek, like they&apos;ve
        discovered the goddamn Rosetta Stone. Fucking groundbreaking.
        That&apos;s Web Dev 101, you patronizing prick.
      </p>
      <p>
        But what happens when your &quot;simple&quot; HTML tags aren&apos;t
        enough for the complex, custom UI your application{" "}
        <em>actually needs</em>? Think custom data grids that sort and filter,
        accessible comboboxes that don&apos;t suck, or tree views that a screen
        reader can actually navigate. You think slapping{" "}
        <code>role=&quot;button&quot;</code> on a <code>&lt;div&gt;</code> and
        calling it a day makes your app accessible? Get the fuck out.
      </p>
      <p>
        Real accessibility for complex widgets means meticulous ARIA attributes,
        robust focus management, and proper keyboard navigation. With your
        &quot;just HTML and vanilla JS&quot; approach, you&apos;re hand-cranking
        that for <em>every single instance</em>, praying you don&apos;t fuck it
        up and make some poor bastard&apos;s life hell.
      </p>
      <p>
        Frameworks let you build an <em>accessible component</em> once, nail all
        that shit, and then reuse it, ensuring consistency. Or are you gonna
        tell me you <em>enjoy</em> manually managing <code>aria-expanded</code>{" "}
        on 50 different accordions, you goddamn masochist? &quot;Just HTML&quot;
        for complex apps often becomes{" "}
        <mark>
          &quot;just fucking inaccessible for anyone who isn&apos;t you.&quot;
        </mark>
      </p>
      <h3 id="developer-experience">
        THAT &quot;SIMPLE&quot; HTML FAÇADE HIDES A SWAMP OF MANUAL JS BULLSHIT
        YOU&apos;RE TOO STUBBORN TO ADMIT EXISTS, YOU FUCKING OSTRICH.
      </h3>
      <p>
        &quot;No hydration errors! No tree-shaking!&quot; they boast, like these
        are plagues sent by Satan himself rather than sophisticated solutions to
        complex problems that <em>you will face</em> if you build anything more
        advanced than a fucking &quot;Under Construction&quot; GIF.
      </p>
      <p>
        Avoiding framework solutions doesn&apos;t make the problems disappear,
        dipshit; it just means <em>you</em> are now manually wrestling with DOM
        diffing, state propagation, code splitting, and performance
        optimizations, probably with the grace of a drunken donkey.
      </p>
      <p>
        You&apos;re not choosing &quot;simplicity&quot;; you&apos;re choosing to
        reinvent countless wheels, badly, and call it &quot;artisanal
        purity.&quot; It&apos;s like bragging your car has no engine while
        you&apos;re pushing it uphill, in a fucking blizzard, with your bare
        feet, screaming &quot;THIS IS FINE!&quot;
      </p>
      <h3 id="global-js-vars">
        RELYING ON HTML&apos;S AUTO-GLOBAL JS VARS? THAT&apos;S AMATEUR HOUR
        SHIT FROM THE JURASSIC PERIOD OF THE WEB, YOU FUCKING HACK.
      </h3>
      <p>
        So HTML magically creates a JavaScript variable for any element with an{" "}
        <code>id</code>? Wow, what a &quot;feature&quot; - from 1998, when your
        modem sounded like a dying robot. Relying on that is like building your
        house on a foundation of wet toilet paper and hoping for the best.
      </p>
      <p>
        It pollutes the global namespace, creates impossible-to-debug naming
        collisions, and is a one-way ticket to a fragile, unmaintainable
        codebase that will make your future self (and anyone else who has to
        touch it) curse your very existence.
      </p>
      <p>
        Frameworks drag you, kicking and screaming if necessary, towards sanity:
        scoped components, explicit props, and actual state management solutions
        that don&apos;t rely on praying <code>window.myFuckingButton</code>{" "}
        doesn&apos;t get clobbered by some other piece of shit code. That&apos;s
        not HTML &quot;lending crutches&quot;; it&apos;s HTML setting fucking
        landmines in your code, you clueless buffoon.
      </p>
      <h3 id="developer-experience">
        DEVELOPER EXPERIENCE ACTUALLY FUCKING MATTERS, UNLESS YOU ENJOY PAIN.
      </h3>
      <p>
        Hot Module Replacement? See your changes instantly without losing state.
        Typed JavaScript with TypeScript? Catch errors before they hit
        production and make you look like an idiot. A massive ecosystem of
        libraries for everything from internationalization to animation?
        Linters, formatters, debuggers that actually work instead of making you
        want to punch your monitor?
      </p>
      <p>
        Frameworks, especially React, bring an entire ecosystem that makes your
        life as a developer less miserable. This means you can build better
        shit, faster.
      </p>
      <p>
        Stop pretending that wrestling with browser quirks and{" "}
        <code>document.write</code> in vanilla JS is some noble,
        character-building pursuit. It&apos;s just fucking stupid.
      </p>
      <h3 id="performance">
        PERFORMANCE ISN&apos;T JUST ABOUT INITIAL LOAD LIKE SOME PRIMITIVE PAGE
        SPEED FETISHIST, IT&apos;S ABOUT PERCEIVED PERFORMANCE AND INTERACTION,
        YOU SHORT-SIGHTED GOON.
      </h3>
      <p>
        &quot;My HTML site loads in 50ms!&quot; Cool. Now add user login,
        dynamic content, filtering, sorting, and real-time updates without the
        page shitting itself.
      </p>
      <p>
        Frameworks, especially when paired with their extended ecosystems (think
        Next.js or Remix for React), give you tools like code-splitting (only
        load the JS you need for this page, not the whole goddamn phonebook),
        server-side rendering (SSR) or static site generation (SSG) for fast
        initial loads <em>and</em> dynamic capabilities, and client-side
        navigation that feels instantaneous. You can build a lightning-fast{" "}
        <em>application</em>, not just a fast document that does fuck-all.
      </p>
      <h2 id="bloat">
        BUT WHAT ABOUT THE FUCKING BLOAT? THE JAVASCRIPT OVERLOAD? MY USERS ARE
        ON DIAL-UP IN ANTARCTICA!
      </h2>
      <p>
        Yes, a &quot;Hello World&quot; in a framework is bigger than a
        &quot;Hello World&quot; in HTML. <strong>No shit, Sherlock.</strong> Are
        you building a fucking &quot;Hello World&quot; app for production? If
        you&apos;re building a five-page static brochure site for your
        aunt&apos;s dog-walking business that hasn&apos;t had a customer since
        2003, then yes, for the love of God, just fucking use HTML and some CSS.
        That other site is right about that. You don&apos;t need a fucking
        bazooka to swat a fly.
      </p>
      <p>But if you&apos;re building:</p>
      <ul>
        <li>A SaaS platform</li>
        <li>An e-commerce site with a complex cart and user accounts</li>
        <li>A social media feed</li>
        <li>A project management tool</li>
        <li>A data visualization dashboard</li>
        <li>
          Anything with significant client-side interactivity and state that
          needs to, you know, <em>work</em>
        </li>
      </ul>
      <p>
        ...then the &quot;bloat&quot; of a framework is the cost of doing
        complex business, you cheap bastard. And modern tools (tree-shaking,
        code-splitting, lazy loading) help you mitigate that cost significantly.
        It&apos;s about choosing the right fucking tool for the right fucking
        job, not stubbornly using a screwdriver when you need a goddamn
        sledgehammer.
      </p>
      <h2 id="when">
        SO, WHEN SHOULD I JUST FUCKING USE REACT (OR A SIMILAR FRAMEWORK), YOU
        SLOW LEARNER?
      </h2>
      <ul>
        <li>
          When your application has{" "}
          <strong>non-trivial client-side state</strong> that needs to be
          managed.
        </li>
        <li>
          When you need <strong>reusable UI components</strong> to build a
          consistent and maintainable interface.
        </li>
        <li>
          When you&apos;re building a <strong>Single Page Application</strong>{" "}
          or something that <em>feels</em> like an application rather than a
          document.
        </li>
        <li>
          When you&apos;re working in a <strong>team</strong> and need a shared
          structure and patterns.
        </li>
        <li>
          When the <strong>complexity of the interactions</strong> would lead to
          unmanageable spaghetti code in vanilla JS.
        </li>
        <li>
          When you want to leverage a <strong>rich ecosystem</strong> of
          battle-tested libraries and tools.
        </li>
        <li>
          When <strong>developer velocity</strong> for complex features is more
          critical than shaving off every last kilobyte for a mostly static
          page.
        </li>
      </ul>
      <h2 id="problem">
        THE REAL FUCKING PROBLEM ISN&apos;T REACT. IT&apos;S YOU, YOU MISGUIDED
        FOOL.
      </h2>
      <p>
        It&apos;s developers using a goddamn nuclear bomb to crack a nut.
        It&apos;s cargo-culting the latest tech without understanding why.
        It&apos;s trying to build a simple fucking contact form with
        microservices, Kubernetes, and a team of twenty, when a mailto link
        would have done the job.{" "}
        <strong>
          It&apos;s like using a fucking military-grade flamethrower to light
          your grandma&apos;s birthday candles - utter goddamn overkill, you
          clueless fuck.
        </strong>
      </p>
      <p>
        But don&apos;t throw the fucking baby out with the bathwater just
        because some idiots don&apos;t know how to use a power tool without
        cutting their own dicks off. React and its ilk are powerful tools that
        solve real, complex problems. The problem isn&apos;t the tool; it&apos;s
        the idiot wielding it inappropriately.
      </p>
      <p>
        So, for your next complex, interactive, data-driven web application...
        for the love of all that is holy, <mark>JUST FUCKING USE REACT.</mark>{" "}
        Stop pretending like you&apos;re too pure for it, or that your
        &quot;artisanal&quot; vanilla JS is anything other than a cry for help.
        Your users (and your future self trying to maintain your
        &quot;hand-crafted&quot; nightmare) will thank you.
      </p>
      <p>
        Now get back to work, and build something fucking amazing, not just
        another HTML monument to your own stubbornness.
      </p>
      <h2 id="footer" className="sr-only">
        FOOTER
      </h2>
      <p>
        <strong>Created by:</strong>
        <br />
        <span>
          Omercan (
          <a
            href="https://github.com/obsfx"
            target="_blank"
            rel="noopener noreferrer"
            title="View Omercan's GitHub profile"
          >
            GitHub
          </a>{" "}
          <a
            href="https://x.com/obsfx"
            target="_blank"
            rel="noopener noreferrer"
            title="View Omercan's X profile"
          >
            Twitter
          </a>{" "}
          /
          <a
            href="https://bsky.app/profile/omercan.io"
            target="_blank"
            rel="noopener noreferrer"
            title="View Omercan's Bluesky profile"
          >
            Bluesky
          </a>
          )
        </span>
        <br />
        <span>
          Burak (
          <a
            href="https://github.com/burakcan"
            target="_blank"
            rel="noopener noreferrer"
            title="View Burak's GitHub profile"
          >
            GitHub
          </a>{" "}
          <a
            href="https://x.com/neoberg"
            target="_blank"
            rel="noopener noreferrer"
            title="View Burak's X profile"
          >
            Twitter
          </a>{" "}
          /
          <a
            href="https://bsky.app/profile/burakcan.me"
            target="_blank"
            rel="noopener noreferrer"
            title="View Burak's Bluesky profile"
          >
            Bluesky
          </a>
          )
        </span>
      </p>
      <p>
        Inspired by{" "}
        <a
          href="https://justfuckingusehtml.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="View justfuckingusehtml.com"
        >
          justfuckingusehtml.com
        </a>
      </p>
      <p>
        <strong>
          <a
            href="https://github.com/burakcan/just-fucking-use-react"
            target="_blank"
            rel="noopener noreferrer"
            title="View the source code on GitHub"
          >
            View the source code on GitHub
          </a>
        </strong>
      </p>
    </main>
  );
}
