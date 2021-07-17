import { Select, Radio, Row, Col } from 'antd'

function CustomHeader({ value, type, onChange, onTypeChange }) {
    const start = 0
    const end = 12
    const monthOptions = []

    const current = value.clone()
    const localeData = value.localeData()
    const months = []
    for (let i = 0; i < 12; i++) {
        const month = current.month(i)
        months.push(localeData.monthsShort(month))
    }

    for (let index = start; index < end; index++) {
        monthOptions.push(
            <Select.Option className="month-item" key={`${index}`}>
                {months[index]}
            </Select.Option>
        )
    }
    const month = value.month()

    const year = value.year()
    const options = []
    for (let i = year - 10; i < year + 10; i += 1) {
        options.push(
            <Select.Option key={i} value={i} className="year-item">
                {i}
            </Select.Option>
        )
    }
    return (
        <div className="p-xs flex justify-center">
            <Row gutter={8}>
                <Col>
                    <Select
                        size="small"
                        dropdownMatchSelectWidth={false}
                        className="my-year-select"
                        onChange={selectedYear => {
                            const newYear = value.clone().year(selectedYear)
                            onChange(newYear)
                        }}
                        value={String(year)}
                    >
                        {options}
                    </Select>
                </Col>
                <Col>
                    <Select
                        size="small"
                        dropdownMatchSelectWidth={false}
                        value={String(month)}
                        onChange={selectedMonth => {
                            const newValue = value.clone().month(parseInt(selectedMonth, 10))
                            onChange(newValue)
                        }}
                    >
                        {monthOptions}
                    </Select>
                </Col>
                <Col>
                    <Radio.Group
                        size="small"
                        onChange={(e) => onTypeChange(e.target.value)}
                        value={type}
                    >
                        <Radio.Button value="month">Month</Radio.Button>
                        <Radio.Button value="year">Year</Radio.Button>
                    </Radio.Group>
                </Col>
            </Row>
        </div>
    )
}

export default CustomHeader
