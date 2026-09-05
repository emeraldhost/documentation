---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Space Station 14 Server hinzu"
description: "Admin auf einem Space Station 14 Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["space-station-14"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/space-station-14/create-backup", "gameserver/space-station-14/join-server", "gameserver/space-station-14/kick-ban-players"]
---

Adminrechte speichert Space Station 14 **in der Datenbank Deines Servers**, nicht in einer Textdatei. Eine Datei wie `admins.txt` gibt es nicht. Damit Du überhaupt den ersten Admin anlegen kannst, trägst Du Dich zunächst über die `server_config.toml` als Host ein. Alle weiteren Admins vergibst Du anschließend bequem über ein Fenster im Spiel.

> [!NOTE]
> Space Station 14 nutzt keine SteamID. Eingetragen wird Dein **SS14-Benutzername** – der Name, mit dem Du Dich im Launcher anmeldest – oder alternativ Deine **User-ID** (eine GUID).

## Ersten Admin einrichten

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Konfiguration wird nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **server_config.toml öffnen**\
   Öffne die Datei `server_config.toml`. Sie liegt im Hauptverzeichnis Deines Servers, neben der Server-Anwendung `Robust.Server`.

4. **Benutzernamen eintragen**\
   Ergänze folgenden Abschnitt und ersetze den Platzhalter durch Deinen SS14-Benutzernamen:

   ```toml
   [console]
   login_host_user = "DeinSS14Name"
   loginlocal = false
   ```

   Der eingetragene Benutzer erhält beim Verbinden automatisch volle Hostrechte (`+HOST`) – das entspricht dem Befehl `promotehost`.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

6. **Beitreten**\
   Verbinde Dich mit Deinem Server. Du bist nun Host und kannst alle weiteren Admins vergeben.

> [!WARNING]
> `loginlocal` ist standardmäßig aktiviert und gibt jeder Verbindung von `127.0.0.1` beziehungsweise `::1` automatisch Hostrechte. Auf einem gemieteten Server gehört diese Adresse nicht Dir allein – setze den Wert deshalb wie oben gezeigt auf `false`.

## Weitere Admins über das Berechtigungsfenster vergeben

1. **Konsole öffnen**\
   Drücke im Spiel `~`, um die Konsole zu öffnen.

2. **Berechtigungsfenster öffnen**\
   Gib folgenden Befehl ein:

   ```text
   permissions
   ```

   Es öffnet sich das **Permissions Panel** mit den Reitern `Admins` und `Admin Ranks`.

3. **Admin anlegen**\
   Klicke auf **Add Admin** und trage im Feld `Username/User ID` den SS14-Benutzernamen oder die User-ID des Spielers ein.

4. **Rechte auswählen**\
   Wähle die gewünschten Berechtigungen aus. Optional kannst Du im Feld `Custom title` einen eigenen Titel vergeben – bleibt es leer, wird der Titel des Rangs übernommen. Mit der Checkbox `Suspended?` setzt Du einen Admin vorübergehend außer Kraft, ohne ihn zu löschen.

5. **Speichern**\
   Bestätige die Eingabe. Die Rechte gelten sofort und bleiben dauerhaft gespeichert.

> [!NOTE]
> Über den Reiter `Admin Ranks` und die Schaltfläche **Add Admin rank** legst Du Rollen mit festen Rechtebündeln an, die Du anschließend mehreren Admins zuweisen kannst.

> [!WARNING]
> Der Befehl `permissions` funktioniert nur in der Konsole im Spiel, nicht in der Server-Konsole. Außerdem brauchst Du dafür die Berechtigung `Permissions` beziehungsweise `+HOST`.

## Berechtigungen im Überblick

| Berechtigung | Bedeutung |
|--------------|-----------|
| `Admin` | Grundlegende Adminbefehle |
| `Ban` | Spieler bannen und Banns aufheben |
| `Debug` | Debug-Befehle |
| `Fun` | Befehle mit direkter Auswirkung auf das Spielgeschehen |
| `Permissions` | Andere Admins verwalten (Berechtigungsfenster) |
| `Server` | Server steuern, etwa neu starten oder den Rundentyp ändern |
| `Spawn` | Objekte und Kreaturen erzeugen |
| `VarEdit` | Variablen von Objekten direkt bearbeiten (View Variables) |
| `Mapping` | Umfangreiche Mapping-Eingriffe |
| `Logs` | Admin-Logs einsehen |
| `Round` | Laufende Runde beeinflussen, etwa Map oder Preset erzwingen |
| `+HOST` | Vollzugriff auf sämtliche Bereiche |

Darüber hinaus gibt es weitere Berechtigungen, etwa für den Admin-Chat, die Admin-Hilfe oder die Notizen. Im Berechtigungsfenster siehst Du jeweils die vollständige Liste.

> [!IMPORTANT]
> `+HOST`-Rechte sind **extrem gefährlich**. Wer `+HOST` besitzt, kann Deinen Server vollständig übernehmen. Vergib diese Berechtigung nur an Personen, denen Du uneingeschränkt vertraust.

## Alternative über die Server-Konsole

Läuft Dein Server bereits und Du möchtest kurzfristig jemanden zum Host machen, geht das auch über die Server-Konsole:

```text
promotehost <Spielername>
```

Der Befehl erwartet genau ein Argument – den Benutzernamen eines verbundenen Spielers – und vergibt die Rechte nur **vorübergehend**. Er funktioniert ausschließlich in der Server-Konsole, nicht im Spiel.

> [!NOTE]
> Ob die Konsole in der Verwaltung Eingaben an den Server durchreicht, hängt von Deinem Server ab. Funktioniert der Befehl nicht, nutze den Weg über `login_host_user` in der `server_config.toml`.

## Adminfunktionen im Spiel

| Taste bzw. Befehl | Funktion |
|-------------------|----------|
| `F7` | Adminmenü öffnen |
| `F1` | Admin-Hilfe (Ahelp) mit den Spielermeldungen öffnen |
| `~` | Konsole öffnen |
| `adminwho` | Zeigt, welche Admins gerade online sind |
| `deadmin` | Legt Deine Adminrechte vorübergehend ab |
| `readmin` | Nimmt Deine Adminrechte wieder auf |
| `adminnotes <Benutzername>` | Zeigt die Notizen zu einem Spieler |

> [!NOTE]
> Space Station 14 hat kein Mod-System. Anpassungen an Deinem Server nimmst Du ausschließlich über die `server_config.toml` vor.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/space-station-14/kick-ban-players).
