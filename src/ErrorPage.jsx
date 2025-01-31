import { Link } from "react-router-dom";

const ErrorPage = () => {
    return(
        <div>
            <h1>Oh no, this route doesn't exist!</h1>
            <LInk to="/">
                You can go back to the home page by clicking here, though!
            </LInk>
        </div>
    )
}

export default ErrorPage