---
slug: "use-file-browser"
language: "en"
title: "How to Use the File Browser of Your Game Server"
description: "Create, upload, edit and manage your game server's files and folders directly in the dashboard"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Use File Browser"
sort: 15
related: ["gameserver/establish-sftp-connection", "gameserver/use-config-editor", "gameserver/create-backup", "gameserver/use-instances"]
---

With the **Datei-Browser** (File browser) you manage your server's files directly in the dashboard – no extra program needed. You can create, upload, edit, copy, move, rename and delete files and folders.

## SFTP Credentials

At the very top of the **Datei-Browser** you find four cards with your SFTP credentials:

| Card | Content |
| ---- | ------- |
| **FTP Server** | The server address, e.g. `sftp://game<NN>.<location>.emeraldhost.de` |
| **FTP Port** | The port, e.g. `2022` |
| **FTP Benutzername** (FTP username) | Your username in the format `<user>.<id>` |
| **FTP Passwort** (FTP password) | Your password, hidden by default |

Click the eye icon to show the password. With the green icon in the top right of the **FTP Passwort** card you set a new password. How to connect with these credentials is explained in [Establish an SFTP connection](/tutorials/gameserver/establish-sftp-connection).

## Create Files and Folders

1. **Open the file browser**\
   Open your server's dashboard and go to the **Datei-Browser** (page **Dateimanager**).

2. **Choose a folder**\
   Navigate to the folder where you want to create something.

3. **Create a file or folder**\
   Click **Neue Datei** (New file) or **Neuer Ordner** (New folder).

## Upload Files

1. **Open the target folder**\
   In the **Datei-Browser**, navigate to the folder the files should go into.

2. **Upload files**\
   Click **Dateien hochladen** (Upload files) and select the files on your computer.

> [!TIP]
> For large files or many files at once, e.g. a complete world or a modpack, an [SFTP connection](/tutorials/gameserver/establish-sftp-connection) is usually more reliable and faster.

## Navigation and Search

- **Open folders:** Click a folder to expand it.
- **Path bar:** The path bar with the house icon shows you which folder you are currently in.
- **Search:** Use **Dateien durchsuchen** (Search files) to quickly find files and folders.
- **Sort:** Click the **Name** column to sort the list. Next to it you see **Größe** (Size) and **Zuletzt geändert** (Last modified).
- **Select all:** **Alle auswählen** (Select all) selects all entries in the current folder. The counter next to it shows how many folders and files it contains, e.g. "9 Ordner • 12 Dateien" (9 folders • 12 files).

## Actions in the File Menu

The menu (⋮) next to a file gives you these actions:

| Action | Description |
| ------ | ----------- |
| **Bearbeiten** (Edit) | Opens the file for editing. |
| **Herunterladen** (Download) | Downloads the file to your computer. |
| **Kopieren** (Copy) | Copies the file. |
| **Verschieben** (Move) | Moves the file to another folder. |
| **Umbenennen** (Rename) | Gives the file a new name. Shortcut: `F2`. |
| **Pfad kopieren** (Copy path) | Copies the file's path to the clipboard. |
| **Berechtigungen** (Permissions) | Shows the file permissions. |
| **Komprimieren** (Compress) | Compresses the file. |
| **Löschen** (Delete) | Deletes the file. Shortcut: `Entf` (Del). |

> [!WARNING]
> It's best to create a [backup](/tutorials/gameserver/create-backup) before deleting files or making bigger changes, so you can restore an earlier state.

> [!TIP]
> Many of your server's settings are easier to change in the [Config-Editor](/tutorials/gameserver/use-config-editor) than by editing the configuration files by hand.
