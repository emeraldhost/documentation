---
description: "Spieler auf einem s&box Server kicken und bannen"
---

# So kickst und bannst du Spieler auf deinem s&box Server

Spieler entfernst du über die **Server-Konsole** in der Verwaltung deines Servers. Spieler mit dem Claim `admin` können im offiziellen Sandbox-Modus zusätzlich direkt im Spiel kicken und bannen – siehe [Admin hinzufügen](admin-hinzufuegen.md).

## Befehle über die Server-Konsole nutzen

1. <b>Server-Konsole öffnen</b><br>
   Öffne die Verwaltung deines Servers und wechsle zur **Server-Konsole**.

2. <b>Spieler anzeigen</b><br>
   Lass dir die verbundenen Spieler und ihre SteamID64 anzeigen:

   ```
   status
   ```

3. <b>Befehl ausführen</b><br>
   Gib den gewünschten Befehl ein, zum Beispiel:

   ```
   kick 76561198012345678 Regelverstoß
   ```

:::: info Hinweis
Diese Befehle funktionieren nur über die Server-Konsole. Ein normaler Spieler kann sie in der Spielkonsole zwar eintippen, sie bleiben dort aber wirkungslos.
::::

## Spieler kicken

```
kick <SteamID64 oder Namensteil> [Grund]
```

Als Ziel gibst du entweder die exakte SteamID64 oder einen Teil des Anzeigenamens an. Ein Kick trennt den Spieler sofort, er kann aber jederzeit wieder beitreten.

:::: tip Tipp
Namen mit Leerzeichen oder Sonderzeichen sind unzuverlässig als Suchbegriff. Nutze im Zweifel die SteamID64 aus der `status`-Ausgabe.
::::

## Spieler bannen

```
ban <SteamID64 oder Namensteil> [Grund]
```

Ein Bann wirft den Spieler sofort vom Server und verhindert, dass er sich erneut verbindet. Gibst du keinen Grund an, wird `Banned` verwendet.

:::: info Hinweis
Mit einer SteamID64 kannst du auch Spieler bannen, die gerade nicht verbunden sind. So sperrst du jemanden vorsorglich aus, bevor er überhaupt beitritt.
::::

:::: danger Wichtig
Der Befehl `ban` gehört zum offiziellen Sandbox-Modus (`facepunch.sandbox`) und steht daher nicht in jedem Spielmodus zur Verfügung. `kick` stammt dagegen aus der Engine und funktioniert unabhängig vom Spielmodus.
::::

## Bann aufheben

Es gibt in s&box **keinen `unban`-Befehl**. Gebannte Spieler stehen im Sandbox-Modus in einer Datei auf deinem Server, die du von Hand bearbeiten musst.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Bann-Liste öffnen</b><br>
   Öffne folgende Datei:

   ```
   /data/facepunch/sandbox/bans.json
   ```

4. <b>Eintrag entfernen</b><br>
   Lösche den Eintrag des Spielers aus der Liste und achte darauf, dass die Datei gültiges JSON bleibt.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Bearbeite die Datei niemals im laufenden Betrieb. Der Server hält die Bann-Liste im Arbeitsspeicher und schreibt sie bei jeder Änderung komplett neu – deine Bearbeitung wäre damit sofort wieder überschrieben.
::::

:::: info Hinweis
Der Pfad gilt für den offiziellen Sandbox-Modus. Andere Spielmodi speichern ihre Daten unter `/data/<organisation>/<package>/` und verwenden dort eigene Dateinamen.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `status` | Serverstatus, verbundene Spieler und Lobby-ID anzeigen |
| `kick <SteamID64 oder Namensteil> [Grund]` | Spieler vom Server trennen |
| `ban <SteamID64 oder Namensteil> [Grund]` | Spieler aussperren (Sandbox-Modus) |
| `game <Spielmodus> [Map]` | Spielmodus und Map wechseln |
| `find <Text>` | Verfügbare Befehle und Variablen durchsuchen |
| `quit` | Server beenden |

:::: warning Achtung
`quit` beendet den Serverprozess. Nutze zum Neustarten deines Servers die Verwaltung.
::::
