import '../css/ResturantCover.css'

function ResturantCover(props) {
    return (
        <div class='wrapper'>
            <a class='imageLink' href={props.route}>
                <img src={props.img} class='img' alt='Resturant Cover'></img>
            </a>
            <div class='businessHeaders'>
                <h3 class='businessTitle'>{props.name}</h3>
                <h3 class='businessType'>{props.businessType}</h3>
            </div>
            <br/><br/>
            <p class='businessDesc'>{props.desc}</p>
        </div>
    );
}

export default ResturantCover