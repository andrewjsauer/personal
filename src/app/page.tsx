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
          <div>
            <p className={styles.headline}>
              I help teams figure out where AI{" "}
              <span className={styles.redline}>
                actually fits
                <svg
                  className={styles.redlineStroke}
                  viewBox="0 0 200 14"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    className={styles.redlinePath}
                    pathLength={1}
                    d="M3 8 C 45 3, 110 10, 197 5"
                  />
                  <path
                    className={`${styles.redlinePath} ${styles.redlinePathSecond}`}
                    pathLength={1}
                    d="M6 11.5 C 60 7.5, 140 12.5, 194 8.5"
                  />
                </svg>
              </span>{" "}
              — then build it.
            </p>
            <p className={styles.subhead}>
              Product strategy, system design, and hands-on engineering for AI
              that works inside real operations.
            </p>
            <div className={styles.emailContainer}>
              <a
                className={styles.cta}
                href="mailto:andrewJohnSauer@gmail.com"
                aria-label="Send email to Andrew Sauer"
              >
                Get in touch
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className={styles.image}>
            <Image
              src="/profile.jpg"
              alt="Photo of Andrew Sauer"
              priority
              width={1000}
              height={750}
              sizes="(max-width: 760px) 100vw, 40vw"
              style={{ width: "100%", height: "auto" }}
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

        <div className={styles.pov}>
          <p className={styles.povLabel}>Point of view</p>
          <p className={styles.povText}>
            Most AI projects fail not because the technology doesn&apos;t
            work, but because nobody asked the right question about where it
            fits. The hardest part isn&apos;t building the system — it&apos;s
            understanding the operation well enough to know what the system
            should do. That&apos;s where I focus.
          </p>
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
              <p className={styles.experienceRole}>
                AI Engineer{" "}
                <span className={styles.experienceArrow} aria-hidden="true">
                  →
                </span>{" "}
                <a
                  className={styles.experienceItemLink}
                  href="https://humanagency.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Human Agency
                </a>
              </p>
              <p className={styles.experienceMeta}>Remote · 2025–Present</p>
              <p className={styles.experienceDescription}>
                Building AI systems used daily by construction teams to navigate
                thousands of drawings, RFIs, and submittals — replacing hours of
                manual document search with seconds. Designed the retrieval
                architecture from ingestion through delivery.
              </p>
            </li>
            <li className={styles.experienceItem}>
              <p className={styles.experienceRole}>
                AI Product Engineer{" "}
                <span className={styles.experienceArrow} aria-hidden="true">
                  →
                </span>{" "}
                <a
                  className={styles.experienceItemLink}
                  href="https://sauerApple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sauerApple
                </a>
              </p>
              <p className={styles.experienceMeta}>
                Los Angeles · 2017–Present
              </p>
              <p className={styles.experienceDescription}>
                Designing and shipping AI-first products that solve real user
                problems — from personalized content tools to automated
                workflows. Full ownership from product concept through
                production deployment.
              </p>
            </li>
            <li className={styles.experienceItem}>
              <p className={styles.experienceRole}>
                Lead Frontend Developer{" "}
                <span className={styles.experienceArrow} aria-hidden="true">
                  →
                </span>{" "}
                <a
                  className={styles.experienceItemLink}
                  href="https://biassync.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BiasSync
                </a>
              </p>
              <p className={styles.experienceMeta}>Los Angeles · 2019–2025</p>
              <p className={styles.experienceDescription}>
                Led development of a platform that enabled nontechnical clients
                to manage training programs, reporting, and data integrations
                independently — removing engineering as a bottleneck.
              </p>
            </li>
            <li className={styles.experienceItem}>
              <p className={styles.experienceRole}>
                Full-Stack Data Scientist{" "}
                <span className={styles.experienceArrow} aria-hidden="true">
                  →
                </span>{" "}
                <a
                  className={styles.experienceItemLink}
                  href="https://www.warnerbros.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Warner Bros Entertainment
                </a>
              </p>
              <p className={styles.experienceMeta}>Burbank · 2017–2019</p>
              <p className={styles.experienceDescription}>
                Led a neuroscience-driven research team applying data science to
                understand audience behavior. Built the internal tools that let
                the team design, run, and operationalize studies at scale.
              </p>
            </li>
            <li className={styles.experienceItem}>
              <p className={styles.experienceRole}>
                Full-Stack Developer{" "}
                <span className={styles.experienceArrow} aria-hidden="true">
                  →
                </span>{" "}
                <a
                  className={styles.experienceItemLink}
                  href="https://www.instagram.com/superseriouscompany/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Super Serious Company
                </a>
              </p>
              <p className={styles.experienceMeta}>Portugal · 2017–2019</p>
            </li>
            <li className={styles.experienceItem}>
              <p className={styles.experienceRole}>
                Android Developer{" "}
                <span className={styles.experienceArrow} aria-hidden="true">
                  →
                </span>{" "}
                <a
                  className={styles.experienceItemLink}
                  href="https://tinder.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tinder
                </a>
              </p>
              <p className={styles.experienceMeta}>
                West Hollywood · 2016–2017
              </p>
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
              <p className={styles.experienceRole}>
                Stanford Graduate School of Business
              </p>
              <p className={styles.experienceMeta}>
                Institute for General Management
              </p>
            </li>
            <li className={styles.experienceItem}>
              <p className={styles.experienceRole}>
                Saint Mary&apos;s College of California
              </p>
              <p className={styles.experienceMeta}>
                BS, Consumer Neuroscience &amp; Social Psychology
              </p>
            </li>
          </ul>
        </section>

        <section
          className={styles.experienceContainer}
          aria-labelledby="certifications"
        >
          <h2 className={styles.experienceTitle} id="certifications">
            Certifications
          </h2>
          <ul className={styles.experienceList}>
            <li className={styles.experienceItem}>
              <p className={styles.experienceRole}>
                Claude Certified Architect — Foundations{" "}
                <span className={styles.experienceArrow} aria-hidden="true">
                  →
                </span>{" "}
                <a
                  className={styles.experienceItemLink}
                  href="https://www.anthropic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anthropic
                </a>
              </p>
              <p className={styles.experienceMeta}>
                Certified July 2026 · Valid through July 2027
              </p>
            </li>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Andrew Sauer</p>
      </footer>
    </>
  );
}
