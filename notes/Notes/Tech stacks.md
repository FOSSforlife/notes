# Tech stacks
## Weekly news dashboard
- Database hosting: MongoDB Atlas
	- Same database as article bot which could allow for easy integration
- Database client: `mongodb`
	- Used it in the article discussions site already
	- Someone mentioned recently that it's now better to use this than `mongoose`
- API hosting: Railway
	- First time using it
	- Might end up moving all API hosting here. Pricing and interface seem better than Heroku
		- Will still use home server for Discord bots since they don't require incoming connections
- GraphQL schema library: Nexus
	- Supposed to be really powerful and customizable
	- Going to find out if I like it more than TypeGraphQL. It seems to offer the same type-safety but with a better syntax
- GraphQL server library: Apollo Server
	- No reason to use anything else such as graphql-yoga