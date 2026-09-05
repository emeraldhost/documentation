---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Kerbal Space Program Server bei"
description: "Einem Kerbal Space Program Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["kerbal-space-program"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/kerbal-space-program/add-savegame", "gameserver/kerbal-space-program/create-backup", "gameserver/kerbal-space-program/download-savegame", "gameserver/kerbal-space-program/kick-ban-players"]
---

Kerbal Space Program besitzt **keinen eingebauten Mehrspieler-Modus**. Dein Server nutzt dafür die Community-Modifikation **DarkMultiPlayer (DMP)**. Jeder Spieler muss den passenden DMP-Client in seiner KSP-Installation haben – ohne die Mod gibt es im Spiel keine Möglichkeit, einem Server beizutreten.

## Verbindungsdaten finden

> [!IMPORTANT]
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Game Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers. Einen Query Port gibt es bei DarkMultiPlayer nicht – der Server nutzt genau einen Port.

## DMP-Client installieren

1. **Client herunterladen**\
   Öffne [d-mp.org/downloads](https://d-mp.org/downloads) und lade die Datei **DMPClient.zip** herunter.

2. **KSP-Ordner öffnen**\
   Öffne den Installationsordner von Kerbal Space Program. Bei Steam erreichst Du ihn über einen Rechtsklick auf das Spiel in Deiner Bibliothek und **Verwalten** → **Lokale Dateien durchsuchen**.

3. **Mod entpacken**\
   Entpacke das Archiv und kopiere aus `DMPClient/GameData/` den Ordner `DarkMultiPlayer` in den Ordner `GameData` Deiner KSP-Installation. Danach sieht der Pfad so aus:

   ```text
   [KSP-Ordner]/GameData/DarkMultiPlayer/
   ```

4. **Spiel starten**\
   Starte Kerbal Space Program. Im **Hauptmenü** erscheint jetzt das Fenster **DarkMultiPlayer** mit der installierten Version.

> [!WARNING]
> Client und Server müssen dieselbe DMP-Version verwenden. Passt sie nicht zusammen, lehnt der Server die Verbindung mit der Meldung **Protocol mismatch** ab. Lade den Client deshalb immer erneut von d-mp.org herunter, wenn Dein Server aktualisiert wurde.

> [!NOTE]
> Die aktuelle DMP-Version ist ausschließlich für **KSP 1.12.x** gebaut. Auf jeder anderen Spielversion schaltet sich die Mod selbst ab – im Hauptmenü erscheint dann kein DMP-Fenster, sondern eine Kompatibilitätswarnung von Kerbal Space Program.

## Server eintragen und beitreten

1. **Spielernamen festlegen**\
   Trage im DMP-Fenster im Feld **Player name** Deinen Namen ein. Er darf maximal 32 Zeichen lang sein.

   > [!NOTE]
   > Die Zeichen `< > : " / \ | ? * $` sind im Spielernamen nicht erlaubt. Reserviert sind außerdem die Namen `Initial`, `Shared` sowie der Konsolenname des Servers (standardmäßig `Server`).

2. **Server hinzufügen**\
   Klicke auf **Add**. Es erscheinen drei Eingabefelder:

   | Feld | Eintrag |
   |------|---------|
   | **Name** | Ein frei wählbarer Anzeigename für Deinen Server |
   | **Address** | Die IP-Adresse Deines Servers aus der Verwaltung |
   | **Port** | Der Game Port Deines Servers aus der Verwaltung |

   > [!WARNING]
   > Die Felder sind mit Standardwerten vorbelegt (`127.0.0.1` und ein Standard-Port). Ersetze beide Werte durch die Daten aus Deiner Verwaltung.

3. **Eintrag speichern**\
   Klicke auf **Add server**. Dein Server erscheint danach in der Serverliste des Clients.

4. **Verbinden**\
   Markiere den Eintrag in der Liste und klicke auf **Connect**. Der Eintrag bleibt gespeichert – beim nächsten Mal genügt Markieren und **Connect**.

## Server erscheint nicht in der öffentlichen Liste

Über die Schaltfläche **Servers** zeigt der DMP-Client eine öffentliche Serverliste an. Diese Liste stammt von zentralen Master-Servern, an die sich ein Server aktiv melden muss. Dein Server ist dort standardmäßig **nicht** eingetragen.

> [!NOTE]
> Trage Deinen Server deshalb wie oben beschrieben manuell mit IP-Adresse und Game Port ein. Das ist der vorgesehene Weg und funktioniert unabhängig von der öffentlichen Liste.

## Spielername und Schlüssel

Beim ersten Beitritt legt der Server eine Datei mit Deinem öffentlichen Schlüssel an:

```text
/Universe/Players/<Spielername>.txt
```

Ab diesem Moment ist der Spielername fest mit Deinem Schlüsselpaar verbunden. Niemand anderes kann den Namen dann noch verwenden. Deine Schlüssel liegen lokal unter:

```text
[KSP-Ordner]/GameData/DarkMultiPlayer/Plugins/Data/publickey.txt
[KSP-Ordner]/GameData/DarkMultiPlayer/Plugins/Data/privatekey.txt
```

> [!TIP]
> Wechselst Du den PC oder installierst Du KSP neu, kopiere beide Schlüsseldateien mit – sonst kannst Du Deinen bisherigen Spielernamen nicht mehr nutzen. Die Mod legt zusätzlich eine Sicherung unter `saves/DarkMultiPlayer/` ab. Sind die Schlüssel verloren, kann ein Admin die Datei `/Universe/Players/<Spielername>.txt` auf dem Server löschen – der Name ist danach wieder frei.

## Verbindung wird abgelehnt

| Meldung | Ursache |
|---------|---------|
| `Protocol mismatch` | Client und Server nutzen unterschiedliche DMP-Versionen |
| `Invalid username` | Der Spielername ist leer oder enthält nicht erlaubte Zeichen |
| `Kicked for using a reserved name` | Der Name ist reserviert (`Initial`, `Shared` oder der Konsolenname des Servers) |
| `Client already connected` | Ein Spieler mit diesem Namen ist bereits verbunden |
| `Public/private key mismatch` bzw. `Invalid key for user` | Der Spielername gehört auf diesem Server zu einem anderen Schlüsselpaar |
| `You were banned from the server!` | Du bist gebannt, siehe [Spieler kicken & bannen](/tutorials/gameserver/kerbal-space-program/kick-ban-players) |
| `Server is full` | Die maximale Spielerzahl des Servers ist erreicht |

> [!NOTE]
> **Welche Ports nutzt DarkMultiPlayer?**
>
> Ein DMP-Server belegt genau einen Port: den **Game Port** über TCP. Darüber laufen der Verbindungsaufbau und sämtliche Spieldaten. Einen separaten Query Port gibt es nicht. Welcher Game Port für Deinen Server gilt, siehst Du in der **Verwaltung**.

> [!TIP]
> Nutzt Dein Server Mods, brauchen alle Spieler dieselben Mods lokal in ihrem `GameData`-Ordner. Wie das eingerichtet wird, steht unter [Mods hinzufügen](/tutorials/gameserver/kerbal-space-program/add-mods).
