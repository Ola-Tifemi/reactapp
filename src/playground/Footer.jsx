const Footer = ({xyz, author, currentYear}) => {
    return (
        <div className="">
            <p> Copyright &copy; {xyz} By {author}, <strong>{currentYear}</strong></p>
            {
                currentYear < 2025 && <p>Your Post is Outdated</p>
            }
            {/* if the year is less than 2025: <p>Your Post is Outdated</p> */}
        </div>
    )
}
export default Footer