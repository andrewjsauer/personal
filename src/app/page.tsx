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
              href="https://www.linkedin.com/in/andrewjsauer/"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              LinkedIn
            </a>
            <a
              className={styles.socialLink}
              target="_blank"
              href="https://github.com/andrewjsauer"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
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
          </nav>
        </header>

        <div className={styles.container}>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.description}>
              I help teams figure out where AI actually fits — then build it.
            </h2>
            <p className={styles.subdescription}>
              Product strategy, system design, and hands-on engineering for AI
              that works inside real operations.
            </p>
            <div className={styles.emailContainer}>
              <a
                className={styles.link}
                href="mailto:andrewJohnSauer@gmail.com"
                aria-label="Send email to Andrew Sauer"
              >
                Get in touch
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

        <p className={styles.bio}>
          Background in neuroscience (Saint Mary&apos;s) and product strategy
          (Stanford GSB), with deep technical ability in AI systems
          engineering. I work with teams to identify where AI creates real
          leverage in their operations — then design and build the systems
          that deliver it. Current focus: construction, media, and enterprise
          document intelligence.
        </p>

        <p className={styles.perspective}>
          Most AI projects fail not because the technology doesn&apos;t work,
          but because nobody asked the right question about where it fits. The
          hardest part isn&apos;t building the system — it&apos;s understanding
          the operation well enough to know what the system should do.
          That&apos;s where I focus.
        </p>

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
              <p className={styles.experienceDescription}>
                Building AI systems used daily by construction teams to navigate
                thousands of drawings, RFIs, and submittals — replacing hours of
                manual document search with seconds. Designed the retrieval
                architecture from ingestion through delivery.
              </p>
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
              <p className={styles.experienceDescription}>
                Designing and shipping AI-first products that solve real user
                problems — from personalized content tools to automated
                workflows. Full ownership from product concept through
                production deployment.
              </p>
            </li>
            <li className={styles.experienceItem}>
              Lead Frontend Developer →{" "}
              <a
                className={styles.experienceItemLink}
                href="https://biassync.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                BiasSync
              </a>
              , Los Angeles, 2019-2025
              <p className={styles.experienceDescription}>
                Led development of a platform that enabled nontechnical clients
                to manage training programs, reporting, and data integrations
                independently — removing engineering as a bottleneck.
              </p>
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
              <p className={styles.experienceDescription}>
                Led a neuroscience-driven research team applying data science to
                understand audience behavior. Built the internal tools that let
                the team design, run, and operationalize studies at scale.
              </p>
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
              Stanford Graduate School of Business — Institute for General
              Management
            </li>
            <li className={styles.experienceItem}>
              Saint Mary&apos;s College of California — BS, Consumer
              Neuroscience &amp; Social Psychology
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
