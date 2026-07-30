---
description: Join a Mindustry server
---

# How to Join Your Mindustry Server

Mindustry offers a real direct connection in its join menu: you enter the **IP address** and the **Game Port** of your server and connect right away. This is the most reliable way onto your server.

## Find connection details

:::: danger Important
You can find the IP address and the Game Port of your server in the **dashboard**. Always enter exactly the port shown there – without a port, Mindustry falls back to a built-in default value that usually does not match a hosted server.
::::

:::: info Note
Mindustry has **no separate Query Port**. Status queries and the game itself both run through the same Game Port, over TCP as well as UDP.
::::

## Join via the direct connection

1. <b>Start Mindustry</b><br>
   Launch Mindustry on your PC.

2. <b>Open the join menu</b><br>
   Select **Play** in the main menu and then **Join Game**.

3. <b>Add the server</b><br>
   In the **Remote** section, click **Add Server**.

4. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server, separated by a colon:

   :::: tip Example
   ```
   123.45.67.89:<Game Port>
   ```

   Replace the IP address and the Game Port with the values from your **dashboard**.
   ::::

   :::: info IPv6
   If your server has an IPv6 address, put it in square brackets:

   ```
   [2001:db8::1]:<Game Port>
   ```
   ::::

5. <b>Confirm the entry</b><br>
   Confirm your input. The server then stays listed in the **Remote** section and is queried every time you open the menu.

6. <b>Join</b><br>
   Once the entry shows the server name, map and player count, click it to join.

## The sections of the join menu

| Section | Meaning |
|---------|---------|
| **Local** | Searches for servers in the same local network. Your hosted server is **not** found here. |
| **Remote** | The servers you added yourself. This is how you join your server. |
| **Global** | A server list curated by the community. Your server does not appear there automatically. |

## Server is not found

:::: warning Caution
Your server can only be reached once it actually hosts a map. As long as no map is loaded, it does not accept connections. Check in the **console** of your dashboard whether a map is running and start one otherwise:

```
host <mapname>
```

Alternatively, load an existing save, which also brings the server online:

```
load <slot>
```
::::

:::: tip Tip
If the entry in the **Remote** section stays greyed out or reports an error, first check the spelling of the IP address and the port. A common mistake is using a Game Port from an old guide instead of the port from your dashboard.
::::
