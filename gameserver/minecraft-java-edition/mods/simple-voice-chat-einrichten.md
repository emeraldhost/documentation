---
description: Simple Voice Chat auf einem Minecraft Java Edition Server einrichten
---

# So richtest du Simple Voice Chat auf einem Minecraft Java Server ein

Simple Voice Chat ermöglicht Proximity Voice Chat auf deinem Minecraft Server – Spieler können miteinander sprechen, je näher sie sich im Spiel sind.

:::: warning Achtung
Simple Voice Chat benötigt einen **eigenen UDP-Port**. Verwende **nicht** den Standard-Port deines Servers!
::::

:::: info Info
Alle Spieler, die den Voice Chat nutzen möchten, müssen den [Simple Voice Chat Mod](https://modrinth.com/plugin/simple-voice-chat) ebenfalls installiert haben.
::::

## Schritt 1: Mod/Plugin installieren

1. <b>Mod herunterladen</b><br>
   Lade [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat) für deine Server-Version herunter.
   - Für **Fabric/Forge**: Lade die Mod-Version herunter und lege sie in den `mods`-Ordner.
   - Für **Paper/Spigot/Bukkit**: Lade die Plugin-Version herunter und lege sie in den `plugins`-Ordner.

2. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Config-Dateien erstellt werden.

## Schritt 2: Port freischalten

1. <b>Netzwerk öffnen</b><br>
   Öffne den Abschnitt "Netzwerk" in deiner Verwaltung. Dort findest du eine Übersicht aller verfügbaren Ports.

2. <b>Port auswählen</b><br>
   Wähle einen freien Port aus und notiere ihn dir.

:::: warning Wichtig
Verwende **nicht** den Standard-Port deines Servers! Simple Voice Chat benötigt einen separaten UDP-Port.
::::

## Schritt 3: Config-Datei anpassen

1. <b>Config-Datei öffnen</b><br>
   Navigiere im Datei-Browser zur Config-Datei von Simple Voice Chat.
   - **Fabric/Forge**: `config/voicechat/voicechat-server.properties`
   - **Paper/Spigot/Bukkit**: `plugins/voicechat/voicechat-server.properties`

2. <b>Port-Zeile suchen</b><br>
   Öffne die Datei und suche nach der Zeile:
   ```
   port=24454
   ```

3. <b>Port ersetzen</b><br>
   Ersetze `24454` mit deinem gewählten Port aus Schritt 2.
   ```
   port=DEIN_PORT
   ```

4. <b>Änderungen speichern</b><br>
   Speichere die Datei.

:::: tip Tipp
Die restlichen Einstellungen wie `bind_address` oder `voice_host` kannst du auf den Standardwerten belassen – diese funktionieren für die meisten Server.
::::

## Schritt 4: Server neu starten

1. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Änderungen übernommen werden.

2. <b>Konsole prüfen</b><br>
   Überprüfe in der Server-Konsole, ob Simple Voice Chat erfolgreich gestartet wurde. Du solltest eine Meldung sehen wie: `Voice chat server started on port XXXXX`
