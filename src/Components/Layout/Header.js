import { Fragment } from "react"

const Header = (props) => {
    return (
        <Fragment>
            <header>
                <h1>Tasty Treats</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src="../../Assets/meals.jpg" alt="Food background" />
            </div>
        </Fragment>
    )
}

export default Header;