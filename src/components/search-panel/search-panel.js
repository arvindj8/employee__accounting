import {Component} from "react";

import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch: ''
        }
    }

    updateSearch = (e) => {
        const strSearch = e.target.value
        this.setState({strSearch})
        this.props.onUpdateSearch(strSearch)
    }


    render() {
        return (
            <input className={'form-control search-input'}
                   type="text"
                   placeholder={'Найти сотрудника'}
                   onChange={this.updateSearch}
                   value={this.state.searchStr}/>
        )
    }
}

export default SearchPanel