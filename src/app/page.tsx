import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Andrew Sauer</h1>
        <div className={styles.socialContainer}>
          <a
            className={styles.socialLink}
            target="_blank"
            href="https://github.com/andrewjsauer"
            rel="noopener noreferrer"
            aria-label="Github (opens in a new tab)"
          >
            GitHub
          </a>
          <a
            className={styles.socialLink}
            target="_blank"
            href="https://gitlab.com/andrewjsauer"
            rel="noopener noreferrer"
            aria-label="GitLab (opens in a new tab)"
          >
            GitLab
          </a>
          <a
            className={styles.socialLink}
            target="_blank"
            href="https://www.linkedin.com/in/andrewjsauer/"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <h1 className={styles.description}>
            Where AI Engineering Meets Product Thinking
          </h1>
          <h2 className={styles.description}>
            I turn models into real products — RAG tools, AI agents, and
            scalable apps that ship.
          </h2>
          <div className={styles.emailContainer}>
            <a
              className={styles.link}
              href="mailto:andrewJohnSauer@gmail.com"
              rel="noopener noreferrer"
            >
              Email me
            </a>
          </div>
        </div>

        <div className={styles.image}>
          <Image
            src="https://drive.google.com/uc?id=15W3B0rwHIBtu_WlX60ck0C4dDqjHpDvX"
            alt="Photo of Andrew Sauer"
            priority
            width={500}
            height={667}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className={styles.experienceContainer}>
        <h2 className={styles.experienceTitle}>Work Experience</h2>
        <p className={styles.experienceItem}>
          AI Product Engineer →{" "}
          <a
            className={styles.experienceItemLink}
            href="https://sauerApple.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            sauerApple
          </a>
          , Los Angeles, 2017-Present
        </p>
        <p className={styles.experienceItem}>
          Senior Frontend Developer →{" "}
          <a
            className={styles.experienceItemLink}
            href="https://biassync.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BiasSync
          </a>
          , Los Angeles, 2019-2025
        </p>
        <p className={styles.experienceItem}>
          Full-Stack Data Scientist →{" "}
          <a
            className={styles.experienceItemLink}
            href="https://www.warnerbros.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Warner Bros Entertainment
          </a>
          , Burbank, 2017–2019
        </p>
        <p className={styles.experienceItem}>
          Full-Stack Developer →{" "}
          <a
            className={styles.experienceItemLink}
            href="https://www.instagram.com/superseriouscompany/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Super Serious Company
          </a>
          , Portugal, 2017-2019
        </p>
        <p className={styles.experienceItem}>
          Android Developer →{" "}
          <a
            className={styles.experienceItemLink}
            href="https://tinder.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tinder
          </a>
          , West Hollywood, 2016-2017
        </p>
      </div>

      <div className={styles.experienceContainer}>
        <h2 className={styles.experienceTitle}>Education</h2>
        <p className={styles.experienceItem}>
          Stanford University Graduate School of Business → Institute for
          General Management
        </p>
        <p className={styles.experienceItem}>
          Saint Mary&apos;s College of California Bachelor of Science → BS,
          Consumer Neuroscience / Social Psychology
        </p>
      </div>
    </main>
  );
}
