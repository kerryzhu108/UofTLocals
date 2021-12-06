const { Business } = require("./models/Business");
const { Announcement } = require("./models/Announcement");
const { Student } = require("./models/Student");
const { Comment } = require("./models/Comment");

const utils = require("./utils/utils");

/**
 * Recreates database with sample data (only if RESETDB='true' in .env)
 */
const seedDatabase = async () =>{
    try {
        await Business.deleteMany({})
        await Announcement.deleteMany({})
        await Student.deleteMany({})
        await Comment.deleteMany({})


        const businessPassword = await utils.hashPassword('user2')
        const business = await new Business({
            name: "Papa John's",
            username: 'bossbusiness',
            email: "papa.john@gmail.com",
            password: businessPassword,
            dateCreated: new Date().toLocaleString().split(",")[0],
            type: 'Resturant',
            description: `American pizza restaurant franchise. It is the fourth largest pizza delivery
                restaurant chain in the United States, with headquarters in Atlanta, Georgia.`,
            dateCreated: new Date().toLocaleString().split(',')[0]

        }).save()

        const announcement1 = await new Announcement({
            content: "Buy one get one free pizza for students",
            poster: business,
            poster_name: business.name,
            date: new Date().toLocaleString().split(',')[0]
        }).save()

        const announcement2 = await new Announcement({
            content: "Buy one medium pizza and get 2 free toppings",
            poster: business,
            poster_name: business.name,
            date: new Date().toLocaleString().split(',')[0]
        }).save()

        const announcement3 = await new Announcement({
            content: "Buy one large pizza and get 3 free toppings",
            poster: business,
            poster_name: business.name,
            date: new Date().toLocaleString().split(',')[0]
        }).save()

        const studentPassword = await utils.hashPassword('user')
        const student = await new Student({
            email: "example.mail@gmail.com",
            username: 'user',
            first_name: "Shin",
            last_name: "Chan",
            password: studentPassword
        }).save()

        const comment = await new Comment({
            content: "The pizza here is good, would like more sauce.",
            poster: student,
            created: Date(),
            business: business.id
        }).save()

        business.announcements.push(announcement1)
        business.announcements.push(announcement2)
        business.announcements.push(announcement3)
        business.comments.push(comment)
        await business.save()

    } catch (error) {
        console.log(error)
    }
}

if (process.env.RESETDB == 'true') { seedDatabase() }

