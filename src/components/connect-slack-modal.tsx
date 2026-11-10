"use client";

import { useEffect, useId } from "react";
import Image from "next/image";
import styles from "./connect-slack-modal.module.css";

type ConnectSlackModalProps = {
  onClose: () => void;
};

export function ConnectSlackModal({ onClose }: ConnectSlackModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const connectorGradientId = useId().replace(/:/g, "");
  const patternLines = Array.from({ length: 45 }, (_, index) => index);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className={styles.modal}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <div className={styles.top}>
        <div className={styles.pattern} aria-hidden="true">
          {patternLines.map((line) => (
            <span key={line} className={styles.patternLine} />
          ))}
        </div>
        <div className={styles.logos}>
          <div className={`${styles.plate} ${styles.plateHyperline}`}>
            <div className={`${styles.mark} ${styles.hyperline}`}>
              <Image src="/logo.svg" alt="" width={42.0943} height={42} />
            </div>
          </div>
          <svg
            className={styles.connector}
            width="80"
            height="1"
            viewBox="0 0 80 1"
            fill="none"
            aria-hidden="true"
          >
            <line
              className={styles.connectorLine}
              x1="0"
              y1="0.5"
              x2="80"
              y2="0.5"
              stroke={`url(#${connectorGradientId})`}
            />
            <defs>
              <linearGradient
                id={connectorGradientId}
                x1="0"
                y1="1"
                x2="80"
                y2="1"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="var(--border-2)" stopOpacity="0" />
                <stop offset="0.25" stopColor="var(--border-2)" />
                <stop offset="0.75" stopColor="var(--border-2)" />
                <stop offset="1" stopColor="var(--border-2)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className={`${styles.plate} ${styles.plateSlack}`}>
            <div className={`${styles.mark} ${styles.slack}`}>
              <Image src="/slack.svg" alt="" width={56} height={56} />
            </div>
          </div>
        </div>
        <button type="button" className={styles.close} aria-label="Close" onClick={onClose}>
          <Image src="/close.svg" alt="" width={16} height={16} />
        </button>
      </div>

      <div className={styles.bottom}>
        <h1 id={titleId} className={styles.title}>
          Connect Slack
        </h1>
        <p id={descriptionId} className={styles.body}>
          Link a Slack workspace to use Slack blocks in workflows. Blocks post
          messages to channels and send direct messages to members.
        </p>
        <div className={styles.actions}>
          <button type="button" className={`${styles.button} ${styles.primary}`}>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
