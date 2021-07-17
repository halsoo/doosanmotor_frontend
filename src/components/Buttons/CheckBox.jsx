import Icons from '../Shared/Icons'

function CheckBox ({ className, value, disabled, onClick }) {
    const fillStyle = disabled
                        ? 
                            {
                                active: 'fill-admin-grey',
                                inactive: 'fill-transparent'
                            }
                        :
                            {
                                active: 'fill-blue',
                                inactive: 'fill-transparent'
                            }
    return (
        <button 
            className={`${className} border border-2px ${disabled ? 'border-admin-grey' : 'border-blue'}`} 
            onClick={onClick} // {onClick(value)}
        >
            <Icons 
                svgClass={`w-full h-full ${value ? fillStyle.active : fillStyle.inactive}`}
                name={value ? 'checkbox-on' : 'checkbox-off'}
                visible={true}
            />
        </button>
    )
}

export default CheckBox