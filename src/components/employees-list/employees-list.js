import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'


const EmployeesList = ({data, onDelete, onBonus, onRiseCareer}) => {
    if (data.length === 0) {
        return (
            <ul className="app-list list-group">
                <li className={'list-group-item not-found'}>
                    <span>
                        Сотрудники отсутствуют
                    </span>
                </li>
            </ul>
        )
    }

    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <EmployeesListItem key={id}
                               {...itemProps}
                               onDelete={() => onDelete(id)}
                               onBonus={() => onBonus(id)}
                               onRiseCareer={() => onRiseCareer(id)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList