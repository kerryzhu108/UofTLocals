import React from "react";

import "../css/SearchForm.css";

class SearchForm extends React.Component {
    render() {
        const {name, value, onChange, classType} = this.props
        return (
            <form className={classType}>
                <input className="search_form_text" name={name} value={value} onChange={onChange} placeholder="SEARCH"></input>
            </form>
        );
    }
}

export default SearchForm;