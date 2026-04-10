---
description: Spieler auf einem Minecraft Java Edition Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Minecraft Java Edition Server

Du kannst als Operator Spieler per Befehl kicken oder dauerhaft bannen. Die Befehle funktionieren sowohl im Ingame-Chat als auch in der Serverkonsole (ohne `/`).

:::: info Hinweis
Du benötigst OP-Rechte, um diese Befehle nutzen zu können. Siehe [OP-Rechte vergeben](op-rechte-vergeben.md).
::::

## Spieler kicken

```
/kick <Name> [Grund]
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```
/ban <Name> [Grund]
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

## Spieler per IP bannen

```
/ban-ip <IP>
```

Die angegebene IP-Adresse wird dauerhaft vom Server ausgeschlossen.

## Spieler entbannen

```
/pardon <Name>
```

Der Ban des Spielers wird aufgehoben.

## IP-Ban aufheben

```
/pardon-ip <IP>
```

Der IP-Ban wird aufgehoben.

:::: tip Tipp
In der Serverkonsole werden die Befehle ohne `/` eingegeben, z. B. `kick Spielername`.
::::

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Name> [Grund]` | Spieler kicken |
| `/ban <Name> [Grund]` | Spieler bannen |
| `/ban-ip <IP>` | IP-Adresse bannen |
| `/pardon <Name>` | Spieler entbannen |
| `/pardon-ip <IP>` | IP-Ban aufheben |
