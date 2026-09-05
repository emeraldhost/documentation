---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem The Lord of the Rings Return to Moria Server"
description: "Spieler auf einem The Lord of the Rings Return to Moria Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-lord-of-the-rings-return-to-moria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/the-lord-of-the-rings-return-to-moria/add-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/create-backup", "gameserver/the-lord-of-the-rings-return-to-moria/download-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/join-server"]
---

Return to Moria hat **kein Admin- oder Rollensystem**: Es gibt keine Adminliste, kein Admin-Passwort und keine Adminbefehle im Spiel. Spieler verwaltest Du stattdessen über die Datei `MoriaServerPermissions.txt` im Hauptverzeichnis Deines Servers.

> [!NOTE]
> Angegeben wird immer der **Accountname des Spielers**, so wie er auf dem Server angezeigt wird – **keine** SteamID64 und keine Epic-ID.

## Spieler blockieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Datei darf nur bei gestopptem Server bearbeitet werden – im laufenden Betrieb wird sie vom Server überschrieben.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Rechtedatei öffnen**\
   Öffne im Hauptverzeichnis Deines Servers folgende Datei:

   ```text
   MoriaServerPermissions.txt
   ```

   > [!NOTE]
   > Existiert die Datei noch nicht, starte Deinen Server einmal vollständig. Die Konfigurationsdateien werden beim ersten Start angelegt.

4. **Spieler eintragen**\
   Ergänze für jeden Spieler, den Du aussperren möchtest, eine eigene Zeile nach diesem Muster:

   ```text
   Durin = Blocked
   ```

   Alle Zeilen, die mit `;` beginnen, sind Kommentare und werden ignoriert.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Der eingetragene Spieler kommt jetzt nicht mehr auf den Server.

> [!TIP]
> Du kannst Spieler auch **vorab** eintragen, bevor sie überhaupt jemals verbunden waren – der Eintrag greift, sobald jemand mit diesem Accountnamen beitreten will.

## Blockierung aufheben

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Zeile entfernen**\
   Öffne die Datei `MoriaServerPermissions.txt` und lösche die Zeile des Spielers vollständig.

3. **Server starten**\
   Speichere die Datei und starte Deinen Server. Der Spieler kann wieder beitreten.

> [!WARNING]
> Die Liste wird vom Server überschrieben, sobald im Spiel jemand blockiert wird. Bearbeite die Datei deshalb ausschließlich bei gestopptem Server – sonst gehen Deine Änderungen verloren.

> [!WARNING]
> Änderungen an der Datei greifen erst nach einem Neustart des Servers. Ein bereits verbundener Spieler bleibt bis dahin online.

## Was es bei Return to Moria nicht gibt

> [!NOTE]
> Return to Moria kennt weder **zeitlich begrenzte Banns** noch **Bann-Gründe**, keine Banns über eine Steam- oder Epic-ID und keine Bannliste in der Verwaltung. Eine Blockierung gilt so lange, bis Du die Zeile wieder aus der Rechtedatei entfernst.

> [!TIP]
> **Server auf einen festen Kreis begrenzen**
>
> Die Rechtedatei sperrt einzelne Spieler aus. Möchtest Du Deinen Server umgekehrt nur bestimmten Leuten zugänglich machen, setze in den Servereinstellungen ein Serverpasswort und gib es nur an diese Spieler weiter – siehe [Server beitreten](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/join-server).

## Weitere Rechtestufen

Neben `Blocked` kennt die Rechtedatei Stufen, mit denen Du Bau- und Lagerrechte einzelner Spieler einschränkst. Jede Zeile folgt dem Muster `Name = Option,Option`:

| Stufe | Bedeutung |
|-------|-----------|
| `Blocked` | Der Spieler mit diesem Accountnamen kommt nicht auf den Server |
| `Default` | Der Spieler erhält die Standardrechte |
| `NoConstruction` | Der Spieler darf nicht bauen, nicht schnellbauen und nichts abbauen |
| `QuickBuild` | Der Spieler darf nur Plattformen und Strickleitern schnellbauen |
| `AllConstruction` | Der Spieler darf uneingeschränkt bauen und abbauen |
| `NoStorage` | Der Spieler darf keine Lagerbehälter nutzen und nicht aus dem geteilten Basislager craften |
| `AllStorage` | Der Spieler darf alle Lagerbehälter und deren Inhalt nutzen |

Ein Beispiel mit mehreren Einträgen:

```text
Default = QuickBuild,NoStorage
Durin = Blocked
Gimli = AllConstruction,AllStorage
Thorin = Default
```

> [!NOTE]
> `Default` ist kein Spielername, sondern legt die Rechte für alle Spieler fest, für die keine eigene Zeile existiert. In der ausgelieferten Datei steht dafür `Default = AllConstruction,AllStorage`.

> [!TIP]
> Erstelle vor größeren Änderungen an der Rechtedatei ein [Backup](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/create-backup), damit Du jederzeit zurück kannst.

## Konsolenbefehle

Der Server bringt eine eigene Serverkonsole mit, über die sich Spieler im laufenden Betrieb verwalten lassen:

| Befehl | Beschreibung |
|--------|-------------|
| `players` | Alle verbundenen Spieler anzeigen |
| `status` | Status des Servers anzeigen |
| `kick <Name>` | Spieler vom Server trennen |
| `block <Name>` | Verbundenen Spieler blockieren |
| `unblock <Name>` | Blockierung aufheben |
| `regenerateinvitecode` | Neuen Invite-Code beim nächsten Start erzeugen |
| `rename world <Name>` | Welt umbenennen |
| `difficulty` | Aktuellen Schwierigkeitsgrad anzeigen |
| `setdifficulty <Preset>` | Alle Schwierigkeitseinstellungen auf ein Preset setzen |
| `setcustomdifficulty` | Eine einzelne Schwierigkeitseinstellung setzen |
| `help` | Liste aller Befehle anzeigen |
| `exit` | Welt speichern und Server beenden |

> [!IMPORTANT]
> Die Konsole in der Verwaltung zeigt bei Return to Moria ausschließlich die Ausgaben des Servers an – dort erscheint zum Beispiel der Invite-Code. Der Server nimmt über die Verwaltung **keine** Befehle entgegen, weil das Serverprogramm im Hintergrund läuft. Nutze zum Aussperren von Spielern deshalb den Weg über die Datei `MoriaServerPermissions.txt`.

> [!NOTE]
> Ein `kick` trennt einen Spieler nur von der laufenden Session. Er kann derselben Session danach wieder beitreten – dauerhaft ausgesperrt wird nur, wer in der Rechtedatei steht.

## Serverregeln anzeigen

Beim Beitritt kannst Du Deinen Spielern einen frei formulierten Regeltext anzeigen lassen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Regeldatei bearbeiten**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) im Hauptverzeichnis Deines Servers folgende Datei und trage Deinen Text ein:

   ```text
   MoriaServerRules.txt
   ```

3. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Der Regeltext darf **maximal 1024 Zeichen** lang sein.
