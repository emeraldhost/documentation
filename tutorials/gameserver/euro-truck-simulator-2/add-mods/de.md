---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Euro Truck Simulator 2 Server hinzu"
description: "Schritt-für-Schritt-Anleitung, wie Du Steam Workshop- und externe Mods auf einem Euro Truck Simulator 2-Server installierst und aktivierst."
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["euro-truck-simulator-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/euro-truck-simulator-2/add-admin", "gameserver/euro-truck-simulator-2/create-backup", "gameserver/euro-truck-simulator-2/deactivate-player-damage", "gameserver/euro-truck-simulator-2/join-server"]
---

## Steam Workshop-Mods Hinzufügen

1. **Spiel starten**\
   Starte Euro Truck Simulator 2.

2. **Mods öffnen**\
   Wähle im Hauptmenü den Punkt „Mods“ aus.

3. **Workshop öffnen**\
   Klicke oben rechts auf „Steam Workshop“.

4. **Mods abonnieren**\
   Durchsuche den Workshop und klicke auf „Abonnieren“, um die gewünschten Mods herunterzuladen.

5. **Mod-Manager öffnen**\
   Gehe zurück zum Mod-Manager im Spiel.

6. **Mods aktivieren**\
   Aktiviere die heruntergeladenen Mods und klicke auf „Änderungen bestätigen“.

7. **Konsole öffnen**\
   Starte eine Fahrt und öffne die Konsole mit der Taste `~` oder ``` ` ```.

8. **Befehl eingeben**\
   Gib den folgenden Befehl in der Konsole ein:

   ```text
   export_server_packages
   ```

9. **Spiel beenden**\
   Warte, bis der Vorgang abgeschlossen ist, und beende das Spiel.

10. **SFTP verbinden**\
    Verbinde Dich per SFTP mit Deinem Server. Hier findest Du eine Anleitung, wie das geht: [Anleitung](/tutorials/gameserver/establish-sftp-connection).

11. **Verzeichnis öffnen**\
    Navigiere zu folgendem Verzeichnis:

    ```text
    .local/share/Euro Truck Simulator 2
    ```

12. **Dateien hochladen**\
    Lade die erstellten Dateien `server_packages.sii` und `server_packages.dat` hoch, die Du unter folgendem Pfad findest:

    ```text
    Dokumente/Euro Truck Simulator 2
    ```

13. **Server neustarten**\
    Starte den Server neu und trete dem Server bei.

## Externe Mods hinzufügen

1. **Mods herunterladen**\
   Lade die gewünschten Mods von Plattformen wie Modhub oder anderen Quellen herunter.

2. **Mods kopieren**\
   Kopiere die Mods in Dein lokales Mod-Verzeichnis, das Du unter folgendem Pfad findest:

   ```text
   Dokumente/Euro Truck Simulator 2/mod
   ```

3. **Spiel starten**\
   Starte Euro Truck Simulator 2.

4. **Mods öffnen**\
   Wähle im Hauptmenü den Punkt „Mods“ aus.

5. **Mods aktivieren**\
   Aktiviere die zuvor hinzugefügten Mods und klicke auf „Änderungen bestätigen“.

6. **Konsole öffnen**\
   Starte eine Fahrt und öffne die Konsole mit der Taste `~` oder ``` ` ```.

7. **Befehl eingeben**\
   Gib den folgenden Befehl in der Konsole ein:

   ```text
   export_server_packages
   ```

8. **Spiel beenden**\
   Warte, bis der Vorgang abgeschlossen ist, und beende das Spiel.

9. **SFTP verbinden**\
   Verbinde Dich per SFTP mit Deinem Server. Hier findest Du eine Anleitung, wie das geht: [Anleitung](/tutorials/gameserver/establish-sftp-connection).

10. **Verzeichnis öffnen**\
    Navigiere zu folgendem Verzeichnis:

    ```text
    .local/share/Euro Truck Simulator 2
    ```

11. **Dateien hochladen**\
    Lade die erstellten Dateien `server_packages.sii` und `server_packages.dat` hoch, die Du unter folgendem Pfad findest:

    ```text
    Dokumente/Euro Truck Simulator 2
    ```

12. **Server neustarten**\
    Starte den Server neu und trete dem Server bei.
