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
    const filteredPost = panel.state.posts.filter(x=> !postToRemove.includes(x))

    panel.setState({
        posts: filteredPost
    })

    // console.log(business.id)
    // panel.state.posts.forEach((post) => {
    //     if (post.parent_id === business.id) {
    //         console.log("Call for: " + post.id)
    //         // call delete post directly from here?
    //         deletePost(post.parent_id, post.id)
    //         var filteredPost = panel.state.posts.filter(b => {
    //             return b !== post
    //         });

    //         panel.setState({
    //             posts: filteredPost
    //         })
    //         console.log("Removed!")
    //     }
    // })
    // console.log("Call for remove business")
    // deleteBusiness(business.id)
    // const filteredBus = panel.state.businesses.filter(b => {
    //     return b !== business
    // });

    // panel.setState({
    //     businesses: filteredBus
    // })
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

// Functionality for sorting the entries based on certain inputs
export function sortation(val, event, panel) {
    console.log(panel.state.businesses[1].announcements)
    if (val === "(A-Z)") {
        if (event.target.id === "apps") {
            panel.state.business_applications.sort((a, b) => a.name.localeCompare(b.name))
        } else if (event.target.id === "bus") {
            panel.state.businesses.sort((a, b) => a.name.localeCompare(b.name))
        } else if (event.target.id === "posts") {
            panel.state.posts.sort((a, b) => a.name.localeCompare(b.name))
        }
    } else if (val === "(Z-A)") {
        if (event.target.id === "apps") {
            panel.state.business_applications.sort((a, b) => a.name.localeCompare(b.name))
            panel.state.business_applications.reverse()
        } else if (event.target.id === "bus") {
            panel.state.businesses.sort((a, b) => a.name.localeCompare(b.name))
            panel.state.businesses.reverse()
        } else if (event.target.id === "posts") {
            panel.state.posts.sort((a, b) => a.name.localeCompare(b.name))
            panel.state.posts.reverse()
        }
    } else if (val === "DateNew") {
        if (event.target.id === "apps") {
            panel.state.business_applications.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
        } else if (event.target.id === "bus") {
            panel.state.businesses.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
        } else if (event.target.id === "posts") {
            panel.state.posts.sort((a, b) => { return new Date(b.date) - new Date(a.date) })
        }
    } else if (val === "DateOld") {
        if (event.target.id === "apps") {
            panel.state.business_applications.sort((a, b) => { return new Date(a.date) - new Date(b.date) })
        } else if (event.target.id === "bus") {
            panel.state.businesses.sort((a, b) => { return new Date(a.date) - new Date(b.date) })
        } else if (event.target.id === "posts") {
            panel.state.posts.sort((a, b) => { return new Date(a.date) - new Date(b.date) })
        }
    }
}