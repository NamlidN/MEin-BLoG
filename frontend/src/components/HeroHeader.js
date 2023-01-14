import { Link } from "react-router-dom";

const HeroHeader = (props) => {

    return(
        <header className="haa">
       <h1>{props.title}</h1>
        <Link className="WwW" placeholder="to ADmin Page" to="/admin"/> 
        </header>
    )
}
export default HeroHeader