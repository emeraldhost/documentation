---
slug: "welt-herunterladen"
language: "de"
title: "So lädst Du die Welt Deines Minecraft Bedrock Edition Servers herunter"
description: "Welt von einem Minecraft Bedrock Edition Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft-bedrock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt herunterladen"
sort: 13
related: ["gameserver/minecraft-bedrock/disable-locator-bar", "gameserver/minecraft-bedrock/disable-nether", "gameserver/minecraft-bedrock/enable-allowlist", "gameserver/minecraft-bedrock/grant-op-rights"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen, zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig, Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Minecraft Bedrock Edition Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle im Hauptordner Deines Servers in folgenden Ordner:

   ```text
   worlds
   ```

4. **Welt-Ordner herunterladen**\
   Jede Welt liegt hier als eigener Ordner. Lade den Ordner Deiner Welt vollständig auf Deinen PC herunter, standardmäßig heißt er `Bedrock level`.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Welche Welt aktuell geladen wird, siehst Du in der Datei `server.properties` im Hauptordner Deines Servers. Der Eintrag `level-name=` gibt den Namen des Welt-Ordners an:
>
> ```text
> level-name=Bedrock level
> ```

> [!TIP]
> **Welt wieder einspielen**
>
> Möchtest Du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Welt hochladen](/tutorials/gameserver/minecraft-bedrock/upload-world).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/minecraft-bedrock/create-backup).
