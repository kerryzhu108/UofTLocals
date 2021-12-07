const { Business } = require("./models/Business");
const { Announcement } = require("./models/Announcement");
const { Student } = require("./models/Student");
const { Comment } = require("./models/Comment");

const utils = require("./utils/utils");
const { Review } = require("./models/Review");

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
            username: 'user2',
            email: "papa.john@gmail.com",
            password: businessPassword,
            dateCreated: new Date().toLocaleString().split(",")[0],
            type: 'Resturant',
            description: `American pizza restaurant franchise. It is the fourth largest pizza delivery restaurant chain in the United States, with headquarters in Atlanta, Georgia.`,
            dateCreated: new Date().toLocaleString().split(',')[0]

        }).save()

        const businessPassword2 = await utils.hashPassword('user3')
        const business2 = await new Business({
            name: "Domino's",
            username: 'user3',
            email: "domino.john@gmail.com",
            password: businessPassword2,
            dateCreated: new Date().toLocaleString().split(",")[0],
            type: 'Resturant',
            description: `Domino's Pizza, Inc. is an American multinational pizza restaurant chain founded in 1960 and led by CEO Richard Allison. The corporation is Delaware domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor, Michigan.`,
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

        const announcement4 = await new Announcement({
            content: "Buy two medium cheese pizzas and get a complimentary drink",
            poster: business2,
            poster_name: business2.name,
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

        const adminPassword = await utils.hashPassword('admin')
        await new Student({
            email: "admin.mail@gmail.com",
            username: 'admin',
            first_name: "Admin",
            last_name: "San",
            password: adminPassword,
            type: 'admin'
        }).save()

        const comment1 = await new Comment({
            content: "The pizza here is good, would like more sauce.",
            poster: student,
            created: Date(),
            business: business.id
        }).save()

        const comment2 = await new Comment({
            content: "Yeah the pizza needs more sauces.",
            poster: student,
            created: Date(),
            business: business.id
        }).save()

        const comment3 = await new Comment({
            content: "Can't go wrong with Domino's, food tastes as expected.",
            poster: student,
            created: Date(),
            business: business.id
        }).save()

        const review = await new Review({
            content: "Delicious pizza, cannot recommend it enough!",
            poster: student,
            created: Date(),
            rating: 5,
            business: business.id,
        }).save();

        business.announcements.push(announcement1)
        business.announcements.push(announcement2)
        business.announcements.push(announcement3)
        business.comments.push(comment1)
        business.comments.push(comment2)
        student.comments.push(comment1);
        student.comments.push(comment2);
        student.comments.push(comment3);
        student.reviews.push(review);

        business2.announcements.push(announcement4)
        business2.comments.push(comment3)
        business.reviews.push(review);
        await business.save()
        await business2.save()
        await student.save();

        console.log("Database seeded")

    } catch (error) {
        console.log(error)
    }
}

if (process.env.RESETDB == 'true') { seedDatabase() }

