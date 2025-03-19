## Batch Rename

Easily rename file extensions in a folder using your terminal.

#### Usage

Run the following command:

```sh
node foldername currentExtension newExtension
```

If your target folder has multiple words, wrap it in quotes:

```sh
node 'multi word folder name' currentExtension newExtension
```

#### Scene Behind

I was watching lectures this morning while my flatmates were asleep. My headphones weren’t working, so I had to keep the volume low and rely on subtitles.

Luckily, the lectures had subtitles— but my player didn’t support the subtitle extension format. After renaming a couple of files manually, I thought, why not write a script for it?

And here it is.
