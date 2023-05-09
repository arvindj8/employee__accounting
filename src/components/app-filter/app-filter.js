import './app-filter.css'

const AppFilter = (props) => {

    const btnData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'career', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'},
    ]

    const {filter, onFilterSelect} = props

    const buttons = btnData.map(({name, label}) => {
        const isActiveBtn = filter === name
        const btnActive = isActiveBtn ? 'btn-light' : 'btn btn-outline-light'

        return (
            <button type="btn"
                    key={name}
                    className={`btn ${btnActive}`}
                    onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        )
    })


    return (
        <div className="btn-group">
            {buttons}
        </div>
    )


}

export default AppFilter