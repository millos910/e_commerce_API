const request=require("supertest")
const app=require("../app")
const Category = require("../models/Category")
//const Product = require("../models/Product")
require('../models')
const URL_BASE="/api/v1/products"
const URL_BASE_USERS="/api/v1/users/login"
let TOKEN
let product
let category
beforeAll(async()=>{
    const user={
        email: "emontero910@gmail.com",
        password: "emilio123"
    }
    const res=await request(app)
        .post(URL_BASE_USERS)
        .send(user)
    TOKEN=res.body.token
    const categoryBody={
        name:"black chocolate"
    }
    category=await Category.create(categoryBody)
    product={
        title:"BATMAN dunnuts",
        description:"black chocolote",
        price:1.10,
        categoryId:category.id
    }
})
test("POST -> 'URL_BASE',should return code 201 and res.body.title === product.title",async()=>{
    const res=await request(app)
        .post(URL_BASE)
        .send(product)
        .set("Authorization", `Bearer ${TOKEN}`)

    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.title).toBe(product.title)
await category.destroy()
})
