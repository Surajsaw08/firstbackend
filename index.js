require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;


const githubjson={
  "login": "Surajsaw08",
  "id": 143094982,
  "node_id": "U_kgDOCId0xg",
  "avatar_url": "https://avatars.githubusercontent.com/u/143094982?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Surajsaw08",
  "html_url": "https://github.com/Surajsaw08",
  "followers_url": "https://api.github.com/users/Surajsaw08/followers",
  "following_url": "https://api.github.com/users/Surajsaw08/following{/other_user}",
  "gists_url": "https://api.github.com/users/Surajsaw08/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Surajsaw08/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Surajsaw08/subscriptions",
  "organizations_url": "https://api.github.com/users/Surajsaw08/orgs",
  "repos_url": "https://api.github.com/users/Surajsaw08/repos",
  "events_url": "https://api.github.com/users/Surajsaw08/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Surajsaw08/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-08-24T12:53:42Z",
  "updated_at": "2025-01-16T19:21:43Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('good..night')
})

app.get('/login',(req,res)=>{
  res.send('<h1>login/signup</h1>')
})

app.get('/github',(req,res)=>{
  res.json(githubjson);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

