---
slug: "windows-hard-drive-expand"
language: "en"
title: "How to Expand the C: Drive on Your Windows Server"
description: "Expand the C: drive on a Windows Server"
tags: []
date: "2025-05-19"
visibility: "public"
updated: "2026-03-19"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Expand Windows Hard Drive"
sort: 2
related: ["rootserver/windows/connect-to-windows-server", "rootserver/windows/open-windows-firewall-ports"]
---

When deploying a Windows Server, it may happen that the entire available storage space is not automatically assigned to the `C:` partition. This guide describes how you can automatically add the unallocated space to your `C:` drive using a provided script.

## Requirements

- A **Windows Server** where the script will be executed.
- **Administrator rights** on the server.

> [!CAUTION]
> **The script deletes partition 3 on disk 0**
>
> The script hands `diskpart` a fixed instruction: it selects partition 3 on disk 0 and force-deletes it, without checking what that partition holds, then extends the `C:` partition into the freed space. On the standard image that partition is the Windows recovery partition, but on a server with a different layout it can be a partition of your own. Open `diskpart` first, run `list disk` and `list partition`, and confirm that partition 3 really is the recovery partition. This step **cannot be undone**, so take a snapshot or a backup of your server first.

## Steps

1. **Download the script**
   - Download the following script **directly** to your Windows Server:

     ```text
     https://cdn.emeraldhost.de/products/rootserver/windows-patch/extend-disk/remove_recovery_and_extend.bat
     ```

2. **Run the script as administrator**
   1. Navigate to the location of the downloaded file.
   2. Right-click on the file `remove_recovery_and_extend.bat`.
   3. Select **Run as administrator**.

3. **Automatic expansion of the `C:` drive**
   - After running the script, the unused space will be automatically added to the `C:` partition without any manual intervention.

4. **Troubleshooting**
   - If the script does not run correctly or the partition expansion fails:
      - Ensure you have **administrator rights**.
      - Restart the server after running the script and check the disk space again.
      - If problems persist, feel free to contact our [Support](https://emeraldhost.de/en/support).

That's it! With these steps, you should be able to automatically expand the `C:` drive of your Windows Server.
