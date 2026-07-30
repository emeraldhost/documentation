---
description: Einem Longvinter Server beitreten
---

# So trittst du deinem Longvinter Server bei

Longvinter bietet im Hauptmenü einen Serverbrowser. Darin gibt es die Funktion **Connect by IP**, über die du dich direkt mit deinem eigenen Server verbindest. Zum Verbinden verwendest du dabei den **Game Port**, nicht den Query Port.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und die Ports deines Servers findest du in der **Verwaltung**. Für den Beitritt benötigst du die IP-Adresse und den **Game Port**. Der Query Port wird nur dafür verwendet, dass dein Server in der öffentlichen Serverliste erscheint – über ihn verbindest du dich nicht.
::::

## Über Connect by IP verbinden

Die Direktverbindung ist der zuverlässigste Weg auf deinen Server.

1. <b>Longvinter starten</b><br>
   Starte Longvinter und warte, bis das Hauptmenü geladen ist.

2. <b>Serverbrowser öffnen</b><br>
   Wähle im Hauptmenü den **Server Browser**.

3. <b>Connect by IP öffnen</b><br>
   Klicke oben rechts über der Serverliste auf **Connect by IP**.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   <IP-Adresse>:<Game Port>
   ```

   :::: warning Achtung
   Trage hier den **Game Port** aus der Verwaltung ein. Mit dem Query Port schlägt die Verbindung fehl.
   ::::

5. <b>Verbinden</b><br>
   Bestätige die Eingabe mit Enter beziehungsweise über die Verbinden-Schaltfläche.

## Über die Serverliste beitreten

Dein Server erscheint zusätzlich in der Serverliste im **Server Browser**. Suche dort nach dem Namen deines Servers und tritt ihm per Klick bei.

:::: info Hinweis
Damit dein Server in der Liste auftaucht, muss der **Query Port** erreichbar sein. Wird er dort nicht angezeigt, nutze stattdessen **Connect by IP** – dieser Weg funktioniert unabhängig davon, ob dein Server gelistet wird.
::::

## Passwortgeschützter Server

Hat dein Server ein Passwort, wirst du beim Beitreten danach gefragt.

:::: warning Achtung
Das Serverpasswort von Longvinter darf ausschließlich aus Buchstaben und Zahlen bestehen. Sonderzeichen werden nicht unterstützt und können dazu führen, dass niemand mehr beitreten kann.
::::

## Server wird in der falschen Region angezeigt

:::: info Hinweis
Longvinter sortiert Server in der Serverliste nach Region. Wird dein Server in der falschen Region angezeigt, lässt sich das über den Schlüssel `ServerRegion` in der Konfigurationsdatei deines Servers korrigieren:

```
/Longvinter/Saved/Config/LinuxServer/Game.ini
```

Mögliche Werte sind `EU`, `NA`, `SA`, `AS` und `AU`. Prüfe zuerst, ob deine **Verwaltung** dafür bereits ein eigenes Feld anbietet. Stoppe deinen Server, bevor du die Datei bearbeitest – siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## "Continue" führt auf den falschen Server

:::: info Hinweis
Über **Continue** verbindest du dich im Hauptmenü erneut mit dem zuletzt gespielten Server. Die Entwickler führen dazu einen bekannten Fehler: Die Schaltfläche arbeitet nicht immer zuverlässig und kann dich auf einen falschen Server bringen. Das liegt nicht an deinem Server – dein Fortschritt bleibt erhalten. Verbinde dich in diesem Fall einfach wieder über **Connect by IP** oder über die Serverliste.
::::

## Welche Ports nutzt Longvinter?

:::: info Hinweis
Ein Longvinter-Server belegt zwei Ports:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| Game Port | UDP | Spieldaten – hierüber verbinden sich die Spieler mit deinem Server |
| Query Port | TCP und UDP | Serverabfrage – damit dein Server in der Serverliste erscheint |

Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**.
::::

:::: warning Achtung
Longvinter basiert auf der Unreal Engine und überträgt die Spieldaten ausschließlich über **UDP**. Ein zusätzlicher TCP-Port für den Game Port ist nicht nötig – Anleitungen, die das behaupten, sind falsch.
::::
