export const denyApp = (panel, business) => {
    const filteredApps = panel.state.business_applications.filter(b => {
        return b !== business
    });

    panel.setState({
        business_applications: filteredApps
    })
}

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

export const removeBusiness = (panel, business) => {
    const filteredBus = panel.state.businesses.filter(b => {
        return b !== business
    });

    panel.setState({
        businesses: filteredBus
    })
}