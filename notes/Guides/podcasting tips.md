# Podcasting

## Recording
- For recording Discord calls, I use the [Craig](https://craig.chat) bot which records each person on a separate track. 
	- If I'm making a video and want to record the username bubbles that light up when people speak, I use [OBS Studio](https://obsproject.com) and the [StreamKit Overlay chat widget](https://streamkit.discord.com/overlay).
- For recording in-person sessions, as well as for mixing and editing, I use [REAPER](https://www.reaper.fm). 
	- [iZotope RX](https://www.izotope.com/en/shop/rx.html) is a useful plugin for audio post-processing. I rely on the spectral de-noise, voice de-noise, de-ess features for every podcast.
	- [Waves Vocal Rider](https://www.waves.com/plugins/vocal-rider) is a plugin that automates volume on each track, keeping everything level even when people are speaking softly or loudly. 
		- The plugin was highly recommended in [this video](https://www.youtube.com/watch?v=gbMqrADV4RE), and I used it in most of my published episodes, but not anymore as of recently. I continuously found it difficult to get the settings quite right, and always needed to make manual adjustments. I think this was due to the differences in perceived volume and actual dB, which this plugin didn't pick up on. **Nowadays, I just tell everyone to speak closely to the mic, and I adjust the levels manually.** It's time-consuming, but it's worth it.
	- I use REAPER's stock EQ for cutting out unwanted frequencies.

## Generating the RSS feed
If you're tech-savvy and can use GitHub, you can create a podcast feed without having to sign up for a service.
- You'll want to generate this programmatically. Since I code in Node.js, I use an NPM package called [podcast](https://www.npmjs.com/package/podcast).
- My method is to manually create a [YAML file](https://github.com/solutions-podcast/podcast/blob/main/episodes/ep003.yml) for each episode, and then use a [Node.js script](https://github.com/solutions-podcast/podcast/blob/main/scripts/feed-gen.js) to generate the RSS feed file.
- Once it's generated, I have a [GitHub Action](https://github.com/solutions-podcast/podcast/blob/main/.github/workflows/update-rss.yml) that uploads it to DigitalOcean Spaces using the S3 protocol.

## Hosting the files
If you're tech-savvy and can use GitHub, you can host basically unlimited episodes for a very cheap price.
- For the audio files: Format in MP3 and host them pretty much anywhere you want. Ideally a CDN that is globally cached so that it loads quickly for people around the world. 
	- I use [DigitalOcean Spaces](https://www.digitalocean.com/products/spaces) which costs $5/mo for 250GB of storage, which is more than plenty.
- For the XML file (your RSS feed): You have even more options for this. You can host this alongside the audio files in your CDN, or you can just point to the file in GitHub. 

## Submitting to podcast sites
You'll need to submit your podcast manually for it to show up on these sites. All of them come with metrics which are useful for seeing how many listeners you have.
- [Spotify](https://podcasters.spotify.com)
- [Apple Podcasts](https://podcasters.apple.com/support/897-submit-a-show)
- [Google Podcasts](https://podcasts.google.com)
