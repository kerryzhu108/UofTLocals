import React from "react";

import "../css/SearchForm.css";

class SearchForm extends React.Component {
    render() {
        const {name, value, onChange, classType} = this.props
        return (
            <form className={classType}>
                <input className="search_form_text" type="text" id="search_var" name={name} value={value} onChange={onChange}></input>
            </form>
        );
    }
}

export default SearchForm;