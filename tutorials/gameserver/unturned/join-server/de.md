---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Unturned Server bei"
description: "Einem Unturned Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["unturned"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/unturned/add-savegame", "gameserver/unturned/create-backup", "gameserver/unturned/download-savegame", "gameserver/unturned/kick-ban-players"]
---

Unturned bietet Dir zwei zuverlässige Wege auf Deinen Server: die **Direktverbindung** über IP-Adresse und Port oder den **Server Code**. Im öffentlichen Serverbrowser taucht Dein Server nur auf, wenn ein Steam Game Server Login Token (GSLT) hinterlegt ist.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und die Ports Deines Servers findest Du in der **Verwaltung**. Im Spiel trägst Du immer den **Query Port** ein – nicht den Game Port. Das ist der häufigste Grund, warum ein Beitritt scheitert.

## Direkt über die IP verbinden

1. **Unturned starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Verbindungsfenster öffnen**\
   Wähle im Hauptmenü **Play** und wechsle auf **Connect**.

3. **Serverdaten eintragen**\
   Fülle die Felder mit den Daten aus Deiner Verwaltung:

   | Feld | Eintrag |
   |------|---------|
   | **Host** | IP-Adresse Deines Servers |
   | **Port** | **Query Port** Deines Servers |
   | **Password** | Server-Passwort, falls eines gesetzt ist |

4. **Verbinden**\
   Klicke auf **Connect**. Dein Charakter wird auf dem Server gespeichert – beim nächsten Beitritt spielst Du dort weiter.

> [!WARNING]
> Trage im Feld **Port** den Query Port ein, nicht den Game Port. Der Query Port ist bei Unturned der Port, über den Dein Server abgefragt wird – und damit der Wert für die Direktverbindung.

## Über den Server Code

Statt IP und Port kannst Du auch den **Server Code** verwenden – eine 17-stellige Zahl, die Du einfach in das Feld **Host** einträgst. Ein Port ist dann nicht nötig.

1. **Server Code auslesen**\
   Starte Deinen Server und sieh in der **Konsole** der Verwaltung nach. Dort wird der Code beim Start ausgegeben.

2. **Code eintragen**\
   Öffne im Spiel **Play → Connect** und trage den Code in das Feld **Host** ein. Das Feld **Port** bleibt leer.

3. **Verbinden**\
   Klicke auf **Connect**.

> [!NOTE]
> Der Server Code ändert sich bei jedem Neustart Deines Servers – es sei denn, Du hast ein GSLT hinterlegt. Außerdem siehst Du vor dem Beitritt keine Serverinformationen, weil diese nur über die IP-Adresse abgefragt werden können. Für einen dauerhaften Link zu Deinem Server ist die Direktverbindung über IP und Query Port die bessere Wahl.

## Im Serverbrowser erscheinen

Server ohne GSLT gelten als „anonym“ und werden in der öffentlichen Internet-Serverliste **nicht** angezeigt. Du erreichst sie weiterhin per Direktverbindung, findest sie aber nicht über die Suche im Spiel.

1. **Token erstellen**\
   Öffne [steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) und erstelle ein Token mit der **App ID 304930**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Token hinterlegen**\
   Gibt es in der Verwaltung unter **Einstellungen** ein Feld für das Login Token, trage es dort ein. Andernfalls verbindest Du Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) und trägst das Token als Befehl in der `Commands.dat` ein:

   ```text
   /Servers/<ServerID>/Server/Commands.dat
   ```

   ```text
   GSLT DEIN_TOKEN
   ```

   > [!NOTE]
   > **Alternative**
   >
   > Du kannst das Token auch in der Datei `/Servers/<ServerID>/Config.txt` hinterlegen. Suche dort im Abschnitt `Browser` den Eintrag `Login_Token` und trage Dein Token als Wert ein. Übernimm dabei die Schreibweise, die in der Datei bereits vorgegeben ist.

4. **Server starten**\
   Speichere die Änderung und starte Deinen Server. Er erscheint nun in der Internet-Serverliste.

> [!NOTE]
> **Wo liegt mein Server-Ordner?**
>
> `<ServerID>` ist der Name des Ordners unter `/Servers/`. Er wird über den Startparameter Deines Servers festgelegt – verbinde Dich per SFTP und sieh nach, welcher Ordner dort liegt. In der Regel ist es genau einer.

## Welche Ports nutzt Unturned?

> [!NOTE]
> Ein Unturned-Server belegt immer **zwei aufeinanderfolgende Ports**:
>
> | Port | Verwendung |
> |------|------------|
> | **Query Port** | Serverabfragen und Serverliste – diesen Port trägst Du im Spiel ein |
> | **Game Port** | Der Spielverkehr selbst. Er liegt immer genau einen Port über dem Query Port |
>
> Beide Ports sind für Deinen Server bereits freigegeben. Welche Werte für Dich gelten, siehst Du in der **Verwaltung**.

> [!WARNING]
> **Server wird nicht gefunden**
>
> Kommt keine Verbindung zustande, prüfe der Reihe nach:
>
> - Läuft Dein Server? Sieh in der Konsole der Verwaltung nach.
> - Hast Du wirklich den **Query Port** eingetragen und nicht den Game Port?
> - Suchst Du im Serverbrowser, obwohl kein GSLT hinterlegt ist? Dann nutze die Direktverbindung.
