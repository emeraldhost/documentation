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
> Wenn Du die Welt löschst oder zurücksetzt, kann sie nicht wiederhergestellt werden. Erstelle vorher ein [Backup](/tutorials/gameserver/create-backup), falls Du die Welt später erneut benötigst.

Auf der Seite **Welten** in Deinem Dashboard siehst Du alle Welten auf Deinem Server. Über das Menü (…) in der Zeile einer Welt wählst Du **Umbenennen**, **Herunterladen**, **Zurücksetzen** und **Löschen**. Außerdem legst Du dort neue Welten an.

## Welt zurücksetzen

Möchtest Du mit einer frischen Welt unter demselben Namen neu anfangen, setzt Du die Welt zurück. Sie wird gelöscht und Minecraft erzeugt beim nächsten Start eine neue Welt mit dem Seed aus der `server.properties`.

1. **Welten öffnen**\
   Öffne Deinen Server im Dashboard und wähle in der Seitenleiste **Welten**.

2. **Zurücksetzen wählen**\
   Öffne das Menü (…) in der Zeile der Welt und wähle **Zurücksetzen**. Es öffnet sich der Dialog **Welt zurücksetzen**. Er zeigt Dir eine Übersicht der Welt, die gelöscht wird, und ihre Größe.

3. **Vorher ein Backup erstellen**\
   Lass **Vorher Backup erstellen** aktiviert. Dein kompletter Server wird dann gesichert, bevor die Welt zurückgesetzt wird. Das Backup belegt einen Deiner Backup-Plätze.

4. **Server danach starten**\
   Lass **Server danach wieder starten** aktiviert, wenn der Server direkt nach dem Zurücksetzen wieder starten soll.

5. **Welt zurücksetzen**\
   Klicke auf **Stoppen, zurücksetzen und starten**. Der Server wird gestoppt, bei aktiviertem Backup-Schalter wird ein Backup erstellt, dann wird die Welt gelöscht und der Server wieder gestartet. Minecraft erzeugt dann die neue Welt und lädt sie.

> [!WARNING]
> Alles in dieser Welt geht verloren – Bauten, Inventare und der Fortschritt aller Spieler. Ohne Backup lässt sich das nicht zurückholen.

> [!TIP]
> Du möchtest eine andere Welt mit neuem Seed? Ändere zuerst den Seed, siehe [Welt-Seed ändern](/tutorials/gameserver/minecraft/change-world-seed), und setze die Welt danach zurück.

## Neue Welt anlegen

Möchtest Du die alte Welt behalten, legst Du stattdessen eine neue Welt an. Die alte Welt bleibt dabei erhalten, bis Du sie löschst.

1. **Welten öffnen**\
   Wähle in der Seitenleiste **Welten**.

2. **Neue Welt starten**\
   Klicke auf **Neue Welt**. Es öffnet sich der Dialog **Neue Welt anlegen**. Minecraft erzeugt die Welt selbst beim Start, Du gibst ihr nur einen Namen.

3. **Name eintragen**\
   Gib unter **Name** einen Namen ein. Erlaubt sind Buchstaben, Ziffern, `_` und `-` mit höchstens 32 Zeichen. Der Name wird zum Ordnernamen der Welt.

4. **Seed festlegen (optional)**\
   Trage unter **Seed** einen Seed ein, wenn Du eine bestimmte Welt erzeugen möchtest. Er wird als `level-seed` in die `server.properties` geschrieben. Weitere Optionen findest Du über **Weitere Optionen im Config-Editor**.

5. **Als Standard festlegen**\
   Aktiviere **Danach als Standard festlegen**. Der Server wird dann gestoppt, die neue Welt als Standard festgelegt und der Server wieder gestartet. Bei diesem Start erzeugt Minecraft die Welt.

6. **Welt anlegen**\
   Klicke auf **Anlegen und neu starten**. Die neue Welt erscheint danach auf der Seite **Welten**.

## Welt über die Seite Welten löschen

1. **Welten öffnen**\
   Wähle in der Seitenleiste **Welten**.

2. **Löschen wählen**\
   Öffne das Menü (…) in der Zeile der Welt, die Du entfernen möchtest, und wähle **Löschen**.

3. **Bestätigen**\
   Bestätige den Vorgang.

> [!IMPORTANT]
> Deine Standardwelt, also die Welt, die der Server gerade lädt, kannst Du nicht löschen. **Löschen** ist für sie deaktiviert, das Menü zeigt dann den Hinweis „Das ist Deine Standardwelt. Lege zuerst eine andere Welt als Standard fest.“ Lege also zuerst eine andere Welt als Standard fest, z. B. mit **Danach als Standard festlegen** beim Anlegen einer neuen Welt. Möchtest Du mit der Standardwelt neu anfangen, nutze stattdessen **Zurücksetzen**.

> [!NOTE]
> Nether und Ende gehören zu ihrer Welt und werden mit ihr gelöscht.

## Alternative: Welt per SFTP löschen

1. **Server stoppen**\
   Stoppe Deinen Minecraft Java Edition Server.

2. **SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Welt-Ordner löschen**\
   Suche im Hauptordner den Ordner der Welt, die in der `server.properties` unter `level-name` eingetragen ist (standardmäßig `world`), und lösche ihn. Auf Paper- oder Spigot-Servern liegen Nether und Ende in eigenen Ordnern – lösche dort zusätzlich `<name>_nether` und `<name>_the_end`.

4. **Server starten**\
   Starte Deinen Server wieder. Danach wird automatisch eine neue Welt generiert.
