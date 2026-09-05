---
slug: "admin-werden"
language: "de"
title: "So wirst Du Admin auf einem Arma Reforger Server"
description: "Admin auf einem Arma Reforger Server werden"
tags: []
date: "2026-02-22"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin werden"
sort: 2
related: ["gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/add-savegame", "gameserver/arma-reforger/download-savegame", "gameserver/arma-reforger/kick-ban-players"]
---

Es gibt zwei Möglichkeiten, Admin-Rechte auf Deinem Arma Reforger Server zu erhalten: über ein Admin-Passwort oder über Deine Steam64-ID.

## Admin-Passwort festlegen

1. **Dashboard öffnen**\
   Öffne Dein Dashboard und wähle Deinen Arma Reforger Server aus.

2. **Passwort setzen**\
   Navigiere zu den Einstellungen und trage unter `Admin Passwort` Dein gewünschtes Passwort ein.

3. **Server neustarten**\
   Speichere die Einstellungen und starte den Server neu.

> [!WARNING]
> **Wichtig**
>
> Das Admin-Passwort muss mindestens 3 Zeichen lang sein und darf keine Leerzeichen enthalten.

## Permanente Admins über Steam64-ID

Alternativ kannst Du Spieler dauerhaft als Admin eintragen, sodass sie sich nicht jedes Mal einloggen müssen.

1. **Config öffnen**\
   Öffne die Datei `config.json` und suche den Eintrag `"admins"` im Bereich `"game"`.

2. **Steam64-IDs eintragen**\
   Trage die Steam64-IDs der gewünschten Admins ein:

    ```json
    "game": {
      "admins": [
        "76561198XXXXXXXXX",
        "76561198YYYYYYYYY"
      ]
    }
    ```

    > [!TIP]
    > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

3. **Server neustarten**\
   Speichere die Änderungen und starte den Server neu.

> [!TIP]
> Deine Steam64-ID findest Du z.B. über unsere Anleitung [SteamID64 herausfinden](/tutorials/gameserver/steamid64-find-out).

## Ingame als Admin einloggen

1. **Chat öffnen**\
   Trete Deinem Server bei und öffne den Chat mit der Taste `/`.

2. **Befehl eingeben**\
   Gib folgenden Befehl ein:

    ```text
    #login DeinAdminPasswort
    ```

3. **Login bestätigen**\
   Nach erfolgreichem Login erscheint eine Bestätigung.

> [!NOTE]
> Mit `#logout` kannst Du Dich wieder vom Admin-Status abmelden. Mit `#roles` kannst Du prüfen, welche Rechte Du aktuell besitzt.

## Nützliche Admin-Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `#login <passwort>` | Als Admin einloggen |
| `#logout` | Admin-Status abmelden |
| `#roles` | Aktuelle Rechte anzeigen |
| `#players` | Alle Spieler mit IDs auflisten |
| `#id` | Eigene Spieler-ID anzeigen |
| `#restart` | Laufendes Szenario neustarten |
| `#shutdown` | Server herunterfahren |
