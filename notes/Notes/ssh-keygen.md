https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

```shell
ssh-keygen -t ed25519 -C "PC"
```

```shell
eval "$(ssh-agent -s)"
```

```shell
ssh-add -K ~/.ssh/id_ed25519
```