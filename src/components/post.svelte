<script>
  export let title;
  export let summary;
  export let link;
  import styles from '@styles/components/post.module.scss'
</script>

<div class={styles.back}>
  <a href={link} class={styles.a}>

    <h2> {title} </h2>
  </a>
  <p class={styles.caption}> {summary} </p>
</div>

