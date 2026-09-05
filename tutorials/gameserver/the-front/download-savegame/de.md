---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines The Front Servers herunter"
description: "Savegame von einem The Front Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-front"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 3
related: ["gameserver/the-front/add-savegame", "gameserver/the-front/create-backup", "gameserver/the-front/join-server", "gameserver/the-front/kick-ban-players"]
---

Der Spielstand eines The Front Servers ist keine einzelne Datei, sondern der komplette Ordner `GameStates`. Darin liegen die Welt, alle Bauwerke, die Spielerdaten und die Gildendaten.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. The Front speichert im laufenden Betrieb regelmäßig – lädst Du währenddessen herunter, kann der Spielstand unvollständig sein.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /TheFrontManager/<Konfigurationsname>/Saved/
   ```

   > [!NOTE]
   > **Welcher Konfigurationsname?**
   >
   > Der Ordner trägt den Konfigurationsnamen Deines Servers – denselben Namen, der auch in der Konfigurationsdatei `ServerConfig_<Konfigurationsname>.ini` steckt. Öffne einfach den Ordner `/TheFrontManager/` – in der Regel liegt dort genau ein Unterordner, und das ist Deiner.
   >
   > Findest Du den Ordner `TheFrontManager` nicht, arbeitet Dein Server ohne eigenes Benutzerverzeichnis. Der Spielstand liegt dann hier:
   >
   > ```text
   > /ProjectWar/Saved/
   > ```

4. **GameStates herunterladen**\
   Lade den kompletten Ordner `GameStates` mit allen Unterordnern und Dateien auf Deinen PC herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!WARNING]
> Ein Spielstand ist immer der vollständige Ordner `GameStates`. Lade ihn stets komplett herunter – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

> [!NOTE]
> **Was steckt im Ordner GameStates?**
>
> | Eintrag | Inhalt |
> |---------|--------|
> | `Worlds/` | Die Welt Deines Servers |
> | `Players/` | Die Spielerdaten |
> | `DeletedPlayers/` | Gelöschte Spielerdaten |
> | `Accounts/Accounts.csv` | Die Accounts auf Deinem Server |
> | `Accounts/NickNames.csv` | Die vergebenen Spielernamen |
> | `Accounts/GM.csv` | Admins und Banns |
> | `ConstructData.sav` | Alle gebauten Objekte |
> | `GuildData.sav` | Die Gilden auf Deinem Server |

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich die Konfigurationsdatei herunter:
>
> ```text
> /TheFrontManager/ServerConfig_<Konfigurationsname>.ini
> ```

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/the-front/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/the-front/create-backup).
