import { deleteBusiness, deletePost, deleteIndPost } from "../apis/business";

// Functionality for denying the application; simply remove it from the application list
export const denyApp = (panel, business) => {
    const filteredApps = panel.state.business_applications.filter(b => {
        return b !== business
    });

    panel.setState({
        business_applications: filteredApps
    })
}

// Functionality for accepting the application; simply remove it from the application list and add to businesses list
export const acceptApp = (panel, business) => {
    const filteredApps = panel.state.business_applications.filter(b => {
        return b !== business
    });

    const busList = panel.state.businesses;
    busList.push(business);
    panel.setState({
        business_applications: filteredApps,
        businesses: busList
    })
}

// Functionality for removing a business; simply remove it from the business list
export function removeBusiness(panel, business) {
    // kill business first, then using business.id, kill posts
    const bus_id = business.id
    deleteBusiness(bus_id)
    const filteredBus = panel.state.businesses.filter(b => {
        return b !== business
    });

    panel.setState({
        businesses: filteredBus
    })
    var postToRemove = []
    panel.state.posts.forEach((post) => {
        if (post.parent_id === bus_id) {
            deleteIndPost(post.id)
            postToRemove.push(post)
        }
    })
    const filteredPost = panel.state.posts.filter(x => !postToRemove.includes(x))

    panel.setState({
        posts: filteredPost
    })
}

// Functionality for removing a post; simply remove it from the post list
export function removePost(panel, post) {
    deletePost(post.parent_id, post.id)
    const filteredPost = panel.state.posts.filter(b => {
        return b !== post
    });

    panel.setState({
        posts: filteredPost
    })
}

export function myFunc() {
    alert("This is the Admin Panel. Here, you can sort through businesses and their announcements, search by name, and remove posts and businesses! You can also link to the business' website by clicking the orange button titled 'Profile Link'! If you wish to return to the landing (browse) page, click browse in the top right!")
}

// Functionality for sorting the entries based on certain inputs
export function sortation(val, event, panel) {
    console.log(panel.state.businesses[1].announcements)
    if (val === "(A-Z)") {
        if (event.target.id === "bus") {
            panel.state.businesses.sort((a, b) => a.name.localeCompare(b.name))
        } else if (event.target.id === "posts") {
            panel.state.posts.sort((a, b) => a.name.localeCompare(b.name))
        }
    } else if (val === "(Z-A)") {
        if (event.target.id === "bus") {
            panel.state.businesses.sort((a, b) => a.name.localeCompare(b.name))
            panel.state.businesses.reverse()
        } else if (event.target.id === "posts") {
            panel.state.posts.sort((a, b) => a.name.localeCompare(b.name))
            panel.state.posts.reverse()
        }
    } else if (val === "DateNew") {
        if (event.target.id === "bus") {
            panel.state.businesses.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
        } else if (event.target.id === "posts") {
            panel.state.posts.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
        }
    } else if (val === "DateOld") {
        if (event.target.id === "bus") {
            panel.state.businesses.sort((a, b) => { return new Date(a.date) - new Date(b.date) })
        } else if (event.target.id === "posts") {
            panel.state.posts.sort((a, b) => { return new Date(a.date) - new Date(b.date) })
        }
    }
}