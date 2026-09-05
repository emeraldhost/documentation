---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Mindustry Server hinzu"
description: "Admin auf einem Mindustry Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mindustry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/mindustry/add-mods", "gameserver/mindustry/add-savegame", "gameserver/mindustry/create-backup", "gameserver/mindustry/download-savegame"]
---

Mindustry kennt **keine Admin-Datei**, die Du per SFTP bearbeiten könntest. Adminrechte vergibst Du ausschließlich über die **Konsole** Deines Servers. Gespeichert werden sie in der Binärdatei `config/settings.bin`.

> [!IMPORTANT]
> Adminrechte hängen an der **Mindustry-UUID** eines Spielers – nicht an einem Steam- oder Epic-Konto. Die UUID vergibt Mindustry selbst, Du liest sie über die Konsole aus.

> [!NOTE]
> Dein Server muss laufen **und** eine Karte hosten. Ist keine Partie aktiv, lehnt der Befehl mit `Open the server first.` ab. Wie Du eine Karte startest, steht unter [Savegame hinzufügen](/tutorials/gameserver/mindustry/add-savegame).

## Admin über den Namen hinzufügen

Solange der Spieler online ist, reicht sein Spielername.

1. **Spieler verbinden lassen**\
   Der Spieler, der Adminrechte erhalten soll, muss Deinem Server beitreten und online bleiben. Wie das geht, steht unter [Server beitreten](/tutorials/gameserver/mindustry/join-server).

2. **Konsole öffnen**\
   Öffne in der Verwaltung die **Konsole** Deines Servers.

3. **Rechte vergeben**\
   Gib den folgenden Befehl ein und ersetze `<Spielername>` durch den exakten Namen des Spielers:

   ```text
   admin add <Spielername>
   ```

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > admin add MaxMustermann
   > ```

4. **Ergebnis prüfen**\
   Der Server bestätigt mit `Changed admin status of player: <Name>`. Die Rechte gelten sofort – ein Neustart ist nicht nötig.

> [!WARNING]
> Meldet der Server `Nobody with that name or ID could be found.`, ist der Spieler entweder nicht online oder der Name stimmt nicht exakt. Kontrolliere die Schreibweise mit `players` oder nutze die UUID.

## Admin über die UUID hinzufügen

Über die UUID funktioniert der Befehl auch dann, wenn der Spieler gerade nicht verbunden ist – vorausgesetzt, er war schon einmal auf Deinem Server.

1. **UUID ermitteln**\
   Nutze in der Konsole einen dieser Befehle:

   | Befehl | Ausgabe |
   |--------|---------|
   | `players` | Alle verbundenen Spieler mit Adminstatus, Name, UUID und IP |
   | `admins` | Alle Admins mit letztem bekannten Namen, UUID und IP |
   | `info <Name/UUID/IP>` | Ausführliche Infos zu einem Spieler |
   | `search <Name>` | Sucht Spieler anhand eines Namensteils |

   > [!TIP]
   > Beim Verbinden schreibt Dein Server ohnehin Name und UUID in die Konsole. Du findest die UUID also auch im Konsolenprotokoll des jeweiligen Beitritts.

2. **Rechte vergeben**\
   Trage die UUID statt des Namens ein:

   ```text
   admin add <UUID>
   ```

## Adminrechte entziehen

```text
admin remove <Spielername/UUID>
```

> [!NOTE]
> Das erste Argument muss immer `add` oder `remove` sein. Andernfalls meldet der Server `Second parameter must be either 'add' or 'remove'.`

## Was ein Admin im Spiel darf

Als Admin erhältst Du im Spiel über die Spielerliste zusätzliche Aktionen:

| Aktion | Wirkung |
|--------|---------|
| **Kick** | Trennt den Spieler vom Server |
| **Ban** | Sperrt den Spieler dauerhaft aus |
| **Trace** | Zeigt Verbindungs- und Spielerinformationen an |
| **Wave** | Ruft die nächste Angriffswelle |
| **Switch Team** | Weist einen Spieler einem anderen Team zu |

> [!TIP]
> Wie Du Spieler zusätzlich über die Konsole entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/mindustry/kick-ban-players).

## Server nur für bestimmte Spieler öffnen

Möchtest Du nur ausgewählte Spieler zulassen, aktiviere die Whitelist:

1. **Whitelist aktivieren**

   ```text
   config whitelist true
   ```

2. **Spieler freischalten**\
   Trage die UUID des Spielers ein:

   ```text
   whitelist add <UUID>
   ```

3. **Liste prüfen**\
   Ohne weiteres Argument zeigt Dir der Befehl alle freigeschalteten Spieler mit Name und UUID:

   ```text
   whitelist
   ```

> [!NOTE]
> Die Whitelist arbeitet ausschließlich mit UUIDs – Spielernamen werden hier nicht akzeptiert. Versucht ein nicht freigeschalteter Spieler beizutreten, sieht er `You are not whitelisted here.`, und Dein Server nennt in der Konsole direkt den passenden `whitelist add`-Befehl.

> [!IMPORTANT]
> Bearbeite `config/settings.bin` niemals mit einem Texteditor. Die Datei enthält neben den Adminrechten auch Banns, Whitelist und sämtliche Servereinstellungen in binärer Form und wird dabei zerstört.
