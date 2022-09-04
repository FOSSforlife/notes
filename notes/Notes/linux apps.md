# Linux apps

## Install via package manager
(zsh is already default on manjaro, archcraft, and macos)

### Arch
```
yay -S neovim zsh
```

### Fedora Silverblue
https://github.com/89luca89/distrobox#installation
```bash
sudo rpm-ostree install distrobox gnome-tweaks zsh 
```

## Install via various CLI commands

### NVM
https://github.com/nvm-sh/nvm#install--update-script
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | zsh
```

### Powerlevel10k

https://github.com/romkatv/powerlevel10k#manual
```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
```

### Yay
https://github.com/Jguer/yay#installation
```
Archcraft: always included
EndeavourOS: optionally included
Manjaro: sudo pacman -S yay
```

#### Source
```bash
sudo pacman -S --needed git base-devel && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
```

#### Binary
```
sudo pacman -S --needed git base-devel && git clone https://aur.archlinux.org/yay-bin.git && cd yay-bin && makepkg -si
```

## Flatpak
- [com.brave.Browser](https://flathub.org/apps/details/com.brave.Browser)
- [com.discordapp.Discord](https://flathub.org/apps/details/com.discordapp.Discord)
- [com.github.tchx84.Flatseal](https://flathub.org/apps/details/com.github.tchx84.Flatseal)
- [com.spotify.Client](https://flathub.org/apps/details/com.spotify.Client)
- [md.obsidian.Obsidian](https://flathub.org/apps/details/md.obsidian.Obsidian)