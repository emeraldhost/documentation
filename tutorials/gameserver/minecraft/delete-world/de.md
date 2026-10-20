---
slug: "welt-loeschen"
language: "de"
title: "So löschst Du eine Welt auf einem Minecraft Java Edition Server"
description: "Welt auf einem Minecraft Java Edition Server löschen"
tags: []
date: "2025-09-09"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt Löschen"
sort: 25
related: ["gameserver/minecraft/upload-world", "gameserver/minecraft/change-world-seed", "gameserver/minecraft/create-backup", "gameserver/minecraft/disable-nether"]
---

> [!CAUTION]
> **Achtung**
>
> Wenn Du die Welt löschst, kann sie nicht wiederhergestellt werden. Erstelle vorher ein [Backup](/tutorials/gameserver/create-backup), falls Du die Welt später erneut benötigst.

Auf der Seite **Welten** in Deinem Dashboard siehst Du alle Welten auf Deinem Server. Dort kannst Du eine neue Welt anlegen und alte Welten löschen.

## Neue Welt anlegen

Möchtest Du einfach mit einer frischen Welt neu anfangen, legst Du zuerst eine neue Welt an. Die alte Welt bleibt dabei erhalten, bis Du sie löschst.

1. **Welten öffnen**\
   Öffne Deinen Server im Dashboard und wähle in der Seitenleiste **Welten**.

2. **Neue Welt starten**\
   Klicke auf **Neue Welt**. Es öffnet sich der Dialog **Neue Welt anlegen**. Minecraft erzeugt die Welt selbst beim Start, Du gibst ihr nur einen Namen.

3. **Name eintragen**\
   Gib unter **Name** einen Namen ein. Erlaubt sind Buchstaben, Ziffern, `.`, `_` und `-` mit höchstens 32 Zeichen. Der Name wird zum Ordnernamen der Welt.

4. **Seed festlegen (optional)**\
   Trage unter **Seed** einen Seed ein, wenn Du eine bestimmte Welt erzeugen möchtest. Er wird als `level-seed` in die `server.properties` geschrieben. Weitere Optionen findest Du über **Weitere Optionen im Config-Editor**.

5. **Als Standard festlegen**\
   Aktiviere **Danach als Standard festlegen**. Der Server erzeugt die neue Welt dann beim nächsten Start und lädt sie ab dann.

6. **Welt anlegen**\
   Klicke auf **Welt anlegen** und starte Deinen Server neu.

## Welt über die Seite Welten löschen

1. **Welten öffnen**\
   Öffne in der Seitenleiste **Welten**.

2. **Welt löschen**\
   Wähle in der Zeile der Welt, die Du entfernen möchtest, die Option zum Löschen und bestätige den Vorgang.

> [!NOTE]
> Nether und Ende gehören zur Welt und werden mit ihr gelöscht.

> [!TIP]
> Welche Welt der Server gerade lädt, steht in der `server.properties` unter `level-name`. Lösche nur Welten, die der Server nicht mehr nutzt, oder lege vorher eine neue Welt als Standard fest.

## Alternative: Welt per SFTP löschen

1. **Server stoppen**\
   Stoppe Deinen Minecraft Java Edition Server.

2. **SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Welt-Ordner löschen**\
   Suche im Hauptordner den Ordner der Welt, die in der `server.properties` unter `level-name` eingetragen ist (standardmäßig `world`), und lösche ihn. Auf Paper- oder Spigot-Servern liegen Nether und Ende in eigenen Ordnern – lösche dort zusätzlich `<name>_nether` und `<name>_the_end`.

4. **Server starten**\
   Starte Deinen Server wieder. Danach wird automatisch eine neue Welt generiert.
