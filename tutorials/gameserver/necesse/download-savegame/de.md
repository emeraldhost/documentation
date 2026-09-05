---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Necesse Servers herunter"
description: "Savegame von einem Necesse Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/necesse/add-savegame", "gameserver/necesse/create-backup", "gameserver/necesse/join-server", "gameserver/necesse/kick-ban-players"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, um sie im Einzelspieler weiterzuspielen oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Welt herunterlädst. Necesse schreibt die Welt-Datei im laufenden Betrieb regelmäßig neu – lädst Du währenddessen herunter, kann die Datei unvollständig sein.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /saves/worlds/
   ```

   > [!NOTE]
   > Liegen die Welten Deines Servers direkt in `/saves/`, nutze diesen Ordner.

4. **Welt-Datei herunterladen**\
   Lade die `.zip`-Datei Deiner Welt auf Deinen PC herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> **Welche Datei ist die richtige?**
>
> Welche Welt Dein Server lädt, steht in der Verwaltung unter **Einstellungen** im Feld **Save Name**. Steht dort zum Beispiel `Meine_Welt`, ist `Meine_Welt.zip` Deine aktuelle Welt.

> [!WARNING]
> Entpacke die `.zip`-Datei nicht. Sowohl der Server als auch das Spiel erwarten die Welt als gepacktes Archiv.

> [!TIP]
> **Welt im Einzelspieler weiternutzen**
>
> Lege die heruntergeladene `.zip`-Datei in folgendes Verzeichnis, um die Welt lokal zu öffnen:
>
> ```text
> %appdata%\Necesse\saves\worlds
> ```

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:
>
> ```text
> /cfg/server.cfg
> ```

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/necesse/create-backup).
