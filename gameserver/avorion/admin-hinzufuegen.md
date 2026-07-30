---
description: Admin auf einem Avorion Server hinzufügen
---

# So fügst du einen Admin auf deinem Avorion Server hinzu

Administratoren werden auf einem Avorion Server über die **SteamID64** festgelegt – eine 17-stellige Zahl, die mit `7656` beginnt. Du hast dafür drei Wege: die Verwaltung, die Datei `admin.xml` oder einen Befehl im laufenden Betrieb.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Über die Verwaltung

1. <b>Verwaltung öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zu den **Einstellungen**.

2. <b>SteamID64 eintragen</b><br>
   Trage im Feld **Admin ID** die SteamID64 der gewünschten Person ein. Das Feld nimmt eine einzelne SteamID64 auf und muss ausgefüllt sein, damit dein Server startet.

3. <b>Server neu starten</b><br>
   Speichere die Änderung und starte deinen Server neu. Die Adminrechte greifen erst nach einem Neustart.

:::: info Mehrere Admins
Über die Verwaltung legst du genau einen Admin fest. Möchtest du weitere Personen zu Admins machen, nutze den nächsten Abschnitt und trage sie direkt in der `admin.xml` ein.
::::

## Über die admin.xml

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>admin.xml öffnen</b><br>
   Wechsle in den Ordner deiner Galaxie – dort, wo auch `server.ini` und `modconfig.lua` liegen – und öffne die Datei:

   ```
   /galaxy/<Galaxie-Name>/admin.xml
   ```

   :::: info Hinweis
   Existiert die Datei noch nicht, starte deinen Server einmal, damit die Ordnerstruktur angelegt wird, und stoppe ihn anschließend wieder.
   ::::

4. <b>Admins eintragen</b><br>
   Trage pro Admin eine Zeile mit dem Spielernamen und der SteamID64 ein:

   ```xml
   <administrators>
       <admin name="Spielername" id="76561198012345678"/>
       <admin name="ZweiterAdmin" id="76561198087654321"/>
   </administrators>
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Im laufenden Betrieb

Du kannst Admins auch ohne Neustart setzen – entweder über die Konsole in der Verwaltung oder im Spielchat mit vorangestelltem `/`:

```
/admin -a --name <Spielername> --id <SteamID64>
```

Adminrechte wieder entziehen:

```
/admin -r --name <Spielername> --id <SteamID64>
```

:::: info Hinweis
Der Spieler muss mindestens einmal mit deinem Server verbunden gewesen sein, damit er auf diesem Weg hinzugefügt werden kann.
::::

:::: warning Achtung
Adminrechte umfassen unter anderem das Kicken und Bannen von Spielern sowie das Stoppen des Servers. Vergib sie nur an Personen, denen du vertraust.
::::

:::: tip Tipp
Welche Befehle dir als Admin zur Verfügung stehen und wie du Spieler entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
