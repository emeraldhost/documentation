---
slug: "java-mit-bedrock-verknuepfen"
language: "de"
title: "So aktivierst Du Bedrock-Crossplay auf einem Minecraft Java Edition Server"
description: "Crossplay auf einem Minecraft Java Edition Server aktivieren"
tags: []
date: "2025-08-09"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Java mit Bedrock verknüpfen"
sort: 34
related: ["gameserver/minecraft/upload-world", "gameserver/minecraft/use-tp-command", "gameserver/minecraft/setup-bluemap", "gameserver/minecraft/setup-dynmap"]
---

Mit den Plugins **GeyserMC** und **Floodgate** können Spieler der Minecraft Bedrock Edition (Smartphone, Konsole, Windows) auf Deinem Java-Server mitspielen – auch ohne Java-Account.

> [!WARNING]
> GeyserMC benötigt einen **eigenen Port**. Verwende **nicht** den Standard-Port Deines Servers!

## Schritt 1: Plugins installieren

1. **Plugins herunterladen**\
   Lade die **Spigot**-Version von [GeyserMC](https://geysermc.org/download?project=geyser) und [Floodgate](https://geysermc.org/download?project=floodgate) herunter.

2. **Plugins hochladen**\
   Lade beide Dateien in den Ordner `plugins` hoch. Falls Du den Ordner nicht siehst, starte Deinen Server einmal, damit er erstellt wird.

3. **Server neu starten**\
   Starte Deinen Server neu, damit die Config-Dateien erstellt werden.

> [!NOTE]
> Läuft Dein Server **nicht** auf der aktuellen Minecraft-Version, installiere zusätzlich [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/), damit neuere Bedrock-Clients beitreten können.

## Schritt 2: Port freischalten

1. **Netzwerk öffnen**\
   Öffne den Abschnitt „Netzwerk“ in Deiner Verwaltung. Dort findest Du eine Übersicht aller verfügbaren Ports.

2. **Port auswählen**\
   Wähle einen freien Port aus und notiere ihn Dir.

> [!WARNING]
> **Wichtig**
>
> Verwende **nicht** den Standard-Port Deines Servers! Nutzt Du weitere Plugins mit eigenem Port (z.B. [Simple Voice Chat](/tutorials/gameserver/minecraft/setup-simple-voice-chat)), benötigt jedes seinen eigenen Port.

## Schritt 3: GeyserMC konfigurieren

1. **Config öffnen**\
   Öffne im Datei-Browser die Datei `plugins/Geyser-Spigot/config.yml`.

2. **Port eintragen**\
   Suche im Abschnitt `bedrock:` die Zeile `port:` und trage Deinen gewählten Port aus Schritt 2 ein:

   ```yaml
   bedrock:
     port: DEIN_PORT
   ```

3. **Auth-Type prüfen**\
   Suche im Abschnitt `java:` die Zeile `auth-type:` und stelle sicher, dass sie auf `floodgate` steht:

   ```yaml
   java:
     auth-type: floodgate
   ```

4. **Änderungen speichern**\
   Speichere die Datei.

> [!TIP]
> Die übrigen Einstellungen kannst Du auf den Standardwerten belassen – `address: 0.0.0.0` und `clone-remote-port: false` sind bereits korrekt.

## Schritt 4: Chat für Bedrock-Spieler erlauben

1. **Datei öffnen**\
   Öffne die Datei `server.properties`.

2. **Eintrag ändern**\
   Suche nach `enforce-secure-profile=true` und ändere den Wert auf `false` – andernfalls können Bedrock-Spieler nicht chatten:

   ```text
   enforce-secure-profile=false
   ```

3. **Server neu starten**\
   Speichere die Datei und starte Deinen Server neu, damit alle Änderungen aktiv werden.

## Schritt 5: Mit Bedrock verbinden

1. **Server hinzufügen**\
   Starte Minecraft Bedrock Edition, klicke auf **Spielen**, wechsle in den Reiter **Server** und wähle **Server hinzufügen**.

2. **Verbindungsdaten eintragen**\
   Trage als **Serveradresse** die IP-Adresse Deines Servers ein und ersetze den vorausgefüllten Port `19132` durch **Deinen gewählten Port** aus Schritt 2.

3. **Verbinden**\
   Speichere den Server und verbinde Dich.

> [!NOTE]
> Bedrock-Spieler erscheinen auf dem Server standardmäßig mit einem `.` vor dem Namen – so kommt es nicht zu Konflikten mit Java-Accounts.

> [!TIP]
> **Verbindung testen**
>
> In der Server-Konsole kannst Du mit `geyser connectiontest <Server-IP> <Port>` prüfen, ob Dein Bedrock-Port erreichbar ist.

> [!WARNING]
> **Hinweis für bestehende Setups**
>
> Nach älteren Anleitungen wurde die Datei `key.pem` aus dem Floodgate-Ordner in den Geyser-Ordner kopiert. Das ist **nicht mehr nötig** – lösche eine dort vorhandene Kopie, da sie zu Verbindungsfehlern führen kann.
