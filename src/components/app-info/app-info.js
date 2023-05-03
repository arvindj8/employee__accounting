import './app-info.css'

const AppInfo = () => {
    const title = 'Учет сотрудников в компании N'
    const employeeTotal = 'Общее число сотрудников: '
    const employeeBonus = 'Премию получат: '
    return (
        <div className="app-info">
            <h1>{title}</h1>
            <h2>{employeeTotal}</h2>
            <h2>{employeeBonus}</h2>
        </div>
    )
}

export default AppInfo
