---
slug: "welt-hochladen"
language: "de"
title: "So lädst Du eine Welt auf einem Minecraft Java Edition Server hoch"
description: "Welt auf einen Minecraft Java Edition Server hochladen"
tags: []
date: "2025-08-18"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt Hochladen"
sort: 24
related: ["gameserver/minecraft/delete-world", "gameserver/minecraft/create-backup", "gameserver/minecraft/join-server", "gameserver/minecraft/link-java-with-bedrock"]
---

Am einfachsten lädst Du eine Welt über die Seite **Welten** in Deinem Dashboard hoch. Für sehr große Welten über 2 GB nutzt Du stattdessen SFTP.

## Welt vorbereiten

Eine Minecraft-Welt ist ein Ordner, der eine Datei `level.dat` enthält. Nur Ordner mit einer `level.dat` gelten als Welt.

Einzelspieler-Welten findest Du auf Deinem PC im Ordner `.minecraft/saves`. Jeder Unterordner dort ist eine eigene Welt.

## Welt über die Seite Welten hochladen

1. **Welt packen**\
   Packe den Welt-Ordner mit der `level.dat` auf Deinem PC als `.zip` oder `.tar.gz`. Eine Datei darf höchstens 2 GB groß sein.

2. **Welten öffnen**\
   Öffne Deinen Server im Dashboard und wähle in der Seitenleiste **Welten**. Dort siehst Du alle Welten auf Deinem Server.

3. **Hochladen starten**\
   Klicke auf **Hochladen**. Es öffnet sich der Dialog **Welt hochladen**. Vorhandene Welten bleiben dabei erhalten, bis Du etwas anderes entscheidest.

4. **Datei auswählen**\
   Klicke auf **Datei auswählen**, wähle Dein Archiv aus und bestätige mit **Hochladen**.

5. **Welt als Standard festlegen**\
   Welche Welt der Server lädt, steht in der `server.properties` unter `level-name`. Klicke auf der Seite **Welten** auf **Im Config-Editor ansehen**. Setze dort den Wert der Einstellung mit dem Schlüssel `level-name` auf den Namen der hochgeladenen Welt, z. B. `NeueWelt`.

6. **Server neu starten**\
   Speichere die Änderung und starte den Server neu. Danach lädt der Server die neue Welt.

> [!NOTE]
> Nether und Ende gehören zur Welt. Sie werden mit ihr umbenannt, heruntergeladen und gelöscht.

## Alternative: Welt per SFTP hochladen

Ist Deine Welt größer als 2 GB, lädst Du sie per SFTP hoch.

> [!CAUTION]
> **Achtung**
>
> Per SFTP darf die Welt kein Archiv wie z. B. `.zip` sein. Entpacke die Welt vorher.

1. **Server stoppen**\
   Stoppe Deinen Minecraft Java Edition Server.

2. **SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Welt-Ordner hochladen**\
   Lade im Hauptordner, in dem sich auch der Ordner `world` befindet, Deine neue Welt hoch.

4. **Eintrag suchen**\
   Öffne die Datei `server.properties` und suche den folgenden Eintrag:

   ```text
   level-name=world
   ```

5. **Welt-Name ändern**\
   Ändere den Wert auf den Namen Deiner hochgeladenen Welt (z. B. `level-name=NeueWelt`).

6. **Server starten**\
   Speichere die Änderungen und starte den Server wieder.

> [!TIP]
> Du kannst auch mehrere Welten parallel auf Deinem Server betreiben, z. B. mit Plugins wie [Multiverse-Core](https://modrinth.com/plugin/multiverse-core).
