import './employees-list-Item.css'


const EmployeesListItem = (props) => {
    const {name, salary, bonus, isCareerUp, onDelete, onBonus, onRiseCareer} = props
    let classIncrease = 'list-group-item d-flex justify-content-between'

    if (bonus) {
        classIncrease += ' increase'
    }

    if (isCareerUp) {
        classIncrease += ' like'
    }

    return (
        <li className={classIncrease}>
            <span className={'list-group-item-label like'} onClick={onRiseCareer}>{name}</span>
            <input type="text" className={'list-group-item-input'} defaultValue={salary + '$'}/>
            <div className={'d-flex justify-content-center align-items-center'}>
                <button onClick={onBonus} type={'button'} className={'btn-cookie btn-sm '}>
                    <i className={'fas fa-cookie'}></i>
                </button>

                <button type={'button'}
                        className={'btn-trash btn-sm'}
                        onClick={onDelete}>
                    <i className={'fas fa-trash'}></i>
                </button>
                <i className={'fas fa-star'}></i>
            </div>
        </li>
    )
}


export default EmployeesListItem