import { createRef, useCallback, useEffect } from 'react';
import styles from './cursor.module.css';
import { useLocation } from 'react-router-dom';

export const Cursor = () => {
  const invertedCursorRef = createRef();
  const location = useLocation();

  useEffect(() => {
    invertedCursorRef.current.style.width = '30px';
    invertedCursorRef.current.style.height = '30px';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const onMouseMove = useCallback(e => {
    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);
  }, []);

  const onMouseEnter = useCallback(() => {
    invertedCursorRef.current.style.width = '45px';
    invertedCursorRef.current.style.height = '45px';
  }, [invertedCursorRef]);

  const onMouseLeave = useCallback(() => {
    invertedCursorRef.current.style.width = '30px';
    invertedCursorRef.current.style.height = '30px';
  }, [invertedCursorRef]);

  useEffect(() => {
    const clickableElements = document.querySelectorAll('a, button');
    document.body.addEventListener('mousemove', onMouseMove);
    clickableElements.forEach(element => {
      element.addEventListener('mouseenter', onMouseEnter);
      element.addEventListener('mouseleave', onMouseLeave);
    });
    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      clickableElements.forEach(element => {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, [invertedCursorRef, onMouseEnter, onMouseLeave, onMouseMove]);
  return (
    <div
      ref={invertedCursorRef}
      className={styles.invertedCursor}
      id="inverted-cursor"
    ></div>
  );
};
