---
description: Spieler auf einem Nightingale Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Nightingale Server

Spieler entfernst du auf einem Nightingale Server **direkt im Spiel** über das Sozialmenü. Konsolen- oder Chat-Befehle für Kick und Bann gibt es nicht.

:::: info Hinweis
Du musst dafür im Spiel als Admin authentifiziert sein. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler kicken

1. <b>Admin-Modus aktivieren</b><br>
   Drücke `Esc`, wähle **Admin Mode: OFF**, gib das Admin-Passwort ein und bestätige mit **Confirm**.

2. <b>Sozialmenü öffnen</b><br>
   Drücke im Spiel die Taste `O`, um den **Social Screen** zu öffnen.

3. <b>Spieler auswählen</b><br>
   Suche in der Liste den Spieler heraus, den du entfernen möchtest.

4. <b>Entfernen</b><br>
   Wähle **Remove** und bestätige mit **Confirm**.

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

1. <b>Sozialmenü öffnen</b><br>
   Drücke als authentifizierter Admin die Taste `O`.

2. <b>Spieler auswählen</b><br>
   Suche in der Liste den Spieler heraus, den du aussperren möchtest.

3. <b>Bannen</b><br>
   Wähle **Ban** und bestätige mit **Confirm**.

Der Spieler wird sofort vom Server geworfen und kann sich nicht mehr verbinden.

:::: info Hinweis
Nightingale kennt keine zeitlich begrenzten Banns. Ein Bann gilt so lange, bis du ihn wieder aufhebst.
::::

## Bann aufheben

Ein Entbannen im Spiel gibt es nicht – dafür bearbeitest du die Datei mit dem Serverzustand.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Datei wird beim Beenden geschrieben und beim Start eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>ServerState.ini öffnen</b><br>
   Öffne folgende Datei:

   ```
   /NWX/Saved/Config/LinuxServer/ServerState.ini
   ```

4. <b>Eintrag entfernen</b><br>
   Suche die Zeile, die mit `Bans=` beginnt. Lösche innerhalb der Klammern den Eintrag des Spielers, den du entbannen möchtest. Alle übrigen Einträge und die Klammern selbst bleiben stehen.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Erstelle vor dem Bearbeiten ein [Backup](backup-erstellen.md) oder lade dir eine Kopie der Datei herunter. Eine beschädigte `ServerState.ini` kann dazu führen, dass der Server seinen Zustand nicht mehr laden kann. Findest du weder die Datei noch eine Zeile `Bans=`, wurde auf deinem Server bisher niemand gebannt – beides entsteht erst mit dem ersten Bann.
::::

:::: info Alle Banns auf einmal aufheben
Löschst du den kompletten Ordner `/NWX/Saved/Config/`, wird der gesamte Serverzustand zurückgesetzt und damit auch jeder Bann. Der Server legt den Ordner beim nächsten Start neu an.
::::

## Keine Konsolenbefehle

:::: warning Achtung
Nightingale bietet **kein RCON und keine Chat-Befehle** für die Serververwaltung. Die Konsole in der Verwaltung zeigt ausschließlich die Ausgaben des Servers an und nimmt keine Befehle entgegen. Kick und Bann laufen ausschließlich über den Social Screen im Spiel.
::::

## Keine Whitelist

:::: warning Achtung
Nightingale hat **keine Whitelist-Funktion**. Möchtest du deinen Server nur bestimmten Spielern zugänglich machen, setze in der Verwaltung ein Server-Passwort und gib es nur an diese Spieler weiter.
::::
