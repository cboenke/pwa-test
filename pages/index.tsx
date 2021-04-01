import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  async function handleSubscribeClick() {
    const status = await Notification.requestPermission();
    if (status !== "granted") {
      return;
    }

    const registration = await navigator.serviceWorker.ready;
    console.log("Registered");
    // const subscription = registration.pushManager.subscribe({
    //   userVisibleOnly: true,
    //   applicationServerKey: "",
    // });
    // console.log({ subscription });
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <button onClick={handleSubscribeClick}>Subscribe</button>
      </main>
    </div>
  );
}
