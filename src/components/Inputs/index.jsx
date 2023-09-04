
export const Input = ({ label, type, register, placeholder }) => {
    return (
        <>
            <label className="headline color-grey0">
                {label}
            </label>
            <input className="input paragraph" type={type} {...register} placeholder={placeholder}/>
        </>
    )
}