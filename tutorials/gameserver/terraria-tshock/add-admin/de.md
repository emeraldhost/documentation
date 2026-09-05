---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Terraria tShock Server hinzu"
description: "Admin auf einem Terraria tShock Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/terraria-tshock/add-mods", "gameserver/terraria-tshock/add-savegame", "gameserver/terraria-tshock/create-backup", "gameserver/terraria-tshock/download-savegame"]
---

tShock verwaltet Rechte über **Accounts und Gruppen**. Ein Admin ist also kein Eintrag in einer Datei, sondern ein Benutzerkonto aus Benutzername und Passwort, das einer Gruppe mit weitreichenden Rechten zugeordnet ist. Eine SteamID oder eine andere Spieler-ID brauchst Du dafür nicht.

> [!NOTE]
> Die Accounts liegen in der Datenbank `/tshock/tshock.sqlite`. Passwörter werden dort verschlüsselt gespeichert und lassen sich nicht auslesen – ein vergessenes Passwort setzt Du über die Serverkonsole neu.

## Admin über die Serverkonsole anlegen

Das ist der schnellste Weg, weil Du dafür weder einen Setup-Code noch ein bestehendes Konto benötigst. Die Serverkonsole hat auf einem tShock-Server immer die höchsten Rechte.

1. **Server starten**\
   Starte Deinen Server über die Verwaltung.

2. **Konsole öffnen**\
   Öffne die Serverkonsole in der Verwaltung.

3. **Account anlegen**\
   Gib folgenden Befehl ein:

   ```text
   user add <Benutzername> <Passwort> owner
   ```

   Ersetze `<Benutzername>` und `<Passwort>` durch Deine Wunschdaten und behalte `owner` als Gruppe bei.

   > [!NOTE]
   > In der Serverkonsole schreibst Du die Befehle **ohne** führenden Schrägstrich. Im Ingame-Chat brauchst Du ihn dagegen immer, also `/user add ...`.

4. **Server beitreten**\
   Tritt Deinem Server bei: [Server beitreten](/tutorials/gameserver/terraria-tshock/join-server).

5. **Anmelden**\
   Melde Dich im Ingame-Chat an:

   ```text
   /login <Benutzername> <Passwort>
   ```

   Du hast jetzt Adminrechte und kannst alle Befehle Deiner Gruppe nutzen.

   > [!WARNING]
   > **Setup-Code abschalten**
   >
   > Hat tShock beim Start einen Setup-Code ausgegeben, bleibt dieser bis zum nächsten Serverstart gültig – auch dann, wenn Du Deinen Account über die Konsole angelegt hast. Gib deshalb nach der Anmeldung einmal `/setup` im Ingame-Chat ein. Damit wird das Setup-System sofort abgeschaltet und der Code gelöscht.

## Admin über den Setup-Code anlegen

Alternativ nutzt Du den Einrichtungsassistenten, den tShock beim ersten Start bereitstellt.

1. **Setup-Code auslesen**\
   Öffne die Serverkonsole in der Verwaltung. Beim Start steht dort ein Hinweis in dieser Form:

   ```text
   To setup the server, join the game and type /setup <Code>
   ```

   > [!TIP]
   > Der Code steht zusätzlich in der Datei `/tshock/setup-code.txt`, die Du per [SFTP](/tutorials/gameserver/establish-sftp-connection) öffnen kannst.

2. **Setup-Befehl eingeben**\
   Tritt Deinem Server bei und gib im Ingame-Chat ein:

   ```text
   /setup <Code>
   ```

   > [!WARNING]
   > Dieser Befehl funktioniert nur im Spiel, nicht in der Serverkonsole.

3. **Account anlegen**\
   Lege Dir jetzt Dein Konto an:

   ```text
   /user add <Benutzername> <Passwort> owner
   ```

4. **Anmelden**\
   Melde Dich mit Deinem neuen Konto an:

   ```text
   /login <Benutzername> <Passwort>
   ```

5. **Setup abschließen**\
   Gib zum Schluss noch einmal ein:

   ```text
   /setup
   ```

   Damit wird das Setup-System dauerhaft deaktiviert und der Setup-Code gelöscht.

   > [!IMPORTANT]
   > Schließe das Setup unbedingt ab. Solange das Setup-System aktiv ist, kann sich jeder, der den Code kennt, volle Rechte auf Deinem Server verschaffen.

## Accounts verwalten

Alle Befehle funktionieren im Ingame-Chat (mit `/`) und in der Serverkonsole (ohne `/`).

| Befehl | Beschreibung |
|--------|-------------|
| `user add <Benutzer> <Passwort> <Gruppe>` | Neuen Account anlegen |
| `user del <Benutzer>` | Account löschen |
| `user password <Benutzer> <neues Passwort>` | Passwort ändern |
| `user group <Benutzer> <neue Gruppe>` | Account einer anderen Gruppe zuordnen |

> [!NOTE]
> Passwörter müssen standardmäßig mindestens vier Zeichen lang sein. Diesen Wert steuert `MinimumPasswordLength` in der Datei `/tshock/config.json`.

> [!TIP]
> **Automatische Anmeldung**
>
> Nach der ersten Anmeldung merkt sich tShock die Geräte-Kennung Deines Clients und meldet Dich künftig automatisch an, sobald Du dem Server beitrittst. Steuern lässt sich das über den Wert `DisableUUIDLogin` in der Datei `/tshock/config.json`.

## Gruppen und Rechte

tShock bringt von Haus aus mehrere Gruppen mit, deren Rechte von unten nach oben zunehmen:

| Gruppe | Rolle |
|--------|-------|
| `guest` | Gäste ohne Anmeldung |
| `default` | Angemeldete Spieler ohne Sonderrechte |
| `vip` | Spieler mit einzelnen Zusatzrechten |
| `newadmin` | Einsteiger-Moderation, z.B. kicken |
| `admin` | Vollwertige Moderation inklusive Banns |
| `trustedadmin` | Zusätzliche Verwaltungsrechte |
| `owner` | Nahezu alle Rechte – die richtige Wahl für Dich als Betreiber |
| `superadmin` | Uneingeschränkte Rechte, fest in tShock eingebaut |

Eigene Gruppen und Rechte verwaltest Du mit folgenden Befehlen:

| Befehl | Beschreibung |
|--------|-------------|
| `group list` | Alle Gruppen anzeigen |
| `group listperm <Gruppe>` | Rechte einer Gruppe anzeigen |
| `group add <Name> [Rechte]` | Neue Gruppe anlegen |
| `group del <Name>` | Gruppe löschen |
| `group addperm <Gruppe> <Recht...>` | Rechte hinzufügen |
| `group delperm <Gruppe> <Recht...>` | Rechte entziehen |
| `group parent <Gruppe> <Elterngruppe>` | Rechte einer anderen Gruppe erben |
| `group prefix <Gruppe> <Text>` | Chat-Präfix festlegen |
| `group color <Gruppe> <R,G,B>` | Chat-Farbe festlegen |

> [!WARNING]
> Vergib die Gruppe `owner` nur an Personen, denen Du vollständig vertraust. Für Moderatoren reichen in der Regel `newadmin` oder `admin`.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/terraria-tshock/kick-ban-players).
