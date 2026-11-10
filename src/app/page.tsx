"use client";

import { useState } from "react";
import { ConnectSlackModal } from "@/components/connect-slack-modal";
import styles from "./page.module.css";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <main className={styles.stage}>
      {open ? (
        <ConnectSlackModal onClose={() => setOpen(false)} />
      ) : (
        <button type="button" className={styles.reopen} onClick={() => setOpen(true)}>
          Connect Slack
        </button>
      )}
    </main>
  );
}
