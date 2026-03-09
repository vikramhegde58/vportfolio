import gamestackTexture2Large from '../../assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '../../assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '../../assets/gamestack-list.jpg';
import gamestackTextureLarge from '../../assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '../../assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '../../assets/gamestack-login.jpg';
import sliceTextureLarge from '../../assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '../../assets/slice-app-placeholder.jpg';
import sliceTexture from '../../assets/slice-app.jpg';
import overlayText1 from '../../assets/overlay-text-1.png';
import overlayText2 from '../../assets/overlay-text-2.png';
import tealfoxScreenshot from '../../assets/tealfox-screenshot.png';
import { Footer } from '../../components/footer';
import { baseMeta } from '../../utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { Experience } from './experience';
import { Skills } from './skills';
import { useEffect, useRef, useState } from 'react';
import config from '../../config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Frontend + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const experience = useRef();
  const skills = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, experience, skills, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Tealfox AI"
        description={
          <>
            A fullstack SaaS platform for automatic video captioning and transcription using React, Next.js, Remotion, and AssemblyAI. Visit <a href="https://tealfoxai.com" target="_blank" rel="noopener" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Tealfox AI</a> to see more.
          </>
        }
        buttonText="Visit Tealfox AI"
        buttonLink="https://tealfoxai.com"
        model={{
          type: 'laptop',
          alt: 'Tealfox AI Interface',
          textures: [
            {
              srcSet: `${tealfoxScreenshot} 1280w, ${tealfoxScreenshot} 2560w`,
              placeholder: tealfoxScreenshot,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Overlay Text"
        description={
          <>
            A lightweight utility tool designed to effortlessly place customizable text overlays onto images right within your browser. Visit <a href="https://overlaytext.com" target="_blank" rel="noopener" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Overlay Text</a> to try it out.
          </>
        }
        buttonText="Visit Overlay Text"
        buttonLink="https://overlaytext.com"
        model={{
          type: 'phone',
          alt: 'Overlay Text Web App',
          textures: [
            {
              srcSet: `${overlayText1} 375w, ${overlayText1} 750w`,
              placeholder: overlayText1,
            },
            {
              srcSet: `${overlayText2} 375w, ${overlayText2} 750w`,
              placeholder: overlayText2,
            },
          ],
        }}
      />
      <Experience 
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
        id="experience"
      />
      <Skills 
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
        id="skills"
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
