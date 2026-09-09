import styles from './SupTooltip.module.css';

console.log(styles)

export function SupTooltip(props) {
  const filename = props['data-filename'] ?? '';
  const url   = props['data-url'] ?? '';
  const pages = (props['data-pages'] as string)?.split(',').map(s => s.trim()) ?? [];
  return (
    <span className={styles.supWrap}>
      <sup>
        {props.children}
      </sup>

      <span className={styles.tooltip} role="tooltip">
        <a href={url}>{filename}</a>
        { pages.length > 0 && (<div>page{pages.length > 1 && ('s'

        )}: {pages.join(', ')}</div>)}
      </span>
    </span>
  )
}