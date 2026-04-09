---
description: Connect a domain to a Minecraft server
---

# How to Connect Your Domain to a Minecraft Server

You can make your Minecraft server reachable via your own domain, so players can connect using e.g. `play.yourdomain.com` or `yourdomain.com` — instead of an IP address.

## Requirements

- A domain with EmeraldHost
- The IP address and port of your Minecraft server (you can find these in the **dashboard** of your server)

## Connect with subdomain (e.g. play.yourdomain.com)

1. <b>Open DNS settings</b><br>
   Open the management of your domain and click on **DNS Settings**.

2. <b>Create A record</b><br>
   Create a new record with type **A**:

   | Field | Value |
   |-------|-------|
   | Type | `A` |
   | Name | `play` |
   | Target | Your server IP address |

3. <b>Create SRV record</b><br>
   Create a new record with type **SRV** so Minecraft can find the correct port:

   **Name:**

   | Field | Value |
   |-------|-------|
   | Service Name | `_minecraft` |
   | Protocol | `TCP` |
   | Name | `play` |

   **Target:**

   | Field | Value |
   |-------|-------|
   | Priority | `0` |
   | Weight | `5` |
   | Port | Your server port |
   | Target | `play.yourdomain.com` |

4. <b>Test connection</b><br>
   Wait a few minutes for the DNS changes to take effect, then connect in-game using `play.yourdomain.com`.

## Connect without subdomain (e.g. yourdomain.com)

1. <b>Open DNS settings</b><br>
   Open the management of your domain and click on **DNS Settings**.

2. <b>Create A record</b><br>
   Create a new record with type **A**:

   | Field | Value |
   |-------|-------|
   | Type | `A` |
   | Name | `@` |
   | Target | Your server IP address |

3. <b>Create SRV record</b><br>
   Create a new record with type **SRV**:

   **Name:**

   | Field | Value |
   |-------|-------|
   | Service Name | `_minecraft` |
   | Protocol | `TCP` |
   | Name | leave empty |

   **Target:**

   | Field | Value |
   |-------|-------|
   | Priority | `0` |
   | Weight | `5` |
   | Port | Your server port |
   | Target | `yourdomain.com` |

4. <b>Test connection</b><br>
   Wait a few minutes for the DNS changes to take effect, then connect in-game using `yourdomain.com`.

:::: info Note
DNS changes can take up to 24 hours to propagate worldwide. However, they are usually available within a few minutes.
::::

:::: tip Tip
If your server uses the default port `25565`, the A record alone is sufficient. The SRV record is only needed if your server uses a different port.
::::
