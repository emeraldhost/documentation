---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Soldat 2 Server"
description: "Spieler auf einem Soldat 2 Server kicken und bannen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/soldat-2/add-admin", "gameserver/soldat-2/add-mods", "gameserver/soldat-2/create-backup", "gameserver/soldat-2/join-server"]
---

Spieler entfernst Du auf einem Soldat 2 Server ausschließlich über die Konsole im Spiel. Eine Bannliste als Datei gibt es nicht.

> [!NOTE]
> Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/soldat-2/add-admin).

## Befehle im Spiel nutzen

1. **Konsole öffnen**\
   Drücke im Spiel `Alt` + `~`.

2. **Als Admin anmelden**\
   Bist Du nicht schon über Deine PlayFab-ID dauerhaft als Admin hinterlegt, melde Dich mit dem RCON-Passwort an:

   ```text
   rcon DeinRconPasswort
   ```

3. **Spieler-ID ermitteln**\
   Kick und Bann arbeiten mit der **Spieler-ID**, nicht mit dem Namen. Die IDs liefert Dir folgender Befehl:

   ```text
   rcon listplayers
   ```

4. **Befehl ausführen**\
   Führe den gewünschten Befehl mit der ermittelten ID aus:

   ```text
   rcon kick 2
   ```

## Spieler kicken

```text
rcon kick <id>
```

Der Spieler wird vom Server getrennt und kann grundsätzlich wieder beitreten.

Mit einem Grund:

```text
rcon kick 2 "Spam im Chat"
```

> [!IMPORTANT]
> Der Grund muss in **Anführungszeichen** stehen. Ohne Anführungszeichen wird der Befehl nicht korrekt ausgewertet.

## Alle Spieler kicken

```text
rcon kickall
```

Auch hier kannst Du einen Grund angeben:

```text
rcon kickall "Server wird neu gestartet"
```

## Spieler bannen

```text
rcon ban <id>
```

Der Spieler wird sofort vom Server geworfen und kann sich für einige Tage nicht mehr verbinden.

> [!WARNING]
> Ein Bann in Soldat 2 ist **zeitlich begrenzt**. Er läuft nach einigen Tagen von selbst ab – die genaue Dauer ist nicht dokumentiert und lässt sich nicht einstellen.

> [!CAUTION]
> **Kein Entbannen möglich**
>
> Soldat 2 kennt **keinen Unban-Befehl** und legt auch keine Bannliste als Datei an, die Du bearbeiten könntest. Ein ausgesprochener Bann lässt sich daher nicht vorzeitig aufheben – Du kannst nur warten, bis er abläuft. Setze `ban` deshalb bewusst ein und nutze für kurzfristige Störungen lieber `kick`.

## Spieler ins Team setzen

Stört ein Spieler nur die Teamverteilung, musst Du ihn nicht gleich entfernen:

```text
rcon setteam <id> <team>
```

```text
rcon setteam 2 1
```

> [!NOTE]
> Setzt Du einen Spieler manuell in ein Team, wird der automatische Teamausgleich (Autobalance) für das laufende Match deaktiviert. Nach dem nächsten Kartenwechsel greift er wieder.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `rcon listplayers` | Alle Spieler mit ihren IDs anzeigen |
| `rcon kick <id>` | Spieler vom Server trennen |
| `rcon kick <id> "<Grund>"` | Spieler mit Begründung trennen |
| `rcon kickall` | Alle Spieler vom Server trennen |
| `rcon kickall "<Grund>"` | Alle Spieler mit Begründung trennen |
| `rcon ban <id>` | Spieler für einige Tage aussperren |
| `rcon setteam <id> <team>` | Spieler in ein Team setzen |
| `rcon say "<Text>"` | Nachricht an alle senden, z.B. als Verwarnung |

> [!TIP]
> Möchtest Du Deinen Server dauerhaft nur für bestimmte Personen öffnen, ist ein Spielpasswort der zuverlässigere Weg als einzelne Banns. Das Passwort setzt Du in der **Verwaltung**.

> [!NOTE]
> Die Befehle unterscheiden nicht zwischen Groß- und Kleinschreibung. Mit der `Tab`-Taste blendet Dir die Konsole die verfügbaren Befehle ein.
