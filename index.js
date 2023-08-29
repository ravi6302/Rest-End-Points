const express = require('express')
const app = express()

const questions = [
    {
        question:"how to install python",
        slug:"how-to-install-python",
        votes:3,
        views:10,
        tags:"python,pip,query"

    },
    {
        question:"how to install python1",
        slug:"how-to-install-python1",
        votes:3,
        views:10,
        tags:"python1,pip,query"

    },
    {
        question:"how to install python2",
        slug:"how-to-install-python2",
        votes:3,
        views:10,
        tags:"python2,pip,query"

    }
]

const users =[
    {
        name:"ravi",
        followers:100,
        location:"Rjy"

    },
    {
        name:"ravi1",
        followers:1000,
        location:"Rjy1"

    },
    {
        name:"ravi2",
        followers:100,
        location:"Rjy2"

    }
]

const companies = [
    {
        name:"google",
        origin:"america",
        location:"california"
    },
    {
        name:"google1",
        origin:"america1",
        location:"california1"
    },
    {
        name:"google2",
        origin:"america2",
        location:"california2"
    }
]
app.get('/',(req,res)=>{ //"app" lo expresss undhi "get" means it show the search resul on address bar.
    res.send("Home")
})
app.get('/questions',(req,res)=>{
    res.send(questions)
})
app.get('/questions/:slug',(req,res)=>{//questions/em type chesina slug display avthundhi.
    // console.log(req.params.slug)
    const slug=req.params.slug // questions/ tarvata enter chesina slug, it means string. slug ane variable lo store chestham.
    questions.map(obj=>{
        if (obj.slug === slug){ //obj lo unna slug kanaka user enter chesina slug tho eual ayite obj ni response ga pampu
            res.send(obj)
        }
    })
    res.send("Question not found")
})
app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/tags',(req,res)=>{
    res.send("Tags")
})
app.get('/jobs/companies',(req,res)=>{
    res.send(companies)
})

app.listen(1234,()=>{
    console.log("Listening...")
})