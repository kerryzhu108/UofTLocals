import { deleteBusiness } from "../apis/business";

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
export const removeBusiness = (panel, business) => {
    deleteBusiness(business._id)
    const filteredBus = panel.state.businesses.filter(b => {
        return b !== business
    });

    panel.setState({
        businesses: filteredBus
    })
}

// Functionality for removing a post; simply remove it from the post list
export const removePost = (panel, post) => {
    const filteredPost = panel.state.posts.filter(b => {
        return b !== post
    });

    panel.setState({
        posts: filteredPost
    })
}

// Functionality for sorting the entries based on certain inputs
export function sortation(val, event, panel) {
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