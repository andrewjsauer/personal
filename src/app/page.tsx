import Image from "next/image";
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
            Andrew is a fullstack engineer living in the mountains of
            California. He has a passion for the outdoors and loves to build
            end-to-end web applications.
          </h1>
          <div className={styles.emailContainer}>
            <a
              className={styles.email}
              href="mailto:andrewJohnSauer@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email me.
            </a>
          </div>
        </div>

        <div className={styles.image}>
          <Image
            src="/image.png"
            alt="Illustration of Andrew Sauer"
            priority
            objectFit="cover"
            width={600}
            height={500}
            layout="responsive"
          />
        </div>
      </div>

      <div className={styles.experienceContainer}>
        <h2 className={styles.experienceTitle}>Work Experience</h2>
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
          , Los Angeles, 2019-Present
        </p>
        <p className={styles.experienceItem}>
          Fullstack Developer →{" "}
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
          Python Developer and Research →{" "}
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
          Mobile Developer →{" "}
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
