import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <main id="main-content" className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Andrew Sauer</h1>
          <nav
            className={styles.socialContainer}
            aria-label="Social media links"
          >
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
          </nav>
        </header>

        <div className={styles.container}>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.description}>
              Where AI Engineering Meets Product Thinking
            </h2>
            <p className={styles.subdescription}>
              I turn models into real products — RAG tools, AI agents, and
              scalable apps that ship.
            </p>
            <div className={styles.emailContainer}>
              <a
                className={styles.link}
                href="mailto:andrewJohnSauer@gmail.com"
                aria-label="Send email to Andrew Sauer"
              >
                Email me
              </a>
            </div>
          </div>

          <div className={styles.image}>
            <Image
              src="/profile.jpg"
              alt="Photo of Andrew Sauer"
              priority
              width={500}
              height={667}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>

        <section
          className={styles.experienceContainer}
          aria-labelledby="work-experience"
        >
          <h2 className={styles.experienceTitle} id="work-experience">
            Work Experience
          </h2>
          <ul className={styles.experienceList}>
            <li className={styles.experienceItem}>
              AI Engineer →{" "}
              <a
                className={styles.experienceItemLink}
                href="https://humanagency.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Human Agency
              </a>
              , Remote, 2025-Present
            </li>
            <li className={styles.experienceItem}>
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
            </li>
            <li className={styles.experienceItem}>
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
            </li>
            <li className={styles.experienceItem}>
              Full-Stack Data Scientist →{" "}
              <a
                className={styles.experienceItemLink}
                href="https://www.warnerbros.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Warner Bros Entertainment
              </a>
              , Burbank, 2017-2019
            </li>
            <li className={styles.experienceItem}>
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
            </li>
            <li className={styles.experienceItem}>
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
            </li>
          </ul>
        </section>

        <section
          className={styles.experienceContainer}
          aria-labelledby="education"
        >
          <h2 className={styles.experienceTitle} id="education">
            Education
          </h2>
          <ul className={styles.experienceList}>
            <li className={styles.experienceItem}>
              Stanford University Graduate School of Business → Institute for
              General Management
            </li>
            <li className={styles.experienceItem}>
              Saint Mary&apos;s College of California Bachelor of Science → BS,
              Consumer Neuroscience / Social Psychology
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
