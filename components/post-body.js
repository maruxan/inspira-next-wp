import styles from './post-body.module.css';

export default function PostBody({ content }) {
  return (
    <div className="md:px-[var(--container)] max-w-6xl mx-auto px-6">
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
