# Arch Linux
## Pros
- Lightweight and flexible - only install what you need
- Pacman/AUR

## Cons
- Doesn't come with `yay` preinstalled (although this is only a few commands away)
- Can be difficult to get sway up and running, even using archinstall

# Debian
## Pros
- Rock-solid stability
- Lots of packages available in repos

## Cons
- Applications are very old (although this could be mitigated using Flatpak and Distrobox)
- Newer hardware support is not great due to old kernel
- Need to use nonfree installer to get proprietary drivers
- Flatpak not pre-installed

# EndeavourOS
## Pros
- Arch-based (Pacman/AUR)
- Best Sway implementation
- Installation is super easy and comes with great defaults for each DE, but also lets you customize which packages are installed
- Yay pre-installed

## Cons
- Might not offer as much customization during install as vanilla Arch (although I haven't run into this problem)

# Fedora Silverblue
## Pros
- Root-only filesystem is stable and secure
- Supports Flatpaks out-of-the-box
- Supports containers (Toolbox/Podman) out-of-the-box

## Cons
- Installer often breaks when trying to customize partitions (encryption, etc)
- Not as much online support as other distros
- Not suitable for tinkerers who need root filesystem access
- Have run into some issues with upgrades not working and hardware randomly failing (e.g. speakers)
- Can't install other desktop environments, only supports GNOME or KDE (Fedora Kinoite)
- Installing GUI apps inside distrobox can take extra steps (e.g. adding to application list)

# Linux Mint
## Pros
- Great for beginners
- Supports Flatpaks out-of-the-box and discourages Snaps
- Uses Cinnamon which is more lightweight and easier to use than GNOME
- Timeshift integration
- Web app manager

## Cons

# Manjaro
## Pros
- Arch-based (Pacman/AUR)
- ZSH pre-installed
- Yay pre-installed
- Great configs for GNOME, i3, zsh, etc.
- Beginner-friendly

## Cons
- Security updates for packages can sometimes be delayed
- [Lots of controversies](https://manjarno.snorlax.sh/) including bad security practices

# Nobara
## Pros
- Fedora-based but has RPMFusion enabled out-of-the-box
- Gaming distro

# Pop OS
## Pros
- Great support for GPU drivers including NVIDIA
- Best implementation of GNOME - all-in-one settings, nice UI

## Cons
- No Wayland support

# Ubuntu
## Pros
- Really good GNOME implementation with Dash-to-Dock

## Cons
- Uses snaps for everything
- Bloated