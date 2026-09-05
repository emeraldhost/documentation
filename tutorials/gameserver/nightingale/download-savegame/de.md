---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Nightingale Servers herunter"
description: "Savegame von einem Nightingale Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["nightingale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 3
related: ["gameserver/nightingale/add-savegame", "gameserver/nightingale/create-backup", "gameserver/nightingale/join-server", "gameserver/nightingale/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Nightingale schreibt im laufenden Betrieb ständig in die Welt- und Charakterdaten – Du würdest sonst einen unvollständigen Spielstand herunterladen.

## Wo der Spielstand liegt

Der komplette Spielstand steckt im Ordner `Offline`. Darin liegen die Realms und die Charaktere getrennt voneinander:

| Verzeichnis | Inhalt |
|-------------|--------|
| `/NWX/Saved/Offline/DedicatedServer/Deploy/` | Die Realms Deines Servers, also alle Welten samt Bauten |
| `/NWX/Saved/Offline/<PlatformID>/Profiles/` | Die Charakterdaten eines Spielers. `<PlatformID>` ist die Steam- bzw. Epic-ID des jeweiligen Spielers – pro Spieler gibt es einen eigenen Ordner. |

> [!NOTE]
> Es gibt bei Nightingale **keinen Welt- oder Spielstandnamen**, den Du irgendwo einträgst. Der Server lädt immer das, was in diesen Ordnern liegt.

## Savegame herunterladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /NWX/Saved/
   ```

4. **Ordner herunterladen**\
   Lade den kompletten Ordner `Offline` mit allen Unterordnern auf Deinen PC herunter:

   ```text
   /NWX/Saved/Offline/
   ```

   > [!TIP]
   > Lade Realms und Charaktere immer gemeinsam herunter. Ein Realm ohne den zugehörigen Charakter ist später nur eingeschränkt nutzbar.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Serverzustand mitsichern**
>
> Möchtest Du auch den Serverzustand sichern – darunter die Liste der gebannten Spieler – lade zusätzlich diesen Ordner herunter:
>
> ```text
> /NWX/Saved/Config/
> ```

> [!TIP]
> **Konfiguration mitsichern**
>
> Die Servereinstellungen liegen in folgender Datei:
>
> ```text
> /NWX/Config/ServerSettings.ini
> ```
>
> Beachte: Admin-Passwort, Server-Passwort und Schwierigkeit werden beim Serverstart aus der **Verwaltung** in diese Datei geschrieben. Zum Wiederherstellen dieser Werte brauchst Du die Datei also nicht.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/nightingale/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/nightingale/create-backup).
