import {Component} from "react";

import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'John S.', salary: 500, bonus: false, isCareerUp: true},
                {id: 2, name: 'Alex R.', salary: 5500, bonus: false, isCareerUp: false},
                {id: 3, name: 'Nina E.', salary: 3400, bonus: false, isCareerUp: false},
                {id: 4, name: 'Bret D.', salary: 2400, bonus: false, isCareerUp: false},
            ],
            searchStr: '',
            filter: 'all'
        }
        this.maxId = 5
    }

    addItem = (name, salary) => {
        const newEmployee = {
            id: this.maxId++,
            name,
            salary,
            bonus: false,
            isCareerUp: false
        }

        this.setState(({data}) => {
            const newData = [...data, newEmployee]
            console.log(newData)
            return {
                data: newData
            }

        })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onBonus = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, bonus: !item.bonus}
                }
                return item
            })
        }))
    }


    onRiseCareer = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, isCareerUp: !item.isCareerUp}
                }
                return item
            })
        }))
    }


    onSearchItem = (items, searchStr) => {
        if (searchStr.length === 0) {
            return items
        }
        return items.filter(item => item.name.indexOf(searchStr) > -1)
    }

    onUpdateSearch = (searchStr) => {
        this.setState({searchStr})
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'salary':
                return items.filter(item => item.salary > 1000)
            case 'career':
                return items.filter(item => item.isCareerUp)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, searchStr, filter} = this.state
        const totalEmployees = this.state.data.length
        const totalEmployeesBonus = this.state.data.filter(item => item.bonus).length
        const visibleData = this.filterPost(this.onSearchItem(data, searchStr), filter)
        return (
            <div className="app">
                <AppInfo totalEmployees={totalEmployees}
                         totalEmployeesBonus={totalEmployeesBonus}
                />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter}
                               onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList data={visibleData}
                               onDelete={this.deleteItem}
                               onBonus={this.onBonus}
                               onRiseCareer={this.onRiseCareer}/>

                <EmployeesAddForm onCreate={this.addItem}/>
            </div>
        )
    }
}

export default App