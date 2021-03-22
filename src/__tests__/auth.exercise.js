// Testing Authentication API Routes




// * curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XPOST "https://gorest.co.in/public-api/users" -d '{"name":"Tenali Ramakrishna", "gender":"Male", "email":"tenali.ramakrishna@15ce.com", "status":"Active"}'*/
// 🐨 import the things you'll need
// 💰 here, I'll just give them to you. You're welcome
import axios from 'axios'
// import {resetDb} from 'utils/db-utils'
import * as generate from 'utils/generate'
import faker from 'faker'
// import startServer from '../start'
const ACCESS_TOKEN = '473e5d0a0eaa2c417d60be0eae60a6892e8c8b7a1d2ffa8e7f9dc5d727bb549f'
const baseURL = 'https://gorest.co.in/public-api'
const api = axios.create({baseURL,   headers: {'Authorization': `Bearer ${ACCESS_TOKEN}`}})

function createFakeUser() {
  return {
    email:  faker.internet.email(),
    name: faker.name.findName(),
    gender: faker.name.gender(),
    status: faker.random.boolean() ? 'Active' : 'Inactive'

  }
} 

// 🐨 you'll need to start/stop the server using beforeAll and afterAll
// 💰 This might be helpful: server = await startServer({port: 8000})

// 🐨 beforeEach test in this file we want to reset the database

test('create user', async () => {
  const res = await api.post('users', {name:"Tenali Ramakrishna", gender:"Male", email:"tenali.ra1makrishna@15ce.com", status:"Active"})
  console.log('users', res.data)
  // 🐨 get a username and password from generate.loginForm()
  //
  // register
  // 🐨 use axios.post to post the username and password to the registration endpoint
  // 💰 http://localhost:8000/api/auth/register
  //
  // 🐨 assert that the result you get back is correct
  // 💰 it'll have an id and a token that will be random every time.
  // You can either only check that `result.data.user.username` is correct, or
  // for a little extra credit 💯 you can try using `expect.any(String)`
  // (an asymmetric matcher) with toEqual.
  // 📜 https://jestjs.io/docs/en/expect#expectanyconstructor
  // 📜 https://jestjs.io/docs/en/expect#toequalvalue
  //
  // login
  // 🐨 use axios.post to post the username and password again, but to the login endpoint
  // 💰 http://localhost:8000/api/auth/login
  //
  // 🐨 assert that the result you get back is correct
  // 💰 tip: the data you get back is exactly the same as the data you get back
  // from the registration call, so this can be done really easily by comparing
  // the data of those results with toEqual
  //
  // authenticated request
  // 🐨 use axios.get(url, config) to GET the user's information
  // 💰 http://localhost:8000/api/auth/me
  // 💰 This request must be authenticated via the Authorization header which
  // you can add to the config object: {headers: {Authorization: `Bearer ${token}`}}
  // Remember that you have the token from the registration and login requests.
  //
  // 🐨 assert that the result you get back is correct
  // 💰 (again, this should be the same data you get back in the other requests,
  // so you can compare it with that).
})
