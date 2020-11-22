const devys = [
    {
        name: "Márcio Morais",
        avatar: "https://scontent.fbau3-2.fna.fbcdn.net/v/t1.0-9/90376817_2955026617894858_6776012874599890944_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=Nm1J3kbrib4AX-Z7Djp&_nc_ht=scontent.fbau3-2.fna&oh=59e55e1c76bcf63809a42fd690211594&oe=5FD24BD4",
        whatsapp: 45646164685,
        bio: "O maior fã de C# do mundo, amarrado em ASP.NET.<br><br> Apaixonado por música e pintura digital, consigo fazer de tudo com o Visual Studio. Vem comigo que eu te transformo em um programador.",
        subject: "CSharp",
        cost: "40",
        weekday: [ 0 ],
        time_from: [720],
        time_to: [1220] 
    },
    {
        name: "José Gallo",
        avatar: "https://scontent.fbau3-2.fna.fbcdn.net/v/t1.0-9/90376817_2955026617894858_6776012874599890944_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=Nm1J3kbrib4AX-Z7Djp&_nc_ht=scontent.fbau3-2.fna&oh=59e55e1c76bcf63809a42fd690211594&oe=5FD24BD4",
        whatsapp: 45646164685,
        bio: "O maior fã de C# do mundo, amarrado em ASP.NET.<br><br> Apaixonado por música e pintura digital, consigo fazer de tudo com o Visual Studio. Vem comigo que eu te transformo em um programador.",
        subject: "CSharp",
        cost: "40",
        weekday: [ 0 ],
        time_from: [720],
        time_to: [1220] 
    },
    {
        name: "Miguel Gomes",
        avatar: "https://avatars3.githubusercontent.com/u/31226227?s=460&u=d80fcb0ca14cc6ba79043c6243178ab172bef06f&v=4",
        whatsapp: +551499125-2902,
        bio: "O maior fã de C# do mundo, amarrado em ASP.NET.<br><br> Apaixonado por música e pintura digital, consigo fazer de tudo com o Visual Studio. Vem comigo que eu te transformo em um programador.",
        subject: "CSharp",
        cost: "40",
        weekday: [ 0 ],
        time_from: [720],
        time_to: [1220] 
    }

]


const subjects = [
    "Java Script",
    "CSS",
    "Python",
    "CSharp",
    "Java",
    "SQL",
    "C++",
    "Swift",
    "PHP",
    "TypeScript",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
        const positon = +subjectNumber - 1
        return subjects[positon]
}

function pageLanding(req, res) {
    return res.render("index.html")
}
function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {devys, filters, subjects, weekdays })
}
function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)

        devys.push(data)
        
        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays} )
}


const express = require('express')
const server = express()
const nunjucks  = require('nunjucks')

nunjucks.configure('src/views',{
    express: server,
    noCache: true,

})

server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500) 