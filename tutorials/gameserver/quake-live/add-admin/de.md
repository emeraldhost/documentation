---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Quake Live Server hinzu"
description: "Admin auf einem Quake Live Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["quake-live"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/quake-live/add-mods", "gameserver/quake-live/create-backup", "gameserver/quake-live/join-server", "gameserver/quake-live/kick-ban-players"]
---

Quake Live verwaltet Adminrechte, Moderatorenrechte und Banns gemeinsam in einer einzigen Textdatei: der `access.txt`. Eingetragen wird die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest. Alternativ verbindest Du Dich auf einen Server und gibst in der Konsole des Spiels `/players` ein – die Ausgabe enthält die SteamID64 aller verbundenen Spieler.

## Rechtestufen

| Stufe | Bedeutung |
|-------|-----------|
| `mod` | Moderator – darf Spieler verwalten, zum Beispiel stummschalten oder vom Server entfernen |
| `admin` | Administrator – die höchste Stufe der `access.txt`, umfasst die Moderatorenrechte |
| `ban` | Kein Recht, sondern ein Bann: Der Spieler kommt nicht mehr auf den Server |

## Admin über die access.txt eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **access.txt öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```text
   /baseq3/access.txt
   ```

4. **SteamID64 eintragen**\
   Trage pro Zeile einen Eintrag ein, bestehend aus der SteamID64 und der Rechtestufe, getrennt durch ein `|`:

   ```text
   76561198012345678|admin
   76561198087654321|mod
   ```

   Zeilen, die mit `#` beginnen, sind Kommentare und werden ignoriert.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!IMPORTANT]
> Bearbeite die `access.txt` **nur bei gestopptem Server**. Der Server schreibt die Zugriffsliste vor jedem Map-Ladevorgang aus dem Arbeitsspeicher zurück in die Datei – Änderungen, die Du im laufenden Betrieb speicherst, werden dabei überschrieben.

> [!NOTE]
> Das Verzeichnis `baseq3` liegt im Hauptverzeichnis Deines Servers, der vollständige Pfad lautet also `/home/container/baseq3/`. Welche Datei der Server verwendet, steuert die Servervariable `g_accessFile` – voreingestellt ist `access.txt`.

## Rechte im laufenden Betrieb vergeben

Du kannst Rechte auch vergeben, ohne den Server zu stoppen. Dafür nutzt Du die **Konsole** Deines Servers in der Verwaltung.

1. **Client-ID herausfinden**\
   Die Befehle erwarten die **Client-ID** – die Nummer, die der Server einem verbundenen Spieler zuweist. Verbinde Dich dafür im Spiel auf Deinen Server und gib in der Konsole des Spiels folgenden Befehl ein:

   ```text
   /players
   ```

   Die Ausgabe listet alle verbundenen Spieler mit ihrer Client-ID und ihrer SteamID64 auf.

2. **Konsole öffnen**\
   Öffne die Konsole Deines Servers über die Verwaltung.

3. **Rechte vergeben**\
   Gib den gewünschten Befehl ein, zum Beispiel:

   ```text
   addadmin 3
   ```

| Befehl | Beschreibung |
|--------|-------------|
| `addadmin <Client-ID>` | Spieler zum Administrator machen |
| `addmod <Client-ID>` | Spieler zum Moderator machen |
| `demote <Client-ID>` | Adminrechte eines Spielers entziehen |
| `reload_access` | Die `access.txt` neu einlesen |

> [!NOTE]
> In der Konsole Deines Servers gibst Du die Befehle ohne führendes `/` ein. Im Spiel schreibst Du dieselben Befehle mit einem führenden `/`, also zum Beispiel `/addadmin 3` oder `/demote 3`.

> [!WARNING]
> `reload_access` liest die Datei zwar sofort neu ein, der Server überschreibt sie aber weiterhin beim nächsten Map-Wechsel mit seinem eigenen Stand. Für dauerhafte Änderungen ist der Weg über den gestoppten Server sicherer.

## Sicherheitshinweis zur Fernwartung

Die mitgelieferte `server.cfg` aktiviert die ZeroMQ-Fernkonsole (`zmq_rcon_enable "1"`) und enthält dabei das Platzhalter-Passwort `ADMINPASSWORD`.

> [!IMPORTANT]
> Verwalte Deinen Server über die Konsole in der Verwaltung. Nutzt Du die Fernkonsole nicht, setze in `/baseq3/server.cfg` folgenden Wert:
>
> ```text
> set zmq_rcon_enable "0"
> ```
>
> Möchtest Du sie nutzen, vergib zwingend ein eigenes, langes Passwort über `zmq_rcon_password` und lege den in `zmq_rcon_port` eingetragenen Port zuvor als zusätzliche Portfreigabe in der Verwaltung an. Die Fernkonsole bindet auf einen eigenen **TCP**-Port, nicht auf den Game Port.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/quake-live/kick-ban-players).

> [!NOTE]
> Das Plugin-Framework minqlx bringt ein eigenes, davon getrenntes Rechtesystem mit. Es steht nur zur Verfügung, wenn Dein Server ausdrücklich mit einem minqlx-Image betrieben wird – auf einem Standard-Quake-Live-Server gilt ausschließlich die `access.txt`.
