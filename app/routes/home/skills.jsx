import { Section } from '../../components/section';
import { Heading } from '../../components/heading';
import { Text } from '../../components/text';
import { Transition } from '../../components/transition';
import { Divider } from '../../components/divider';
import { useState } from 'react';
import styles from './skills.module.css';

const skillCategories = [
  {
    title: 'Languages & Core',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3/SASS', 'REST', 'GraphQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Redux', 'Three.js', 'Konva', 'Remotion', 'TailwindCSS', 'TanStack Query'],
  },
  {
    title: 'Tools & Build Systems',
    skills: ['Webpack', 'Vite', 'Git', 'Vercel', 'AWS', 'Cloudflare R2'],
  },
  {
    title: 'Architecture & Concepts',
    skills: ['Functional Programming', 'Monorepos', 'Web Components', 'Performance Optimization', 'Service Workers'],
  },
];

const SkillCard = ({ category, index, visible }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={styles.card}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        transitionDelay: `${index * 150 + 400}ms`
      }}
      data-visible={visible}
    >
      <div className={styles.cardGlow} />
      <div className={styles.cardContent}>
        <Heading level={4} as="h3" className={styles.categoryTitle}>
          {category.title}
        </Heading>
        <div className={styles.list}>
          {category.skills.map((skill, idx) => (
            <div 
              key={skill} 
              className={styles.pill}
              style={{ transitionDelay: `${index * 150 + 500 + (idx * 50)}ms` }}
              data-visible={visible}
            >
              <Text as="span">{skill}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.skills}
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
              Skills & Expertise
            </Heading>
            <Divider
              notchWidth="64px"
              notchHeight="8px"
              collapsed={!visible}
              collapseDelay={500}
              className={styles.divider}
            />
            
            <div className={styles.grid}>
              {skillCategories.map((category, index) => (
                <SkillCard 
                  key={category.title} 
                  category={category} 
                  index={index} 
                  visible={visible} 
                />
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
