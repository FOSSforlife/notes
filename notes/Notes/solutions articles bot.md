# Solutions article bot

:::info What is this?

These are some notes regarding a Discord bot that I'm working on for my weekly [article discussions](https://article-disc.vercel.app). This was initially written as a note to myself, but I'm also hosting it here so it can be a reference if people in the server ask about it.

[Article Bot GitHub repo](https://github.com/solutions-podcast/article-bot)

:::

## when you post an article

- check db if article has been posted already
- get article info from ~~article info api~~ article fetcher library
  - **word count** or estimated read time
  - **paywall yes/no**
  - upload pdf somewhere
- post to `#article-bot`
- add an upvote button (use arrow up since it's a standard emoji)
  - have an option to override the emoji
- save to db

## !articles command

- top voted articles posted since last poll or podcast date
- if some articles from the previous week have even more votes, mention those at the bottom

## choose article command

- admin only
- chooses the upcoming article manually
- ~~creates an event and posts it in `#article-announcements`~~
- prompt for article:
  - this is the highest voted article(s)
  - (if applicable) these articles from last week got more votes than any from this week
    - filter out the winner (if it has the `discussion` property)
  - (if applicable) these articles from last week tied with the highest
  - which would you like to choose for this week's discussion?
    - create select menu with each article mentioned
- if it's a tie, prompt for what to do:
  - save for multiple weeks
  - re-vote
  - choose a specific article manually
- prompt for date/time
- makes a post in `#article-announcements`

## rss (old idea)

- every day at noon, post a digest of:
  - top articles from vox, nytimes, ssc
  - articles matching tags
  - articles by favorite authors

## rss (new idea)

- once a day, post a random article to `#article-bot`
- frequency can be adjusted in settings (might go to twice a day)
- fetches same data as it does when others post an article
- has upvote button just like the others

## rank

- every time an article wins, the person who posted it gets a point
- the rank command shows a leaderboard of all the points

- whenever someone posts an article in any channel, verify the URL against the MBFC list. if it matches, print out the publication name, article title, MBFC ratings, and a button to "upvote" it
- posts new articles based on rss feeds and keyword/author filters. filters will be stored in mongodb and can be viewed on the website
