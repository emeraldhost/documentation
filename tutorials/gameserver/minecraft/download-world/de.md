---
slug: "welt-herunterladen"
language: "de"
title: "So lädst Du die Welt Deines Minecraft Java Edition Servers herunter"
description: "Welt von einem Minecraft Java Edition Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt herunterladen"
sort: 22
related: ["gameserver/minecraft/disable-nether", "gameserver/minecraft/disable-locator-bar", "gameserver/minecraft/enable-whitelist", "gameserver/minecraft/fix-server-crashes"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen, zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig, Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Minecraft Java Edition Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in den Hauptordner Deines Servers – dort liegt auch der Welt-Ordner.

4. **Welt-Ordner herunterladen**\
   Lade den Welt-Ordner vollständig auf Deinen PC herunter, standardmäßig heißt er `world`. Betreibst Du mehrere Welten parallel, lade jeden der Welt-Ordner einzeln herunter.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Welche Welt aktuell geladen wird, siehst Du in der Datei `server.properties` im Hauptordner Deines Servers. Der Eintrag `level-name=` gibt den Namen des Welt-Ordners an:
>
> ```text
> level-name=world
> ```

> [!TIP]
> **Welt wieder einspielen**
>
> Möchtest Du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Welt hochladen](/tutorials/gameserver/minecraft/upload-world).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/minecraft/create-backup).
