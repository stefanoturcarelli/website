import styles from "./Notification.module.css";

export const Notification = () => {
  return (
    /* From Uiverse.io by kennyotsu */
    <div className={styles.notificationsContainer}>
      <div className={styles.success}>
        <div className={styles.flex}>
          <div className={styles.flexShrink_0}>
            <svg
              className={styles.succes_svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className={styles.success_prompt_wrap}>
            <p className={styles.success_prompt_heading}>Order completed</p>
            <div className={styles.success_prompt_prompt}>
              <p>
                You're happy now? Does this impulsive action is really going to
                satisfy you? Don't answer me, answer yourself. Anyway, your
                party-size pizza combo is on it's way.
              </p>
            </div>
            <div className={styles.success_button_container}>
              <button type="button" className={styles.success_button_main}>
                View status
              </button>
              <button type="button" className={styles.success_button_secondary}>
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
