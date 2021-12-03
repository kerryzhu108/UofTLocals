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


        const businessPassword = await utils.hashPassword('abcd')
        const business = await new Business({
            name: "Papa John's",
            email: "papa.john@gmail.com",
            password: businessPassword,
            type: 'Resturant',
            description: `American pizza restaurant franchise. It is the fourth largest pizza delivery
                restaurant chain in the United States, with headquarters in Atlanta, Georgia.`,
            dateCreated: new Date().toLocaleString().split(',')[0]

        }).save()

        await new Announcement({
            content: "Buy one get one free pizza for students",
            poster: business,
        }).save()

        const student = await new Student({
            email: "example.mail@gmail.com",
            first_name: "Shin",
            last_name: "Chan",
            password: "1234"
        }).save()

        await new Comment({
            content: "The pizza here is good, would like more sauce.",
            poster: student,
        }).save()

    } catch (error) {
        console.log(error)
    }
}

if (process.env.RESETDB == 'true') { seedDatabase() }

