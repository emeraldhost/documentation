---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem CryoFall Server hinzu"
description: "Admin auf einem CryoFall Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/cryofall/add-mods", "gameserver/cryofall/add-savegame", "gameserver/cryofall/create-backup", "gameserver/cryofall/download-savegame"]
---

Admins heißen in CryoFall **Operatoren**. Eingetragen wird nicht die SteamID64, sondern der **In-Game-Name** des Spielers – genau so geschrieben, wie er im Hauptmenü unten rechts angezeigt wird.

> [!IMPORTANT]
> Die Operator-Befehle im Spiel funktionieren nur, wenn Du bereits Operator bist. Den **ersten** Operator kannst Du Dir deshalb nicht im Spiel selbst geben – dafür nutzt Du die Konsole in der Verwaltung oder die Konfigurationsdatei Deines Servers.

## Deinen Namen herausfinden

1. **CryoFall starten**\
   Starte CryoFall und bleibe im Hauptmenü.

2. **Namen ablesen**\
   Unten rechts im Hauptmenü steht Dein Accountname. Genau diese Schreibweise trägst Du gleich ein – auch Groß- und Kleinschreibung.

## Operator über die Konsole hinzufügen

Das ist der schnellste Weg und funktioniert im laufenden Betrieb.

1. **Konsole öffnen**\
   Öffne die Konsole Deines Servers über die Verwaltung.

2. **Befehl eingeben**\
   Gib den Befehl **ohne** vorangestellten Schrägstrich ein und bestätige mit Enter:

   ```text
   opAdd DeinName
   ```

   > [!WARNING]
   > `opAdd` kennt nur Spieler, die Deinen Server bereits einmal betreten haben. Ist Dein Server ganz neu, verbinde Dich zuerst einmal mit ihm – oder trage Dich direkt in die Konfigurationsdatei ein.

3. **Ergebnis prüfen**\
   Mit dem folgenden Befehl siehst Du alle eingetragenen Operatoren:

   ```text
   opList
   ```

## Operator über die Konfigurationsdatei hinzufügen

Alternativ trägst Du Operatoren direkt in die Serverkonfiguration ein.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Listen werden beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Konfiguration öffnen**\
   Öffne folgende Datei:

   ```text
   /Data/SettingsServer.xml
   ```

4. **Namen eintragen**\
   Trage die Namen im Bereich `<server>` durch Komma getrennt ein:

   ```xml
   <server_operators_list>DeinName,ZweiterName</server_operators_list>
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Weitere Operatoren im Spiel hinzufügen

Bist Du selbst Operator, vergibst Du weitere Rechte direkt im Spiel.

1. **Konsole öffnen**\
   Drücke im Spiel die Taste `~`, um die Konsole zu öffnen.

2. **Befehl eingeben**\
   Befehle beginnen im Spiel immer mit `/`:

   ```text
   /opAdd Spielername
   ```

   > [!TIP]
   > Die Konsole vervollständigt Befehle mit der Tab-Taste. Du musst Dir also nicht jeden Befehl merken.

## Moderatoren

Moderatoren dürfen Spieler verwalten – also kicken, bannen und stummschalten –, haben aber keinen vollen Operator-Zugriff.

```xml
<server_moderators_list>Name1,Name2</server_moderators_list>
```

> [!NOTE]
> Operatoren besitzen die Moderatoren-Rechte automatisch. Du musst sie also nicht zusätzlich in die Moderatoren-Liste eintragen.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/opAdd <Spielername>` | Spieler zum Operator machen |
| `/opList` | Alle Operatoren anzeigen |
| `/opRemove <Spielername>` | Operator-Rechte entziehen |
| `/moderatorAdd <Spielername>` | Spieler zum Moderator machen |
| `/moderatorList` | Alle Moderatoren anzeigen |
| `/moderatorRemove <Spielername>` | Moderator-Rechte entziehen |

> [!NOTE]
> **Langform der Befehle**
>
> Zu jedem dieser Befehle gibt es eine ausgeschriebene Variante, zum Beispiel `/admin.operator.add` statt `/opAdd`. Beide bewirken dasselbe.

## Was Operatoren zusätzlich dürfen

Als Operator kannst Du im Spiel über das Menü (Taste `Esc`) und die Schaltfläche **Edit** unter anderem die Beschreibung, die Willkommensnachricht und die Spielraten Deines Servers anpassen, ohne Dateien zu bearbeiten.

> [!WARNING]
> **Änderungen aus der Verwaltung**
>
> Servername, Beschreibung, Serverliste, maximale Spielerzahl, Speicherintervall und Anzahl der Speicherstände werden bei jedem Start aus der **Verwaltung** in die Datei `SettingsServer.xml` geschrieben. Änderst Du diese Werte in der Datei oder im Spiel, gehen sie beim nächsten Start verloren – stelle sie ausschließlich in der Verwaltung ein.

> [!TIP]
> Wie Du Spieler als Operator oder Moderator vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/cryofall/kick-ban-players).
