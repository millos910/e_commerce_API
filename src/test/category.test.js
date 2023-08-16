const request=require("supertest")
const app=require("../app")
const URL_BASE="/api/v1/cateogries"
const URL_BASE_USERS="/api/v1/users"
let TOKEN
let categoryId
beforeAll(async()=>{
    const user={
        email:"emontero910@gmail.com",
        password:"emilio123"
    }
    const res=await request(app)
        .post(`${URL_BASE_USERS}/login`)
        .send(user)

    TOKEN=res.body.token
    })

test()