
export const Input = ({ label, type, register, placeholder }) => {
    return (
        <>
            <label className="headline">
                {label}
            </label>
            <input className="input paragraph" type={type} {...register} placeholder={placeholder}/>
        </>
    )
}