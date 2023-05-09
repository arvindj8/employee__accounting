import './app-info.css'

const AppInfo = (props) => {
    const {totalEmployees, totalEmployeesBonus} = props
    const title = 'Учет сотрудников в компании N'
    const employeeTotal = `Общее число сотрудников: ${totalEmployees}`
    const employeeBonus = `Премию получат: ${totalEmployeesBonus}`
    return (
        <div className="app-info">
            <h1>{title}</h1>
            <h2>{employeeTotal}</h2>
            <h2>{employeeBonus}</h2>
        </div>
    )
}

export default AppInfo
