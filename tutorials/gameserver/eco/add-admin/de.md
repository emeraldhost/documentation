---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Eco Server hinzu"
description: "Admin auf einem Eco Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/eco/add-mods", "gameserver/eco/add-savegame", "gameserver/eco/create-backup", "gameserver/eco/download-savegame"]
---

Admins werden auf einem Eco Server in der Datei `/Configs/Users.eco` eingetragen. Wer dort gelistet ist, darf die Admin-Chatbefehle des Servers nutzen.

> [!IMPORTANT]
> Eingetragen wird immer eine **ID** – entweder die **SLG-ID** des Spielers oder seine **SteamID64**. Ein reiner Benutzername funktioniert nicht.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Eigene ID herausfinden

Deine SLG-ID zeigt Dir der Server direkt im Spiel an:

1. **Chat öffnen**\
   Drücke im Spiel `Enter`, um den Chat zu öffnen.

2. **Befehl eingeben**\
   Gib folgenden Befehl ein, um Deine eigene ID anzuzeigen:

   ```text
   /manage whoami
   ```

   Für andere Spieler funktionieren `/manage whois <Spielername>` sowie `/manage listusers` – letzterer zeigt alle dem Server bekannten Benutzer mit Namen und ID.

## Admin eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Konfigurationsdateien werden nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Users.eco öffnen**\
   Öffne folgende Datei:

   ```text
   /Configs/Users.eco
   ```

   > [!NOTE]
   > **Datei existiert nicht?**
   >
   > In `/Configs/` liegt zu jeder Konfiguration zusätzlich eine Datei mit der Endung `.eco.template`. Diese Vorlage enthält nur die Standardwerte und wird vom Server nicht gelesen. Fehlt `Users.eco`, kopiere `Users.eco.template` und benenne die Kopie in `Users.eco` um.

4. **ID eintragen**\
   Suche den Abschnitt `Admins` und trage die ID im Bereich `$values` ein:

   ```json
   "Admins": {
     "System.String": {
       "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
       "$values": [
         "76561198012345678"
       ]
     }
   }
   ```

   Die Zeile `$type` steht bereits in Deiner Datei – lass sie unverändert stehen und ergänze nur die IDs unter `$values`. Je nach Serverversion kann sie anders aussehen als im Beispiel.

   Mehrere Admins trägst Du durch Komma getrennt untereinander ein – hinter dem letzten Eintrag steht **kein** Komma:

   ```json
   "$values": [
     "76561198012345678",
     "76561198087654321"
   ]
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Beim Start werden die Adminrechte übernommen.

> [!WARNING]
> `Users.eco` muss gültiges JSON bleiben. Ein fehlendes oder überzähliges Komma reicht aus, damit die Datei nicht mehr eingelesen wird. Prüfe die Datei nach dem Bearbeiten deshalb mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/). Geht etwas schief, kannst Du Dir mit `Users.eco.template` den ursprünglichen Aufbau der Datei ansehen.

> [!NOTE]
> **Erster Admin**
>
> Der erste Admin lässt sich nur über die Datei eintragen. Die Chatbefehle zum Vergeben von Adminrechten setzen selbst bereits Adminrechte voraus.

## Weitere Admins im Spiel vergeben

Sobald Du Admin bist, kannst Du weitere Admins direkt im Spiel ernennen:

| Befehl | Beschreibung |
|--------|--------------|
| `/manage admin <NameOderID> [Grund]` | Zeigt die Adminliste an oder ernennt einen Benutzer zum Admin. Kurzform: `/admin` |
| `/manage removeadmin <NameOderID> [Grund]` | Entzieht einem Benutzer die Adminrechte |
| `/manage listadmins` | Zeigt alle Admins des Servers an |
| `/manage authlevel` | Zeigt Deine aktuelle Berechtigungsstufe an |

Als `<NameOderID>` akzeptieren die Befehle die Account-ID, SteamID, SLG-ID oder den Benutzernamen.

> [!NOTE]
> Diese Befehle gibst Du im **Chat des Spiels** ein. Ob sie sich auch über die Konsole in der Verwaltung absetzen lassen, ist nicht dokumentiert – nutze im Zweifel den Weg über den Chat oder die Konfigurationsdatei.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/eco/kick-ban-players).
