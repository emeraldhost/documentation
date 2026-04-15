---
description: Fix the EOS NotReady error on a V Rising server
---

# How to Fix the "EOS session is in the NotReady state" Error

The following entry may appear in your V Rising server logs:

```
EOS session is in the NotReady state. Waiting to modify until it's in the Joined state!
```

## What does it mean?

Your V Rising server is waiting for the connection to the **Epic Online Services (EOS)** to be established. As long as the EOS session is in the `NotReady` state, the server cannot modify the session – for example it cannot register itself in the public listing or let players join.

Usually this is only a momentary state during server startup. However, if the error persists, your server will not appear in the public server list.

## Possible causes and solutions

### 1. EOS listing not enabled

Check in the [server list configuration](enable-server-list.md) whether both **Steam Server List** and **Epic Games Server List** are set to `true`. Both options are required for the server to register correctly.

### 2. Server not fully started yet

EOS may take a few seconds to minutes after startup to build the session. Wait at least 2–3 minutes after a restart before taking further action.

### 3. Firewall or network blocking EOS

The server must be able to establish outbound connections to Epic Online Services. Make sure no firewall rule is blocking these connections. On EmeraldHost servers this is allowed by default.

### 4. Session blocked by a previous connection

Sometimes an old session remains stuck on Epic's side. A clean restart usually fixes this:

1. <b>Stop the server fully</b><br>
   Stop your server in the dashboard and wait around 30 seconds.

2. <b>Restart the server</b><br>
   Start the server again and give it 2–3 minutes to rebuild the EOS session.

### 5. EOS services have an outage

In rare cases the problem is on Epic's side. Check the status of the Epic Online Services at [status.epicgames.com](https://status.epicgames.com).

:::: tip Tip
If the error persists after a restart and after checking the server list settings, open a [support ticket](https://emeraldhost.de/en/support). We will then look into the server logs in detail.
::::
