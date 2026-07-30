---
description: "Admin auf einem s&box Server hinzufügen"
---

# So fügst du einen Admin auf deinem s&box Server hinzu

Adminrechte vergibst du auf einem s&box Server über die Datei `users.json`. Eingetragen wird die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Admin hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>users.json öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```
   /config/users.json
   ```

4. <b>Spieler eintragen</b><br>
   Die Datei enthält eine Liste von Spielern. Trage die SteamID64 und die gewünschten Rechte ein:

   ```json
   [
     {
       "SteamId": "76561198012345678",
       "Claims": [ "admin" ],
       "Name": "Beispielspieler"
     }
   ]
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Aufbau der Datei

| Feld | Bedeutung |
|------|-----------|
| `SteamId` | SteamID64 des Spielers. Sie entscheidet, wer die Rechte bekommt. |
| `Claims` | Liste der Berechtigungen, die dem Spieler zugewiesen werden |
| `Name` | Reine Beschriftung für dich – sie hat keine Auswirkung auf die Rechte |

Mehrere Admins trägst du als weitere Einträge in dieselbe Liste ein, getrennt durch ein Komma:

```json
[
  {
    "SteamId": "76561198012345678",
    "Claims": [ "admin" ],
    "Name": "Spieler 1"
  },
  {
    "SteamId": "76561198087654321",
    "Claims": [ "admin" ],
    "Name": "Spieler 2"
  }
]
```

:::: warning Achtung
Die Datei muss gültiges JSON sein. Ein fehlendes oder überzähliges Komma reicht aus, damit die gesamte Liste nicht eingelesen wird und niemand Adminrechte erhält.
::::

## Welche Claims gibt es?

Die Einträge unter `Claims` sind freie Textwerte. Welche davon tatsächlich etwas bewirken, entscheidet der Spielmodus, der auf deinem Server läuft.

:::: danger Wichtig
Im offiziellen Sandbox-Modus (`facepunch.sandbox`) wird ausschließlich der Claim `admin` ausgewertet. Er schaltet unter anderem das Kicken und Bannen im Spiel sowie das Aufräumen der Welt frei. In der offiziellen Dokumentation tauchen Beispiele wie `kick`, `ban` oder `restart` auf – diese sind rein illustrativ und haben im Sandbox-Modus keine Wirkung. Trage daher `"Claims": [ "admin" ]` ein.
::::

:::: info Hinweis
Nutzt du einen Community-Spielmodus, prüfe in dessen Dokumentation, welche Claims dort erwartet werden. Du kannst einem Spieler auch mehrere Claims gleichzeitig geben: `"Claims": [ "admin", "moderator" ]`.
::::

## Änderungen im laufenden Betrieb

Der Server überwacht die Datei `users.json` und übernimmt Änderungen daran ohne Neustart.

:::: warning Achtung
Diese Überwachung wird nur eingerichtet, wenn die Datei beim Start des Servers bereits vorhanden war. Legst du `users.json` erstmalig an, während der Server läuft, musst du ihn einmal neu starten. Danach genügt das Speichern der Datei.
::::

:::: info Hinweis
Die Rechte aus der `users.json` greifen ausschließlich auf einem Dedicated Server wie deinem. Beim Spielen über eine lokal gehostete Runde ist stattdessen immer der Host der Admin.
::::

:::: tip Tipp
Wie du als Admin Spieler vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
