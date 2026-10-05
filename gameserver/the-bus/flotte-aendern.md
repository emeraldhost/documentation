---
description: Flotte auf einem The Bus Server ändern
---

# So änderst du die Flotte auf einem The Bus Server

Die Flotte legt fest, welche Busse auf deinem Server zur Verfügung stehen. Du kannst die aktive Flotte über das **Admin-Menü** oder per **Befehl** ändern. Dafür benötigst du Owner- oder Admin-Rechte, siehe [Admin hinzufügen](admin-hinzufuegen.md).

## Flotte über das Admin-Menü ändern

1. <b>Admin-Menü öffnen</b><br>
   Öffne im Spiel das Pausenmenü und wähle das **Admin-Menü**.

2. <b>Flotte auswählen</b><br>
   Wähle unter **Flotte** die gewünschte Flotte aus den verfügbaren Optionen.

:::: info Hinweis
Seit Update 3.2 EA wird die im Admin-Menü gewählte Flotte gespeichert und bleibt auch nach einem Neustart deines Servers erhalten.
::::

## Flotte per Befehl ändern

Alternativ kannst du die Flotte über den Ingame-Chat wechseln. Welche Befehle du nutzen kannst, hängt von deinem Rang ab, siehe [Admin hinzufügen](admin-hinzufuegen.md).

Gib folgenden Befehl im Ingame-Chat ein:

```
/fleet <flotte>
```

Ersetze `<flotte>` durch die gewünschte Flotte.

:::: tip Tipp
Die genaue Angabe für `<flotte>` ist nicht offiziell dokumentiert. Eine Übersicht aller Befehle, die dir auf deinem Server zur Verfügung stehen, erhältst du mit `/commands`.
::::

## Flotten aus dem Workshop verwenden

Dein Server kann auch Flotten aus dem [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=491540) laden. Lade sie dazu wie andere Mods per [SFTP](../sftp-verbindung-herstellen.md) in den Ordner `/TheBus/Mods/` hoch. Wie das genau funktioniert, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md).

Starte deinen Server danach neu. Prüfe nach dem Start im Admin-Menü, ob die Flotte in der Auswahl erscheint.

:::: warning Achtung
Je nach Mod-Typ müssen auch alle Spieler die Flotte im Steam Workshop abonnieren, um deinem Server beitreten zu können. Welche Mod-Typen es gibt, erfährst du unter [Mod-Typen](mods-hinzufuegen.md#mod-typen).
::::

## Busse aus DLCs

:::: info Hinweis
Busse aus einem DLC, z.B. den Ebus 2.2, können nur Spieler auswählen und fahren, die das DLC selbst besitzen. Wie du DLCs auf deinem Server aktivierst oder deaktivierst, erfährst du unter [DLC aktivieren](dlc-aktivieren.md).
::::
