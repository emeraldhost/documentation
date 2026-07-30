---
description: Spieler auf einem The Cenozoic Era Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem The Cenozoic Era Server

Spieler entfernst du auf deinem The Cenozoic Era Server direkt im Spiel per Chat-Befehl. Als Ziel gibst du dabei entweder den Benutzernamen oder die Net ID des Spielers an.

:::: info Hinweis
Um diese Befehle nutzen zu können, musst du in der `Game.ini` deines Servers als Owner eingetragen sein. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Befehle im Spiel nutzen

1. <b>Chat öffnen</b><br>
   Tritt deinem Server bei und öffne im Spiel den Chat.

2. <b>Spieler identifizieren</b><br>
   Mit dem folgenden Befehl erzwingst du die Anzeige der Namensschilder und siehst, wer sich gerade auf dem Server bewegt:

   ```
   /users
   ```

3. <b>Befehl ausführen</b><br>
   Gib den gewünschten Befehl mit führendem `/` ein, zum Beispiel:

   ```
   /kick Spielername
   ```

## Spieler kicken

```
/kick <Benutzername oder Net ID>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten. Ein Kick ist das richtige Mittel für Kleinigkeiten – etwa um einen Spieler auf die Serverregeln aufmerksam zu machen.

## Spieler bannen

```
/ban <Benutzername oder Net ID>
```

Der Spieler wird vom Server geworfen und kann sich nicht mehr verbinden, bis du den Bann wieder aufhebst.

## Bann aufheben

```
/unban <Benutzername oder Net ID>
```

:::: info Hinweis
Ein zeitlich begrenzter Bann ist für The Cenozoic Era nicht dokumentiert. Ein Bann gilt so lange, bis du ihn per `/unban` wieder aufhebst.
::::

## Weitere Befehle zur Moderation

| Befehl | Beschreibung |
|--------|-------------|
| `/users` | Erzwingt die Anzeige der Namensschilder |
| `/kick <Benutzername oder Net ID>` | Spieler vom Server trennen |
| `/ban <Benutzername oder Net ID>` | Spieler aussperren |
| `/unban <Benutzername oder Net ID>` | Bann aufheben |
| `/slay <Benutzername oder Net ID>` | Angegebenen Spieler töten |
| `/tp <Benutzername oder Net ID>` | Zum angegebenen Spieler teleportieren |
| `/bring <Benutzername oder Net ID>` | Angegebenen Spieler zu dir holen |

:::: tip Tipp
`/slay` ist die mildere Variante, wenn ein Spieler sich einen Vorteil erschlichen hat oder feststeckt: Der Spieler stirbt im Spiel, statt vom Server ausgesperrt zu werden. Eine komplette Liste der Admin-Befehle findest du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: warning Achtung
Für The Cenozoic Era ist **keine Ban-Datei** auf dem Server dokumentiert. Banns verwaltest du ausschließlich über die Befehle im Spiel – ein Eintrag oder eine Korrektur per SFTP ist nicht vorgesehen.
::::

:::: danger Wichtig
Notiere dir bei einem Bann den Benutzernamen beziehungsweise die Net ID des Spielers. Ohne diese Angabe kannst du den Bann später nicht gezielt per `/unban` wieder aufheben, da der Spieler nicht mehr auf dem Server erscheint.
::::
