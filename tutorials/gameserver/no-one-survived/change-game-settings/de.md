---
slug: "spieleinstellungen-aendern"
language: "de"
title: "So änderst Du die Spieleinstellungen Deines No One Survived Servers"
description: "Spieleinstellungen eines No One Survived Servers ändern"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieleinstellungen ändern"
sort: 7
related: ["gameserver/no-one-survived/add-admin", "gameserver/no-one-survived/add-savegame", "gameserver/no-one-survived/change-map", "gameserver/no-one-survived/create-backup"]
---

Wie hart Dein Server wird, legst Du in der Datei `Game.ini` fest: Anzahl und Stärke der Zombies, Länge von Tag und Jahr, Beutemengen, permanenter Tod und PvP.

> [!NOTE]
> **Zwei Abschnitte, zwei Zuständigkeiten**
>
> Die `Game.ini` besteht aus zwei Abschnitten:
>
> - **`[ServerSetting]`** – Grunddaten des Servers wie Name, Passwort und Savegame-Name. Diese Werte steuerst Du über die **Verwaltung**.
> - **`[GameSettings]`** – die eigentlichen Spielregeln. Diese Werte gibt es nicht in der Verwaltung, Du trägst sie direkt in der Datei ein.

> [!CAUTION]
> **Vorher sichern**
>
> Erstelle vor größeren Änderungen ein [Backup](/tutorials/gameserver/no-one-survived/create-backup).

## Einstellungen ändern

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Einstellungen werden nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne folgende Datei:

   ```text
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

   > [!NOTE]
   > Existiert die Datei noch nicht, starte den Server einmal, damit sie angelegt wird. Stoppe ihn anschließend wieder.
   >
   > Der Ordner heißt auch auf Deinem Linux-Server `WindowsServer`. Das ist so gewollt – No One Survived stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.

4. **Werte anpassen**\
   Ändere im Abschnitt `[GameSettings]` die gewünschten Zeilen. Ist eine Zeile nicht vorhanden, ergänze sie.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Einstellungen im Abschnitt `[GameSettings]`

| Einstellung | Werte | Bedeutung |
|-------------|-------|-----------|
| `PVP` | `True` / `False` | Erlaubt Spielern, sich gegenseitig anzugreifen |
| `ZombieAttack` | `True` / `False` | Aktiviert die Angriffswellen auf Spielerbasen |
| `ZombieAttackDay` | 1–30 | Abstand zwischen zwei Angriffswellen in Tagen |
| `AttackZombieNum` | 1–5 | Stärke der Angriffswelle |
| `ZombieNum` | 1–3 | Menge der Zombies in der offenen Welt |
| `RunZombiePercent` | 0.0–1.0 | Anteil rennender Zombies |
| `ZombieStreng` | 0–3 | Stärke der Zombies |
| `YearDay` | Anzahl Tage | Länge eines Jahres im Spiel |
| `DayLength` | 45, 90 oder 120 | Länge eines Tages in Minuten |
| `PermanentDead` | `True` / `False` | Permanenter Tod – der Charakter geht beim Sterben verloren |
| `MaterialNum` | 0–3 | Materialmenge, die in der Welt zu finden ist |
| `ItemSpawn` | Anzahl Tage | Abstand, in dem Beute in der Welt neu erscheint |
| `NPCItemSpawn` | Anzahl Tage | Abstand, in dem das Warenangebot der NPCs aufgefrischt wird |
| `VirusFatalityRate` | 0.0–1.0 | Tödlichkeit des Virus |
| `GiftBagForNovices` | `True` / `False` | Startpaket für neue Spieler |

Ein Beispiel für einen entspannten PvE-Server:

```ini
[GameSettings]
PVP=False
ZombieAttack=True
ZombieAttackDay=10
AttackZombieNum=1
ZombieNum=1
RunZombiePercent=0.2
ZombieStreng=1
DayLength=90
PermanentDead=False
MaterialNum=3
VirusFatalityRate=0.2
GiftBagForNovices=True
```

> [!WARNING]
> **Schreibweise genau übernehmen**
>
> Die Namen der Einstellungen können sich mit Spiel-Updates ändern. Ändere deshalb immer nur Zeilen, die bereits in **Deiner** Datei stehen, und übernimm deren Schreibweise exakt. Ein falsch geschriebener Schlüssel wird stillschweigend ignoriert.

> [!NOTE]
> **Zulässige Werte prüfen**
>
> Auch die zulässigen Wertebereiche können sich mit Spiel-Updates ändern. Trägst Du einen Wert außerhalb des gültigen Bereichs ein, verwendet der Server den Standardwert – die Einstellung wirkt dann scheinbar nicht.

## Zombie-Anzahl

Die Anzahl der Zombies pro Angriffswelle steht nicht im Abschnitt `[GameSettings]`, sondern in `[ServerSetting]` – und die änderst Du über die **Verwaltung**:

| Einstellung | Werte | Bedeutung |
|-------------|-------|-----------|
| `NumOfZombieSpawn` | 25–100 | Anzahl der Zombies in einer Angriffswelle |

> [!WARNING]
> Werte aus dem Abschnitt `[ServerSetting]` werden beim Serverstart aus den Feldern der Verwaltung überschrieben. Änderst Du sie von Hand in der `Game.ini`, sind sie nach dem nächsten Start wieder weg. Die Werte im Abschnitt `[GameSettings]` sind davon nicht betroffen und bleiben erhalten.

> [!TIP]
> **Änderungen wirken ab dem nächsten Start**
>
> Alle Einstellungen werden nur beim Serverstart eingelesen. Änderungen im laufenden Betrieb greifen nicht – starte Deinen Server nach jeder Anpassung neu.
