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
              AI engineering and product development.
            </h2>
            <p className={styles.subdescription}>
              Retrieval systems, autonomous agents, and full-stack apps —
              from prototype to production.
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

        <p className={styles.bio}>
          AI engineer and full-stack developer with a background in
          neuroscience, data science, and product development. I build
          retrieval systems, agent workflows, and document intelligence tools
          that integrate into existing team processes — across construction,
          media, education, and consumer products.
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
                Building production AI agents used daily by construction teams
                to interpret drawings, answer RFIs, summarize submittals, and
                retrieve project data from large unstructured document sets.
                Designed ingestion and retrieval pipelines using hybrid search,
                dense embeddings, reranking, and vector databases.
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
                Built and launched AI-first consumer and internal tools using
                React, TypeScript, React Native, Next.js, and Python. Designed
                RAG systems and autonomous agents supporting personalized
                content, adaptive user experiences, and automated workflows.
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
                Led development of a learning management platform used by
                nontechnical clients. Built admin tooling enabling client
                management, reporting, and data integration without engineering
                involvement.
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
                Led a neuroscience-driven data science team applying
                Python-based analysis and experimental tooling in a production
                research environment. Built internal tools to design, manage,
                and operationalize studies.
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
