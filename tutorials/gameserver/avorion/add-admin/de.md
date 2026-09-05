---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Avorion Server hinzu"
description: "Admin auf einem Avorion Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/avorion/add-mods", "gameserver/avorion/add-savegame", "gameserver/avorion/create-backup", "gameserver/avorion/download-savegame"]
---

Administratoren werden auf einem Avorion Server über die **SteamID64** festgelegt – eine 17-stellige Zahl, die mit `7656` beginnt. Du hast dafür drei Wege: die Verwaltung, die Datei `admin.xml` oder einen Befehl im laufenden Betrieb.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Über die Verwaltung

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zu den **Einstellungen**.

2. **SteamID64 eintragen**\
   Trage im Feld **Admin ID** die SteamID64 der gewünschten Person ein. Das Feld nimmt eine einzelne SteamID64 auf und muss ausgefüllt sein, damit Dein Server startet.

3. **Server neu starten**\
   Speichere die Änderung und starte Deinen Server neu. Die Adminrechte greifen erst nach einem Neustart.

> [!NOTE]
> **Mehrere Admins**
>
> Über die Verwaltung legst Du genau einen Admin fest. Möchtest Du weitere Personen zu Admins machen, nutze den nächsten Abschnitt und trage sie direkt in der `admin.xml` ein.

## Über die admin.xml

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **admin.xml öffnen**\
   Wechsle in den Ordner Deiner Galaxie – dort, wo auch `server.ini` und `modconfig.lua` liegen – und öffne die Datei:

   ```text
   /galaxy/<Galaxie-Name>/admin.xml
   ```

   > [!NOTE]
   > Existiert die Datei noch nicht, starte Deinen Server einmal, damit die Ordnerstruktur angelegt wird, und stoppe ihn anschließend wieder.

4. **Admins eintragen**\
   Trage pro Admin eine Zeile mit dem Spielernamen und der SteamID64 ein:

   ```xml
   <administrators>
       <admin name="Spielername" id="76561198012345678"/>
       <admin name="ZweiterAdmin" id="76561198087654321"/>
   </administrators>
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Im laufenden Betrieb

Du kannst Admins auch ohne Neustart setzen – entweder über die Konsole in der Verwaltung oder im Spielchat mit vorangestelltem `/`:

```text
/admin -a --name <Spielername> --id <SteamID64>
```

Adminrechte wieder entziehen:

```text
/admin -r --name <Spielername> --id <SteamID64>
```

> [!NOTE]
> Der Spieler muss mindestens einmal mit Deinem Server verbunden gewesen sein, damit er auf diesem Weg hinzugefügt werden kann.

> [!WARNING]
> Adminrechte umfassen unter anderem das Kicken und Bannen von Spielern sowie das Stoppen des Servers. Vergib sie nur an Personen, denen Du vertraust.

> [!TIP]
> Welche Befehle Dir als Admin zur Verfügung stehen und wie Du Spieler entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/avorion/kick-ban-players).
