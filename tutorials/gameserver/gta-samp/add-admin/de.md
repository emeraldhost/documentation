---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem GTA San Andreas Server hinzu"
description: "Admin auf einem GTA San Andreas Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["gta-samp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/gta-samp/add-mods", "gameserver/gta-samp/create-backup", "gameserver/gta-samp/join-server", "gameserver/gta-samp/kick-ban-players"]
---

SA-MP und open.mp haben **kein Adminsystem mit Spieler-IDs**. Es gibt keine Admin-Datei, in die Du eine ID einträgst, und kein Rechtesystem mit mehreren Stufen. Die einzige eingebaute Administrationsfunktion ist **RCON** – wer das RCON-Passwort kennt, ist Admin.

> [!NOTE]
> Abgestufte Adminrechte, Login über einen Account oder Befehle wie `/setadmin` kommen immer vom **Gamemode**, nicht vom Server. Wie Du dort Admins einträgst, steht in der Dokumentation des jeweiligen Gamemodes.

## RCON-Passwort setzen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Konfiguration öffnen**\
   Öffne im Hauptverzeichnis Deines Servers die Konfigurationsdatei. Bei **open.mp** ist das `config.json`, bei **SA-MP** die `server.cfg`.

4. **Passwort eintragen**

   **open.mp – `config.json`:**

   ```json
   {
       "rcon": {
           "password": "dein-sicheres-passwort"
       }
   }
   ```

   **SA-MP – `server.cfg`:**

   ```text
   rcon_password dein-sicheres-passwort
   ```

   > [!TIP]
   > Bearbeitest Du die `config.json`, prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit Dein Server die Konfiguration nicht mehr einlesen kann.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!IMPORTANT]
> Der Standardwert lautet `changeme`. Solange dieser Wert gesetzt ist, **startet Dein Server nicht**. Vergib deshalb immer ein eigenes Passwort.

> [!WARNING]
> Das RCON-Passwort ist nicht das Serverpasswort. Mit dem RCON-Passwort erhält jeder die volle Kontrolle über Deinen Server – gib es nur an Personen weiter, denen Du vertraust, und verwende ein anderes Passwort als das Beitrittspasswort Deines Servers.

## Im Spiel als Admin anmelden

1. **Server beitreten**\
   Verbinde Dich wie gewohnt mit Deinem Server. Siehe [Server beitreten](/tutorials/gameserver/gta-samp/join-server).

2. **Chat öffnen**\
   Drücke `T`, um den Chat zu öffnen.

3. **Anmelden**\
   Melde Dich mit Deinem RCON-Passwort an:

   ```text
   /rcon login dein-sicheres-passwort
   ```

4. **Befehle nutzen**\
   Nach der Anmeldung führst Du RCON-Befehle mit vorangestelltem `/rcon` aus:

   ```text
   /rcon players
   ```

## Nützliche RCON-Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `/rcon players` | Zeigt alle verbundenen Spieler mit ID, Name, IP-Adresse und Ping |
| `/rcon say <Text>` | Sendet eine Nachricht an alle Spieler |
| `/rcon hostname <Name>` | Ändert den angezeigten Servernamen |
| `/rcon password <Passwort>` | Setzt ein Beitrittspasswort – `password 0` entfernt es wieder |
| `/rcon mapname <Name>` | Ändert den im Serverbrowser angezeigten Kartennamen |
| `/rcon gmx` | Startet den Gamemode neu und lädt dabei den nächsten Eintrag aus Deiner Gamemode-Liste |
| `/rcon changemode <Gamemode>` | Wechselt den Gamemode |
| `/rcon weather <ID>` | Ändert das Wetter |
| `/rcon gravity <Wert>` | Ändert die Schwerkraft |
| `/rcon exit` | Fährt den Server herunter |

> [!TIP]
> Wie Du Spieler mit RCON vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/gta-samp/kick-ban-players).

## Externe Remote Console

Neben dem Weg über den Chat gibt es die externe Remote Console. Damit setzt Du RCON-Befehle ab, ohne im Spiel zu sein – die Befehle werden dort **ohne** das Präfix `/rcon` eingegeben.

Ob dieser externe Zugang aktiv ist, steuern zwei Einstellungen:

**open.mp – `config.json`:**

```json
{
    "rcon": {
        "enable": true
    }
}
```

**SA-MP – `server.cfg`:**

```text
rcon 1
```

> [!NOTE]
> Bei open.mp steht `rcon.enable` standardmäßig auf `false` und wird nur beim Serverstart eingelesen. Da die Dokumentation nicht eindeutig trennt, ob diese Einstellung auch die Anmeldung im Spiel betrifft, solltest Du sie setzen und anschließend testen, ob `/rcon login` weiterhin funktioniert.

> [!WARNING]
> Ein aktivierter externer RCON-Zugang ist aus dem Internet erreichbar. Nutze ihn nur mit einem starken Passwort und schalte ihn ab, wenn Du ihn nicht brauchst.
