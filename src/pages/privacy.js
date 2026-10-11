import React from "react"
import Layout from "../components/Layout"
import SiteHead from "../components/Head"

// Keep this in step with what the app does. Update UPDATED whenever it changes,
// and before shipping anything that collects or shares data (ads, purchases).
const UPDATED = "11 October 2026"

export default function Privacy() {
  return (
    <Layout>
      <article className="section prose">
        <h1>Lumen privacy policy</h1>
        <p className="muted">Last updated {UPDATED}</p>

        <p>
          Lumen is a file manager for Android made by Lilium Apps. It is built so that your
          files and your activity stay on your device. This policy explains what the app does with
          your information.
        </p>

        <h2>The short version</h2>
        <ul>
          <li>We don't collect, store, or sell any personal data.</li>
          <li>Lumen has no account, no analytics, no advertising, and no crash reporting.</li>
          <li>Your files never leave your device unless you choose to share them.</li>
        </ul>

        <h2>Your files</h2>
        <p>
          Lumen reads and changes files on your device only to do what you ask: browse,
          search, preview, copy, move, compress, extract, rename, and delete. It analyzes storage on
          your device to show what takes up space. All of this happens on your device. Nothing about
          your files is sent to us or to anyone else.
        </p>

        <h2>Data kept on your device</h2>
        <p>
          To work quickly, the app keeps some information on your device: your settings, pinned and
          recent folders, a search index of file names, folder sizes, the trash, and a log of file
          operations so interrupted work can be resumed. It is stored in the app's private storage
          and removed when you uninstall the app or clear its data.
        </p>
        <p>
          If Android backup is turned on for your device, Android may back up the app's settings to
          your Google account. That backup is handled by Google under your device's backup settings,
          not by us, and it never includes the computers you chose to remember for file sharing.
        </p>

        <h2>Sharing with a computer</h2>
        <p>
          Lumen can share files with a computer on the same Wi-Fi network. This is off until
          you turn it on, works only on your local network, and requires you to approve each
          computer on your phone. Sharing stops by itself when idle, and a notification shows while
          it runs. Files go directly between your phone and your computer; they don't pass through
          our servers or the internet. If you choose to remember a computer, your phone keeps only a
          hash of that computer's sign-in token, and you can forget every remembered computer at
          any time.
        </p>

        <h2>Permissions</h2>
        <ul>
          <li>
            <strong>All files access</strong>: to browse and manage files across your storage. It is
            requested only when you open a part of the app that needs it, and it cannot read other
            apps' private data.
          </li>
          <li>
            <strong>Installed apps</strong>: to show the names of apps that own folders on your
            storage, so you can tell what is taking up space.
          </li>
          <li>
            <strong>Install apps</strong>: to hand an APK file you open to Android's installer. The
            app never installs anything by itself.
          </li>
          <li>
            <strong>Network and Wi-Fi state</strong>: for sharing files with a computer on your local
            network.
          </li>
          <li>
            <strong>Notifications</strong>: to show the progress of long operations and when sharing
            is running.
          </li>
          <li>
            <strong>Set wallpaper</strong>: to set an image as your wallpaper when you ask.
          </li>
        </ul>

        <h2>Children</h2>
        <p>Lumen isn't directed at children and doesn't knowingly collect data from anyone.</p>

        <h2>Changes</h2>
        <p>
          If we add features that change how data is handled, such as ads or in-app purchases, we'll
          update this policy before those features ship and change the date above.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about privacy? Email{" "}
          <a href="mailto:liliumappshq@gmail.com">liliumappshq@gmail.com</a>.
        </p>
      </article>
    </Layout>
  )
}

export const Head = () => <SiteHead title="Privacy policy" />
