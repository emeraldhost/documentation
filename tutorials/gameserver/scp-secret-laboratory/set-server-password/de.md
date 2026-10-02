---
slug: "server-passwort-setzen"
language: "de"
title: "So schützt Du Deinen SCP: Secret Laboratory Server ohne Server-Passwort"
description: "Zugang zu einem SCP: Secret Laboratory Server ohne eingebautes Server-Passwort beschränken"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server-Passwort setzen"
sort: 17
related: ["gameserver/scp-secret-laboratory/set-up-whitelist", "gameserver/scp-secret-laboratory/set-up-geoblocking", "gameserver/scp-secret-laboratory/get-server-verified", "gameserver/scp-secret-laboratory/join-server"]
---
SCP: Secret Laboratory hat kein eingebautes Server-Passwort. In keiner Konfigurationsdatei gibt es einen Eintrag dafür, und auch in der Verwaltung kannst Du kein Passwort setzen. Wenn Du festlegen möchtest, wer Deinem Server beitreten darf, nutzt Du stattdessen die Whitelist. Diese Anleitung zeigt Dir, welche Möglichkeiten Du hast und was sie bewirken.

> [!WARNING]
> Der Pfad zu den Konfigurationsdateien enthält den Game Port Deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/`. Ersetze `<Port>` durch den tatsächlichen Game Port Deines Servers. Den Game Port findest Du in der Verwaltung unter **Übersicht**.

## Whitelist statt Passwort

Die Whitelist ist der eigentliche Ersatz für ein Server-Passwort: Nur Spieler, deren ID Du einträgst, können beitreten. Alle anderen werden abgewiesen.

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Whitelist aktivieren**\
   Setze in der Datei `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt` den Eintrag `enable_whitelist` auf `true`:

   ```text
   enable_whitelist: true
   ```

5. **Spieler eintragen**\
   Trage in der Datei `/.config/SCP Secret Laboratory/config/<Port>/UserIDWhitelist.txt` jede erlaubte ID in eine eigene Zeile ein, z.B.:

   ```text
   76561198000000001@steam
   ```

   > [!TIP]
   > Trage auch Deine eigene ID ein, sonst sperrst Du Dich selbst aus.

6. **Server starten**\
   Speichere beide Dateien und starte Deinen Server über die Verwaltung.

   > [!NOTE]
   > Spätere Änderungen an der Whitelist werden erst nach einem Neustart des Servers übernommen.

Alle Details, z.B. zu Discord-IDs und Kommentaren in der Liste, findest Du in der Anleitung [Whitelist einrichten](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist).

## Zusätzlich nach Ländern filtern

Als zusätzlichen Filter kannst Du Verbindungen nach Herkunftsland erlauben oder sperren – wie das geht, erfährst Du in der Anleitung [Geoblocking einrichten](/tutorials/gameserver/scp-secret-laboratory/set-up-geoblocking).

## Server in der Serverliste verstecken

Ein nicht verifizierter Server erscheint grundsätzlich nicht in der öffentlichen Serverliste. Erst nach einer [Verifizierung](/tutorials/gameserver/scp-secret-laboratory/get-server-verified) wird Dein Server dort angezeigt.

Ist Dein Server verifiziert und Du möchtest ihn trotzdem aus der Liste ausblenden, gibst Du in der Konsole der Verwaltung folgenden Befehl ein:

```text
!private
```

Um den Server wieder in der Liste anzuzeigen, gibst Du folgenden Befehl ein:

```text
!public
```

> [!IMPORTANT]
> Das Verstecken schützt Deinen Server nicht. Wer die IP-Adresse und den Port kennt, kann weiterhin über **Direct Connect** beitreten (siehe [Server beitreten](/tutorials/gameserver/scp-secret-laboratory/join-server)). Nur die Whitelist beschränkt den Zugang tatsächlich.

## Passwort-Plugins

Ein Beitritts-Passwort lässt sich nur über ein Plugin nachrüsten. Wir empfehlen stattdessen die Whitelist, da sie ohne zusätzliche Plugins funktioniert.

> [!NOTE]
> Nutzt Du ein eigenes Plugin oder eine Modifikation, die den Zugang zu Deinem Server beschränkt (außer der Whitelist), musst Du das bei einem verifizierten Server in der `config_gameplay.txt` kennzeichnen (siehe Verified Server Rules):
>
> ```text
> server_access_restriction: true
> ```
>
> Stellt ein Plugin stattdessen eine eigene Whitelist bereit, setzt Du:
>
> ```text
> custom_whitelist: true
> ```
>
> Diese Einträge markieren Deinen Server nur in der öffentlichen Serverliste. Ist Dein Server nicht verifiziert, kannst Du diese Einträge ignorieren.

## Kein Beitritts-Passwort: override_password

> [!WARNING]
> In der Datei `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt` gibt es den Eintrag `override_password`. Das ist **kein** Passwort zum Beitreten, sondern ein Login für den [Remote Admin](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin), mit dem man sich den Rang aus `override_password_role` holen kann. Northwood rät in der Datei selbst ausdrücklich davon ab und empfiehlt stattdessen, Ränge über die ID zu vergeben (siehe [Ränge vergeben](/tutorials/gameserver/scp-secret-laboratory/assign-ranks)). Lass den Eintrag deshalb auf dem Standardwert:
>
> ```text
> override_password: none
> ```
