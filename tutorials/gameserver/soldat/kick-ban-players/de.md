---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Soldat Server"
description: "Spieler auf einem Soldat Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/soldat/add-admin", "gameserver/soldat/add-mods", "gameserver/soldat/create-backup", "gameserver/soldat/join-server"]
---

Spieler entfernst Du auf einem Soldat Server über Chat-Befehle im Spiel. Alle Banns landen zusätzlich in einer Textdatei auf Deinem Server, die Du jederzeit selbst bearbeiten kannst.

> [!NOTE]
> Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/soldat/add-admin).

> [!NOTE]
> Soldat bannt über die **IP-Adresse**. Eine Steam-ID oder eine Spieler-UUID gibt es hier nicht.

> [!WARNING]
> **Zwei Serverversionen**
>
> Die Befehle in dieser Anleitung sind die des **klassischen** Soldat-Servers. **OpenSoldat** verwendet teilweise andere Namen:
>
> | Klassisch | OpenSoldat |
> |-----------|------------|
> | `/mute` / `/unmute` | `/gmute` / `/ungmute` – schaltet den Spieler serverweit stumm |
> | `/tempban <Minuten> <IP>` | nicht vorhanden |
> | `/banlast` | nicht vorhanden |
> | – | `/banhw <HWID>` – Bann über die Hardware-ID |
> | – | `/banlist` – Bannliste ausgeben |
>
> `/kick`, `/kicklast`, `/ban`, `/banip`, `/unban` und `/unbanlast` gibt es in beiden Versionen. Welche Version bei Dir läuft, erkennst Du daran, ob im Hauptverzeichnis eine `soldat.ini` oder ein Ordner `configs` mit einer `server.cfg` liegt.

## Befehle im Spiel nutzen

1. **Als Admin anmelden**\
   Melde Dich im Chat mit Deinem Adminpasswort an:

   ```text
   /adminlog DeinAdminPasswort
   ```

2. **Befehl ausführen**\
   Gib den gewünschten Befehl mit führendem `/` ein, zum Beispiel:

   ```text
   /ban .:Major:.
   ```

   Statt des Spielernamens kannst Du bei `/kick` und `/ban` auch die Spielernummer angeben:

   ```text
   /ban 2
   ```

## Spieler kicken

```text
/kick <Spielername oder Spielernummer>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten. Der Befehl funktioniert auch für Bots.

Mit folgendem Befehl entfernst Du den zuletzt beigetretenen Spieler, ohne seinen Namen zu kennen:

```text
/kicklast
```

## Spieler bannen

```text
/ban <Spielername oder Spielernummer>
```

Der Spieler wird sofort vom Server geworfen und kann sich nicht mehr verbinden.

Kennst Du nur die IP-Adresse, bannst Du direkt darüber:

```text
/banip <IP-Adresse>
```

Für einen zeitlich begrenzten Bann gibst Du die Dauer in Minuten an:

```text
/tempban <Minuten> <IP-Adresse>
```

Den zuletzt beigetretenen Spieler bannst Du mit folgendem Befehl für eine Stunde:

```text
/banlast
```

## Bann aufheben

```text
/unban <IP-Adresse>
```

Den zuletzt ausgesprochenen Bann hebst Du so auf:

```text
/unbanlast
```

## Chat eines Spielers ausblenden

```text
/mute <Spielername oder Spielernummer>
```

```text
/unmute <Spielername oder Spielernummer>
```

> [!NOTE]
> Laut Dokumentation blendet `/mute` den Chat des Spielers nur für Dich aus – es ist keine serverweite Stummschaltung. Stört ein Spieler alle anderen, hilft nur ein Kick oder ein Bann.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Name oder Nummer>` | Spieler oder Bot vom Server trennen |
| `/kicklast` | Zuletzt beigetretenen Spieler kicken |
| `/ban <Name oder Nummer>` | Spieler dauerhaft aussperren |
| `/banip <IP-Adresse>` | IP-Adresse dauerhaft aussperren |
| `/tempban <Minuten> <IP-Adresse>` | IP-Adresse zeitlich begrenzt aussperren |
| `/banlast` | Zuletzt beigetretenen Spieler für eine Stunde bannen |
| `/unban <IP-Adresse>` | Bann aufheben |
| `/unbanlast` | Zuletzt ausgesprochenen Bann aufheben |
| `/mute <Name oder Nummer>` | Chat des Spielers für Dich ausblenden |
| `/unmute <Name oder Nummer>` | Chat des Spielers wieder einblenden |

## Banns über die Datei verwalten

Alle Banns stehen in der Datei `banned.txt` im Hauptverzeichnis Deines Servers. Pro Zeile steht ein Eintrag im folgenden Aufbau:

```text
xxx.xxx.xxx.xxx:Dauer:Grund
```

Beispiele:

```text
203.0.113.10:132760800:Banned by an admin
203.0.113.11:-1000:Banned by an admin
```

| Feld | Bedeutung |
|------|-----------|
| IP-Adresse | Die gesperrte IPv4-Adresse. Platzhalter sind erlaubt, damit lassen sich ganze IP-Bereiche sperren. |
| Dauer | Restdauer des Banns in Ticks. Ein **negativer Wert bedeutet dauerhaft**. |
| Grund | Freitext, der den Bann beschreibt |

### Eintrag entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **banned.txt öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Datei `banned.txt` im Hauptverzeichnis Deines Servers.

3. **Zeile löschen**\
   Entferne die komplette Zeile des Eintrags, den Du aufheben möchtest.

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Bearbeite die Datei nur bei gestopptem Server. Der Server schreibt sie im laufenden Betrieb selbst – Änderungen können sonst überschrieben werden.

## Automatische Kicks und Banns

Soldat kann Spieler auch selbstständig entfernen. Beim klassischen Server verteilen sich diese Einstellungen auf zwei Dateien, bei OpenSoldat stehen sie gesammelt in der `configs/server.cfg`.

| Klassisch | Datei | OpenSoldat | Bedeutung |
|-----------|-------|------------|-----------|
| `PunishTK` | `server.ini` | `sv_punishtk` | Bestrafung für das Töten von Teamkameraden |
| `TKWarnings_Before_TempBan` | `server.ini` | `sv_warnings_tk` | Anzahl der Teamkills, bevor ein zeitweiser Bann folgt – wirkt nur mit `PunishTK=1` |
| `Max_Flood_Warnings` | `soldat.ini` | `sv_warnings_flood` | Verwarnungen wegen Chat-Spam, danach folgt ein Kick für 20 Minuten |
| `Max_Ping_Warnings` | `soldat.ini` | `sv_warnings_ping` | Verwarnungen wegen zu hohem Ping, danach folgt ein Kick für 15 Minuten |
| `Disable_AntiCheat_Kick` | `soldat.ini` | `sv_anticheatkick` | Steuert, ob der Anti-Cheat-Schutz Spieler automatisch kickt |

> [!NOTE]
> Änderungen an diesen Dateien wirken erst nach einem Neustart des Servers.

> [!WARNING]
> Banns über die Hardware-ID (HWID) kennt nur **OpenSoldat**, dort über den Befehl `/banhw`. Der klassische Soldat-Server bringt keinen HWID-Bann mit – kursierende Befehle dafür stammen aus einem eingestellten Community-Script. Nutze dort die IP-basierten Banns.
