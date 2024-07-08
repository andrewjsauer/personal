import { notFound } from "next/navigation";
import { FC } from "react";
import Link from "next/link";

import styles from "./page.module.css";

type Post = {
  id: string;
  title: string;
  content: string;
  date: string;
  slug: string;
};

// Move to Firebase
const fetchPostBySlug = async (slug: string): Promise<Post | null> => {
  const posts: Post[] = [
    {
      id: "2a",
      title: "React 19 RC: New Features and Improvements for Developers",
      content: `
      <body>
    <div class="blogContainer">
        <h1 class="blogTitle">React 19 RC: New Features and Improvements for Developers</h1>
        <p class="blogContent">Howdy folks! React 19 RC is here and it's packed with new features that are as exciting as finding a hidden trail in the woods.</p>
        
        <h2 class="blogContent">Key Updates:</h2>
        <ul class="blogContent">
            <li><strong>Actions:</strong> Manage async state, pending states, errors, and optimistic updates like a pro, with less hassle.</li>
            <li><strong>Server Components:</strong> Render components on the server for faster performance and easier data fetching.</li>
            <li><strong>New Hooks:</strong> "useOptimistic" and "useActionState" make state management smoother than a mountain stream.</li>
        </ul>
        
        <h2 class="blogContent">Why It Matters:</h2>
        <p class="blogContent">These updates make React 19 a must-have for developers. From better state management to server-side rendering, it's like adding top-notch gear to your development toolkit.</p>

        <p class="blogContent">For all the details, check out the <a href="https://react.dev/blog/2024/04/25/react-19">React 19 RC Release Notes</a>.</p>
    </div>
</body>
      `,
      date: "April 25, 2024",
      slug: "react-19-rc-release",
    },
    {
      id: "1a",
      title: "React Conf 2024 Recap: Highlights and Announcements",
      content: `
      <body>
    <div class="blogContainer">
        <h1 class="blogTitle">React Conf 2024 Recap: Highlights and Announcements</h1>
        <p class="blogContent">Howdy folks! React Conf 2024 was a hoot, packed with exciting announcements and insightful talks that are as refreshing as a mountain breeze.</p>
        
        <h2 class="blogContent">Key Announcements:</h2>
        <ul class="blogContent">
            <li><strong>React 19 RC:</strong> The React team rolled out the React 19 Release Candidate, ready for testing in production. It's like getting a sneak peek at the trail ahead.</li>
            <li><strong>React Native New Architecture Beta:</strong> The new architecture for React Native is now in beta, promising smoother rides for your mobile adventures.</li>
            <li><strong>React Compiler:</strong> The React Compiler is now open source, adding a powerful tool to your developer toolkit.</li>
        </ul>
        
        <h2 class="blogContent">Why It Matters:</h2>
        <p class="blogContent">These updates are like adding top-notch gear to your pack. They make building and managing your apps easier and more efficient, just like navigating a well-marked trail.</p>

        <p class="blogContent">For all the details and to watch the talks, head over to the <a href="https://react.dev/blog/2024/05/22/react-conf-2024-recap">React Conf 2024 Recap</a>.</p>
    </div>
</body>
      `,
      date: "May 22, 2024 ",
      slug: "react-conf-2024-recap",
    },
    {
      id: "1",
      title:
        "What's New in Chrome 124: Exciting Updates for a Better Browsing Experience",
      content: `
      <body>
      <h1>What's New in Chrome 124</h1>
      <p>Howdy folks! Chrome 124 is like finding a hidden trail in the woods, full of surprises and handy tools to make your web trek smoother.</p>
      
      <h2>Key Updates:</h2>
      <ul>
          <li><strong>Universal Install:</strong> Now, any webpage can be your trusty camp app, even if it’s not the fanciest around.</li>
          <li><strong>Improved Accessibility:</strong> Scroll containers can be focused with the keyboard, making it easier for all you keyboard cowboys out there.</li>
          <li><strong>Web MIDI API:</strong> A new permissions prompt keeps your MIDI devices secure, so you can jam without a hitch.</li>
          <li><strong>Writing Suggestions:</strong> Toggle those writing suggestions on or off in editable fields like choosing between trail mix and granola.</li>
          <li><strong>New Form-Factor Client Hint:</strong> Servers get more details about your device, tailoring the web experience like a custom-fit hiking boot.</li>
      </ul>
      
      <h2>Why It Matters:</h2>
      <p>These updates make Chrome as versatile as a Swiss Army knife. From installing any webpage as an app to enhanced security and usability, your web adventures just got a whole lot better.</p>
  
      <p>For the full rundown, check out the <a href="https://developer.chrome.com/release-notes/124?hl=en">Chrome 124 Release Notes</a>.</p>
  </body>
      `,
      date: "April 16, 2024",
      slug: "whats-new-chrome-124-updates",
    },
    {
      id: "2",
      title:
        "What's New in WebGPU for Chrome 124: Enhancing Graphics and Performance",
      content: `
      <body>
    <div class="blogContainer">
        <h1 class="blogTitle">What's New in WebGPU for Chrome 124</h1>
        <p class="blogContent">Howdy partners! Chrome 124 is upping its graphics game with WebGPU improvements that are slicker than a mountain stream.</p>
        
        <h2 class="blogContent">Key Updates:</h2>
        <ul class="blogContent">
            <li><strong>Read-only and Read-write Storage Textures:</strong> Shaders can now read from and write to storage textures, adding more tools to your graphic toolkit.</li>
            <li><strong>Service Workers and Shared Workers Support:</strong> WebGPU now works with service workers and shared workers, making background tasks smoother than a well-worn trail.</li>
            <li><strong>New Adapter Information Attributes:</strong> Get detailed info about your graphics hardware, like having a map of the terrain ahead.</li>
        </ul>
        
        <h2 class="blogContent">Why It Matters:</h2>
        <p class="blogContent">With these updates, WebGPU is more powerful and flexible, helping developers craft richer, more interactive experiences that run as smooth as a pinewood derby car.</p>

        <p class="blogContent">For the full scoop, head over to the <a href="https://developer.chrome.com/blog/new-in-webgpu-124?hl=en">WebGPU 124 Release Notes</a>.</p>
    </div>
</body>
      `,
      date: "April 9, 2024",
      slug: "whats-new-webgpu-chrome-124",
    },
    {
      id: "3",
      title:
        "New in Chrome 122: Storage Buckets API, DevTools Improvements, and More",
      content: `
      <body>
    <div class="blogContainer">
        <h1 class="blogTitle">New in Chrome 122: Storage Buckets API, DevTools Improvements, and More</h1>
        <p class="blogContent">Howdy, trailblazers! Chrome 122 has packed its backpack with new features that make web development as easy as pie around a campfire.</p>
        
        <h2 class="blogContent">Key Updates:</h2>
        <ul class="blogContent">
            <li><strong>Storage Buckets API:</strong> Manage your data like sorting gear in your backpack, prioritizing what's important.</li>
            <li><strong>DevTools Improvements:</strong> The Performance panel now includes breadcrumb navigation, so you won’t get lost tracking performance issues.</li>
            <li><strong>Async Clipboard API "unsanitized" Option:</strong> Keep HTML fidelity when copying and pasting, as neat as writing in your trail journal.</li>
        </ul>
        
        <h2 class="blogContent">Why It Matters:</h2>
        <p class="blogContent">These updates make web development smoother and more efficient, like having a trusty multi-tool by your side. Better storage management, debugging, and clipboard handling mean richer web experiences for all.</p>

        <p class="blogContent">Get the full details at the <a href="https://developer.chrome.com/blog/new-in-chrome-122?hl=en">Chrome 122 Release Notes</a>.</p>
    </div>
</body>
      `,
      date: "February 20, 2024",
      slug: "new-in-chrome-122-updates",
    },
    {
      id: "4",
      title: "New in Chrome 126: Exciting Features and Enhancements",
      content: `
      <body>
    <div class="blogContainer">
        <h1 class="blogTitle">New in Chrome 126: Exciting Features and Enhancements</h1>
        <p class="blogContent">Hey there, web wanderers! Chrome 126 is packed with new goodies to make your digital journey smoother and more exciting than ever.</p>
        
        <h2 class="blogContent">Key Updates:</h2>
        <ul class="blogContent">
            <li><strong>Cross-document View Transitions:</strong> Switch between different documents of the same origin with transitions as smooth as gliding on a zipline.</li>
            <li><strong>Gamepad API Trigger-Rumble Support:</strong> Feel the action with rumble features on compatible gamepads, adding a tactile thrill to your web games.</li>
            <li><strong>Enhanced Web APIs:</strong> New methods for Geolocation and improved support for WebGL make your web applications run like a dream.</li>
        </ul>
        
        <h2 class="blogContent">Why It Matters:</h2>
        <p class="blogContent">These updates give developers more tools to create interactive, efficient web applications. It’s like having a topographic map for your web development journey, ensuring everything runs perfectly.</p>

        <p class="blogContent">Check out all the new features in the <a href="https://developer.chrome.com/release-notes/126?hl=en">Chrome 126 Release Notes</a>.</p>
    </div>
</body>
      `,
      date: "June, 11 2024",
      slug: "new-in-chrome-126-updates",
    },
  ];

  return posts.find((post) => post.slug === slug) || null;
};

type BlogPostPageProps = {
  params: { slug: string };
};

const BlogPostPage: FC<BlogPostPageProps> = async ({ params }) => {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.blogContainer}>
      <Link href="/blog">
        <span className={styles.backButton}>← Back to Blog</span>
      </Link>
      <h1 className={styles.blogTitle}>{post.title}</h1>
      <p className={styles.blogPostDate}>{post.date}</p>
      <div
        className={styles.blogContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogPostPage;
