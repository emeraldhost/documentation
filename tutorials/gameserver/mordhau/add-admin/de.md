---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Mordhau Server hinzu"
description: "Admin auf einem Mordhau Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mordhau"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/mordhau/add-mods", "gameserver/mordhau/create-backup", "gameserver/mordhau/join-server", "gameserver/mordhau/kick-ban-players"]
---

Admins trägst Du auf einem Mordhau Server in der `Game.ini` ein. Verwendet wird dabei die **PlayFab-ID** des Spielers – nicht seine SteamID64.

> [!IMPORTANT]
> Mordhau nutzt heute **PlayFab-IDs**. Das ist eine kurze Zeichenfolge aus Ziffern und Großbuchstaben, zum Beispiel `909275ECE8FEDDB`. Ältere Anleitungen, die eine 17-stellige SteamID64 in `Admins=` eintragen lassen, sind veraltet. SteamIDs kommen in der `Game.ini` nur noch in den alten `Legacy`-Listen für Banns und Stummschaltungen vor.

## PlayFab-ID herausfinden

Die PlayFab-ID eines Spielers liest Du über RCON aus. Der Spieler muss dafür auf Deinem Server online sein.

1. **RCON einrichten**\
   Wie Du RCON aktivierst und Dich verbindest, steht unter [Spieler kicken & bannen](/tutorials/gameserver/mordhau/kick-ban-players).

2. **Spieler auflisten**\
   Führe über RCON folgenden Befehl aus:

   ```text
   playerlist
   ```

3. **ID übernehmen**\
   Der Server gibt pro Zeile die PlayFab-ID und den Spielernamen aus. Kopiere Dir die ID des Spielers, den Du zum Admin machen möchtest.

## Admin über die Game.ini eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

   > [!WARNING]
   > Bearbeite die `Game.ini` ausschließlich bei gestopptem Server. Mordhau schreibt die Datei beim Beenden komplett neu – Änderungen im laufenden Betrieb gehen dabei verloren.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne folgende Datei:

   ```text
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

4. **Admins eintragen**\
   Ergänze im Abschnitt `[/Script/Mordhau.MordhauGameSession]` pro Admin eine eigene `Admins=`-Zeile:

   ```ini
   [/Script/Mordhau.MordhauGameSession]
   Admins=909275ECE8FEDDB
   Admins=A1B2C3D4E5F6789
   ```

   > [!NOTE]
   > Jede ID braucht eine eigene Zeile. Mehrere IDs durch Komma getrennt in eine Zeile zu schreiben, funktioniert nicht.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Die Admin-Liste wird beim Start eingelesen.

## Admin-Passwort setzen

Zusätzlich zur Admin-Liste kennt Mordhau ein Admin-Passwort für Deinen Server. Es wird im selben Abschnitt der `Game.ini` gesetzt:

```ini
[/Script/Mordhau.MordhauGameSession]
AdminPassword=DeinAdminPasswort
```

> [!WARNING]
> Jeder, der das Admin-Passwort kennt, kann sich damit Adminrechte auf Deinem Server verschaffen. Gib es nur an Personen weiter, denen Du vertraust, und verwende ein anderes Passwort als das Server-Passwort. Lass den Wert leer, wenn Du ausschließlich über die `Admins=`-Liste arbeiten möchtest.

## Admins über RCON verwalten

Wenn RCON eingerichtet ist, kannst Du Admins auch im laufenden Betrieb verwalten – ohne den Server zu stoppen.

| Befehl | Beschreibung |
|--------|--------------|
| `adminlist` | Zeigt alle eingetragenen Admins an |
| `addadmin <PlayFabID>` | Trägt einen Spieler als Admin ein |
| `removeadmin <PlayFabID>` | Entfernt einen Admin wieder |

> [!TIP]
> Über RCON vergebene Adminrechte greifen sofort. Trage den Admin zusätzlich in die `Admins=`-Liste der `Game.ini` ein, wenn er dauerhaft eingetragen bleiben soll – mit `adminlist` prüfst Du nach einem Neustart, wer eingetragen ist.

> [!NOTE]
> Der Ordner `LinuxServer` und die `Game.ini` entstehen erst, nachdem Dein Server einmal vollständig gestartet ist. Findest Du die Datei nicht, starte Deinen Server einmal und stoppe ihn wieder.

> [!TIP]
> Welche Möglichkeiten Du als Admin hast und wie Du Spieler entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/mordhau/kick-ban-players).
