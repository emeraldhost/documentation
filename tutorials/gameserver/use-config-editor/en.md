---
slug: "use-config-editor"
language: "en"
title: "How to Use the Config Editor for Your Game Server"
description: "Change server settings in the Config Editor – with simple mode, expert mode, search and raw files"
tags: []
date: "2026-10-20"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Use Config Editor"
sort: 7
related: ["gameserver/create-backup", "gameserver/set-up-scheduled-tasks", "gameserver/establish-sftp-connection", "gameserver/minecraft/change-version"]
---

With the **Config-Editor** (Config Editor), you change your server's settings directly in the dashboard, without having to download and edit configuration files via SFTP. Each setting is shown with a short explanation, its default value and the allowed range.

> [!NOTE]
> This guide uses a Minecraft server as an example. Which categories, settings and files you see in the Config Editor depends on the game and the server software.

## Open the Config Editor

1. **Open the dashboard**\
   Open your server's dashboard.

2. **Select the Config Editor**\
   Click **Config-Editor** (Config Editor) in the left sidebar.

## Simple Mode and Expert Mode

In the Config Editor, you use a toggle to switch between two views:

| Mode | Content |
| ---- | ------- |
| **Einfacher Modus** (Simple mode) | The most important settings of your server, each with a short explanation. |
| **Expertenmodus** (Expert mode) | All settings, the start variables and the configuration files in raw format. Next to each name you see the key from the file. Depending on the game, some start variables are read-only. |

In simple mode, a hint tells you that expert mode contains more settings, start variables and raw files. Click **Zum Expertenmodus** (To expert mode) to switch there directly.

> [!TIP]
> For most changes, the **Einfacher Modus** (Simple mode) is enough. You only need the **Expertenmodus** (Expert mode) if you cannot find a setting there or want to edit a file in raw format.

## Categories

On the left under **Einstellungen** (Settings), the settings are sorted into categories. On a Minecraft server, these are for example:

- **Allgemein** (General)
- **Server-Icon** (Server icon)
- **Welt** (World)
- **Gameplay**
- **Spieler und Zugang** (Players and access)
- **Netzwerk und Leistung** (Network and performance)
- **Server-Software** (Server software, expert mode only)
- **Java-Version** (Java version)

Other games show different categories.

## Find Settings

Use the search field **Name oder Schlüssel suchen** (Search name or key) to find a setting quickly. You can search for the displayed name or for the key under which the setting is stored in the configuration file.

For each setting, the Config Editor shows you:

- **Label:** the name of the setting.
- **Key:** a badge with the name from the file, e.g. `motd`, `max-players`, `online-mode` or `hide-online-players`.
- **Description:** a short explanation of what the setting does.
- **Default:** the default value, shown as **Standard:** (Default), and, if available, the allowed range.

Settings you cannot change are marked **Nur lesbar** (Read-only). On Minecraft, this is e.g. the **Spiel-Port** (Game port, `server-port`).

> [!TIP]
> On Minecraft, you edit the MOTD with its own editor: you have two lines, buttons for colors and formatting (**Fett** (Bold), **Kursiv** (Italic), **Unterstrichen** (Underlined), **Durchgestrichen** (Strikethrough), **Zurücksetzen** (Reset)), and under **Vorschau in der Serverliste** (Preview in the server list) you immediately see how your server looks in the server list.

## Raw Files in Expert Mode

In expert mode, you also find the **Dateien** (Files) list on the left. On a Minecraft server, these are for example:

- `server.properties`
- `paper-global.yml`
- `paper-world-defaults.yml`
- `spigot.yml`
- `bukkit.yml`

Files that do not exist on your server yet are marked **Noch nicht angelegt** (Not created yet).

## Save Changes

1. **Change a setting**\
   Adjust the value you want.

2. **Save**\
   Save your changes. New values only apply after saving.

3. **Restart the server**\
   Many settings are only read when your server starts. After saving, restart your server with **Neustarten** (Restart) so the changes take effect.

> [!WARNING]
> Invalid values can prevent the server from starting. Only change settings whose meaning you know, and create a [backup](/tutorials/gameserver/create-backup) before larger changes.

## Server No Longer Starts After a Change

If your server no longer starts after a change, check the **Konsole** (Console) for the error message. Then reset the setting you changed last to the default value shown in the Config Editor and start your server again.
