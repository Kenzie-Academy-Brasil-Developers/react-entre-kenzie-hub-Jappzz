export const Options = ({value, text, className})=>{
    return(
        <>
            <option value={value} className={className}>
                {text}
            </option>
        </>
    )
}