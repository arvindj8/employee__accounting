import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

const data = [
    {id: 1, name: 'John S.', salary: 500, increase: true},
    {id: 2, name: 'Alex R.', salary: 5500, increase: false},
    {id: 3, name: 'Nina E.', salary: 3400, increase: false},
    {id: 4, name: 'Bret D.', salary: 2400, increase: false},
]


function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App