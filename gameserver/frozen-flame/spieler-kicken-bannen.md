---
description: Spieler auf einem Frozen Flame Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Frozen Flame Server

Spieler entfernst du auf einem Frozen Flame Server über **RCON**. Ein Befehl, mit dem du Spieler direkt im Spiel kickst oder bannst, ist nicht dokumentiert.

:::: info Hinweis
Wie du dich mit RCON verbindest, erfährst du unter [Adminrechte nutzen](admin-hinzufuegen.md). Denk daran, dass das Passwort im Format `admin:<RCON-Passwort>` eingegeben wird.
::::

## Spieler kicken oder bannen

1. <b>Mit RCON verbinden</b><br>
   Verbinde dich mit einem RCON-Client mit deinem Server – siehe [Adminrechte nutzen](admin-hinzufuegen.md).

2. <b>PlayerID ermitteln</b><br>
   Lass dir die verbundenen Spieler mit ihren IDs anzeigen:

   ```
   Admin_GetOnlinePlayers
   ```

   Spieler, die gerade nicht online sind, findest du über die gespeicherten Profile:

   ```
   Admin_ListUserProfiles
   ```

3. <b>Befehl ausführen</b><br>
   Setze den gewünschten Befehl mit der PlayerID ab, zum Beispiel:

   ```
   Admin_KickPlayer 123456789 Regelverstoss
   ```

:::: info Hinweis
Die spitzen Klammern in den folgenden Befehlen sind reine Platzhalter – tippe sie nicht mit ein.
::::

## Spieler kicken

```
Admin_KickPlayer <PlayerID> <Grund>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```
Admin_Ban <PlayerID> <Sekunden> <Grund>
```

Die Dauer des Banns gibst du in **Sekunden** an. `Admin_Ban 123456789 3600 Griefing` sperrt den Spieler also für eine Stunde aus.

:::: warning Achtung
Frozen Flame kennt keinen dokumentierten Wert für einen dauerhaften Bann. Werte wie `0` oder `-1` sind nicht belegt und können unerwartet wirken. Möchtest du einen Spieler auf unbestimmte Zeit aussperren, trage stattdessen eine entsprechend große Sekundenzahl ein – zum Beispiel `31536000` für ein Jahr.
::::

## Bann aufheben

```
Admin_Unban <PlayerID>
```

:::: info Hinweis
Eine Datei mit gebannten Spielern ist nicht dokumentiert. Banns hebst du deshalb immer über RCON auf – notiere dir die PlayerID, bevor du einen Spieler bannst.
::::

## Spieler im Chat stummschalten

```
Admin_Chatban <PlayerID> <Sekunden> <Grund>
```

```
Admin_ChatUnban <PlayerID>
```

Auch hier gibst du die Dauer in Sekunden an.

## Profil entfernen

```
Admin_RemoveUserProfile <PlayerID>
```

```
Admin_RemoveProfile <PlayerID>
```

:::: danger Wichtig
`Admin_RemoveProfile` entfernt den Spieler **inklusive seiner Speicherdaten** – sein Fortschritt auf deinem Server ist damit weg. `Admin_RemoveUserProfile` entfernt nur das Profil. Erstelle vorher ein [Backup](backup-erstellen.md), wenn du dir nicht sicher bist.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `Admin_GetOnlinePlayers` | Verbundene Spieler mit ihrer PlayerID anzeigen |
| `Admin_ListUserProfiles` | Gespeicherte Spielerprofile auflisten |
| `Admin_KickPlayer <PlayerID> <Grund>` | Spieler vom Server trennen |
| `Admin_Ban <PlayerID> <Sekunden> <Grund>` | Spieler für die angegebene Zeit aussperren |
| `Admin_Unban <PlayerID>` | Bann aufheben |
| `Admin_Chatban <PlayerID> <Sekunden> <Grund>` | Spieler im Chat stummschalten |
| `Admin_ChatUnban <PlayerID>` | Stummschaltung aufheben |
| `Admin_RemoveUserProfile <PlayerID>` | Profil des Spielers entfernen |
| `Admin_RemoveProfile <PlayerID>` | Spieler inklusive Speicherdaten entfernen |
| `Admin_ChatMessage [Nachricht]` | Nachricht an alle Spieler senden |

:::: info Hinweis
In welchem Format die PlayerID vorliegt, ist nicht dokumentiert. Nutze deshalb immer die IDs, die dir `Admin_GetOnlinePlayers` oder `Admin_ListUserProfiles` ausgeben, statt eine ID aus einer anderen Quelle einzutragen.
::::
