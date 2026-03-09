import { Section } from '../../components/section';
import { Heading } from '../../components/heading';
import { Text } from '../../components/text';
import { Divider } from '../../components/divider';
import { Transition } from '../../components/transition';
import { useState } from 'react';
import styles from './experience.module.css';

const jobs = [
  {
    role: 'Staff Engineer Frontend',
    company: 'Telus International',
    date: 'Jan 2026 – Present',
    description: [
      'Architected and deployed a low-code drag-and-drop interface builder, eliminating manual frontend cycles for internal tools.',
      'Integrated \'Fuelix Copilot,\' an AI-driven agent for non-technical stakeholders to generate functional interfaces via natural language.',
      'Developed a standardized starter template with pre-configured Auth and API layers, cutting project setup from days to minutes.'
    ],
  },
  {
    role: 'Software Development Engineer 3',
    company: 'Telus International',
    date: 'Mar 2024 – Jan 2026',
    description: [
      'Migrated fragmented codebases into a monorepo, reducing CI/CD build times by 20% and improving code sharing.',
      'Re-architected Fine Tune Studio to support diverse use cases, reducing time-to-market for new interfaces by 75%.',
      'Led a frontend team of 3 developers, overseeing the technical design, planning, and delivery of a critical feature.',
      'Architected and optimized the audio annotation tool, enhancing its capacity from 1-hour to 3-hour audio files.',
      'Optimized LiDAR multi-frame change performance by 35% and implemented asynchronous frame loading.'
    ]
  },
  {
    role: 'Software Development Engineer 2',
    company: 'Telus International',
    date: 'Jul 2021 – Mar 2024',
    description: [
      'Designed ML-driven Interactive object detection and point-cloud/video segmentation presets.',
      'Revitalized the paintbrush tool performance, achieving a 10-15x speed improvement in 64MP images.',
      'Led a major refactoring initiative, introducing generic types, removing 6000 lines of legacy code.',
      'Implemented an IndexedDB sensor configuration caching mechanism, reducing API sequence calls by 80%.'
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Amelia (IPSoft)',
    date: 'Oct 2020 – Jul 2021',
    description: [
      'Authored and maintained reusable React UI library components for the core Hyper-automation project.',
      'Migrated legacy class-based components to functional hooks and transitioned from REST APIs to GraphQL integrations.'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'HelloAR',
    date: 'Jan 2019 – Oct 2020',
    description: [
      'Built the HelloAR 3D platform from scratch including a physics interaction rule engine for 3D models.',
      'Developed a 360-degree interactive image capture and viewer library.'
    ],
  }
];

export const Experience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.experience}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
              Experience
            </Heading>
            <Divider
              notchWidth="64px"
              notchHeight="8px"
              collapsed={!visible}
              collapseDelay={500}
            />
            <div className={styles.timeline}>
              {jobs.map((job, index) => (
                <div 
                  key={`${job.company}-${job.date}`} 
                  className={styles.job}
                  data-visible={visible}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <div className={styles.jobCard}>
                    <div className={styles.glow} />
                    <div className={styles.jobHeader}>
                      <Heading level={4} as="h4" className={styles.jobRole}>
                        {job.role} <span className={styles.jobCompany}>@ {job.company}</span>
                      </Heading>
                      <Text className={styles.jobDate}>{job.date}</Text>
                    </div>
                    <ul className={styles.jobList}>
                      {job.description.map((bullet, idx) => (
                        <li key={idx} className={styles.jobBullet}>
                          <Text size="m" as="span">
                            {bullet}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
