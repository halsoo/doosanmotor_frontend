import Icons from '../Shared/Icons'

function Confirm ({ className, text, disabled, disabledText, onClick }) {

    const buttonStyle = disabled ? 'bg-alert bg-opacity-50' : 'bg-blue'
    const buttonText = disabled ? disabledText : text

    return (
        <button 
            className={`${className} flex flex-row justify-center items-center ${buttonStyle} rounded-12px`}
            disabled={disabled}
            onClick={onClick}
        >
            <Icons 
                svgClass={`h-36% mr-xs fill-white ${disabled ? 'hidden' : ''}`}
                name="check"
                visible={!disabled}
            />
            <p className="h4white">{buttonText}</p>
        </button>
    )
}

export default Confirm