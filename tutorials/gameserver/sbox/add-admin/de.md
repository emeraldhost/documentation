---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem s&box Server hinzu"
description: "Admin auf einem s&box Server hinzufügen"
tags: []
date: "2026-07-31"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["sbox"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/sbox/change-gamemode", "gameserver/sbox/change-map", "gameserver/sbox/create-backup", "gameserver/sbox/join-server"]
---

Adminrechte vergibst Du auf einem s&box Server über die Datei `users.json`. Eingetragen wird die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Admin hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **users.json öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```text
   /config/users.json
   ```

4. **Spieler eintragen**\
   Die Datei enthält eine Liste von Spielern. Trage die SteamID64 und die gewünschten Rechte ein:

   ```json
   [
     {
       "SteamId": "76561198012345678",
       "Claims": [ "admin" ],
       "Name": "Beispielspieler"
     }
   ]
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Aufbau der Datei

| Feld | Bedeutung |
|------|-----------|
| `SteamId` | SteamID64 des Spielers. Sie entscheidet, wer die Rechte bekommt. |
| `Claims` | Liste der Berechtigungen, die dem Spieler zugewiesen werden |
| `Name` | Reine Beschriftung für Dich – sie hat keine Auswirkung auf die Rechte |

Mehrere Admins trägst Du als weitere Einträge in dieselbe Liste ein, getrennt durch ein Komma:

```json
[
  {
    "SteamId": "76561198012345678",
    "Claims": [ "admin" ],
    "Name": "Spieler 1"
  },
  {
    "SteamId": "76561198087654321",
    "Claims": [ "admin" ],
    "Name": "Spieler 2"
  }
]
```

> [!WARNING]
> Die Datei muss gültiges JSON sein. Ein fehlendes oder überzähliges Komma reicht aus, damit die gesamte Liste nicht eingelesen wird und niemand Adminrechte erhält. Prüfe die Datei nach dem Bearbeiten deshalb mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/).

## Welche Claims gibt es?

Die Einträge unter `Claims` sind freie Textwerte. Welche davon tatsächlich etwas bewirken, entscheidet der Spielmodus, der auf Deinem Server läuft.

> [!IMPORTANT]
> Im offiziellen Sandbox-Modus (`facepunch.sandbox`) wird ausschließlich der Claim `admin` ausgewertet. Er schaltet unter anderem das Kicken und Bannen im Spiel sowie das Aufräumen der Welt frei. In der offiziellen Dokumentation tauchen Beispiele wie `kick`, `ban` oder `restart` auf – diese sind rein illustrativ und haben im Sandbox-Modus keine Wirkung. Trage daher `"Claims": [ "admin" ]` ein.

> [!NOTE]
> Nutzt Du einen Community-Spielmodus, prüfe in dessen Dokumentation, welche Claims dort erwartet werden. Du kannst einem Spieler auch mehrere Claims gleichzeitig geben: `"Claims": [ "admin", "moderator" ]`.

## Änderungen im laufenden Betrieb

Der Server überwacht die Datei `users.json` und übernimmt Änderungen daran ohne Neustart.

> [!WARNING]
> Diese Überwachung wird nur eingerichtet, wenn die Datei beim Start des Servers bereits vorhanden war. Legst Du `users.json` erstmalig an, während der Server läuft, musst Du ihn einmal neu starten. Danach genügt das Speichern der Datei.

> [!NOTE]
> Die Rechte aus der `users.json` greifen ausschließlich auf einem Dedicated Server wie Deinem. Beim Spielen über eine lokal gehostete Runde ist stattdessen immer der Host der Admin.

> [!TIP]
> Wie Du als Admin Spieler vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/sbox/kick-ban-players).
