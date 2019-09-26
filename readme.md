# DigitalCrafts Introduction to GraphQL
## Code written for DigitalCrafts Introdution to GraphQL

### Getting started
`clone repo`

`cd DigitalCraftsGraphQL`

`yarn install`

`yarn run dev`

or

`npm install`

`npm run dev`

Navigate to http://localhost:8080/graphql`

### Sample query for sports search
```javascript
query SportSearch($query: String!, $withStadiums: Boolean) {
	Search(query: $query, withStadiums: $withStadiums) {
    teams {
      name
      city
      state
      id
      stadiumId
      league
    }
    stadiums {
      name
      lat
      lon
      id
      teams
    }
  }
}
```

### Sample query arguments for sports search
```json
{
  "query": "Los Angeles",
  "withStadiums": true
}
```
