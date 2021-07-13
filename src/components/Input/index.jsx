
function Input ({ className, name, placeholder, value, valid, onChange }) {
    const borderStyle = valid || valid === undefined
                            ? 'border-b-2px border-letter60 focus:border-blue'
                            : 'border-b-2px border-alert focus:border-alert'

    return (
        <label className={`w-full h-auto flex flex-col ${className}`}>
                <h5>{name}</h5>
                <input
                    className={`w-full border-b-2px border-letter60 ${borderStyle}`}
                    type="text" 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
        </label>
    )
}

export default Input