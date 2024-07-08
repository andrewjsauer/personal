import Link from "next/link";
import React from "react";

import styles from "./page.module.css";

type Post = {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
};

// TODO: Move to Firebase
const fetchPosts = async (): Promise<Post[]> => {
  return [
    {
      id: "4",
      title: "New in Chrome 126: Exciting Features and Enhancements",
      description:
        "Chrome 126 introduces cross-document view transitions, Gamepad API trigger-rumble support, and enhanced Web APIs, providing improved performance and functionality for developers.",
      date: "June, 11 2024",
      slug: "new-in-chrome-126-updates",
    },
    {
      id: "1a",
      title: "React Conf 2024 Recap: Highlights and Announcements",
      description:
        "Catch up on React Conf 2024, featuring major announcements like React 19 RC, React Native's new architecture, and exciting talks from the community.",
      date: "May 22, 2024 ",
      slug: "react-conf-2024-recap",
    },
    {
      id: "2a",
      title: "React 19 RC: New Features and Improvements for Developers",
      description:
        "React 19 RC introduces Actions for async state management, Server Components, and new hooks like useOptimistic, enhancing the development experience and performance.",
      date: "April 25, 2024",
      slug: "react-19-rc-release",
    },
    {
      id: "1",
      title:
        "What's New in Chrome 124: Exciting Updates for a Better Browsing Experience",
      description:
        "Discover the latest features in Chrome 124, including universal install for web apps, improved accessibility, and enhanced security with the Web MIDI API.",
      date: "April 16, 2024",
      slug: "whats-new-chrome-124-updates",
    },
    {
      id: "2",
      title:
        "What's New in WebGPU for Chrome 124: Enhancing Graphics and Performance",
      description:
        "Explore the latest WebGPU features in Chrome 124, including read-only and read-write storage textures, support for service and shared workers, and new adapter information attributes.",
      date: "April 9, 2024",
      slug: "whats-new-webgpu-chrome-124",
    },
    {
      id: "3",
      title:
        "New in Chrome 122: Storage Buckets API, DevTools Improvements, and More",
      description:
        "Chrome 122 introduces the Storage Buckets API for better storage management, significant DevTools improvements, and enhanced clipboard API functionality.",
      date: "February 20, 2024",
      slug: "new-in-chrome-122-updates",
    },
  ];
};

const Blog = async () => {
  const posts = await fetchPosts();

  return (
    <div className={styles.blogContainer}>
      <Link href="/">
        <span className={styles.backButton}>← Back to Home</span>
      </Link>
      <h1 className={styles.blogTitle}>Blog</h1>
      <ul className={styles.blogList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.blogItem}>
            <Link className={styles.blogLink} href={`/blog/${post.slug}`}>
              <h2 className={styles.blogPostTitle}>{post.title}</h2>
              <p className={styles.blogPostDate}>{post.date}</p>
              <p className={styles.blogPostDescription}>{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
