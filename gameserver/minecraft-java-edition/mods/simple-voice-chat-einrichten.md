---
title: Simple Voice Chat auf deinem Minecraft Server einrichten
description: Schritt-für-Schritt-Anleitung, wie du Simple Voice Chat auf einem Minecraft Java Edition Server einrichtest
---

# Simple Voice Chat einrichten

Simple Voice Chat ermöglicht Proximity Voice Chat auf deinem Minecraft Server – Spieler können miteinander sprechen, je näher sie sich im Spiel sind.

::: warning Achtung
Simple Voice Chat benötigt einen **eigenen UDP-Port**. Verwende **nicht** den Standard-Port deines Servers!
:::

::: info Info
Alle Spieler, die den Voice Chat nutzen möchten, müssen den [Simple Voice Chat Mod](https://modrinth.com/plugin/simple-voice-chat) ebenfalls installiert haben.
:::

## Schritt 1: Mod/Plugin installieren

1. <strong>Lade [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat) für deine Server-Version herunter.</strong>
   - Für **Fabric/Forge**: Lade die Mod-Version herunter und lege sie in den `mods`-Ordner.
   - Für **Paper/Spigot/Bukkit**: Lade die Plugin-Version herunter und lege sie in den `plugins`-Ordner.

2. <strong>Starte deinen Server neu, damit die Config-Dateien erstellt werden.</strong>

## Schritt 2: Port freischalten

1. <strong>Öffne den Abschnitt "Netzwerk" in deiner Verwaltung.</strong>
   - Dort findest du eine Übersicht aller verfügbaren Ports.

2. <strong>Wähle einen freien Port aus und notiere ihn dir.</strong>

::: warning Wichtig
Verwende **nicht** den Standard-Port deines Servers! Simple Voice Chat benötigt einen separaten UDP-Port.
:::

## Schritt 3: Config-Datei anpassen

1. <strong>Navigiere im Datei-Browser zur Config-Datei von Simple Voice Chat.</strong>
   - **Fabric/Forge**: `config/voicechat/voicechat-server.properties`
   - **Paper/Spigot/Bukkit**: `plugins/voicechat/voicechat-server.properties`

2. <strong>Öffne die Datei und suche nach der Zeile:</strong>
   ```
   port=24454
   ```

3. <strong>Ersetze `24454` mit deinem gewählten Port aus Schritt 2.</strong>
   ```
   port=DEIN_PORT
   ```

4. <strong>Speichere die Änderungen.</strong>

::: tip Tipp
Die restlichen Einstellungen wie `bind_address` oder `voice_host` kannst du auf den Standardwerten belassen – diese funktionieren für die meisten Server.
:::

## Schritt 4: Server neu starten

1. <strong>Starte deinen Server neu, damit die Änderungen übernommen werden.</strong>

2. <strong>Überprüfe in der Server-Konsole, ob Simple Voice Chat erfolgreich gestartet wurde.</strong>
   - Du solltest eine Meldung sehen wie: `Voice chat server started on port XXXXX`
