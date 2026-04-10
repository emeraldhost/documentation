---
description: Spieler auf einem Conan Exiles Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Conan Exiles Server

Du kannst Spieler über das Ingame-Admin-Panel kicken und bannen.

:::: warning Voraussetzung
Du musst Admin auf deinem Server sein. Hier findest du eine Anleitung, wie du einen [Admin hinzufügst](admin-hinzufuegen.md).
::::

## Spieler über das Admin-Panel kicken oder bannen

1. <b>Server beitreten</b><br>
   Tritt deinem Conan Exiles Server bei und melde dich als Admin an.

2. <b>Admin-Panel öffnen</b><br>
   Öffne das Admin-Panel im Spiel.

3. <b>Spielerliste öffnen</b><br>
   Navigiere zum Tab **Players**, um die Liste aller verbundenen Spieler zu sehen.

4. <b>Spieler auswählen</b><br>
   Wähle den Spieler aus, den du kicken oder bannen möchtest.

5. <b>Spieler kicken oder bannen</b><br>
   Klicke auf **Kick** oder **Ban**, um den Spieler zu entfernen.

:::: info Hinweis
Ein gekickter Spieler kann dem Server sofort wieder beitreten. Ein gebannter Spieler wird dauerhaft vom Server ausgeschlossen.
::::

## Spieler entbannen

Um einen Spieler zu entbannen, musst du die Blacklist-Datei manuell bearbeiten:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>blacklist.txt bearbeiten</b><br>
   Öffne die Datei `blacklist.txt` unter:

   ```
   /ConanSandbox/Saved/blacklist.txt
   ```

4. <b>Spieler entfernen</b><br>
   Entferne die Zeile mit der ID des Spielers, den du entbannen möchtest.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.
