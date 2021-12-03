import '../css/ResturantCover.css'

function ResturantCover(props) {
    return (
        <div className='wrapper'>
            <a className='imageLink' href={props.dbId}>
                <img src={props.img} className='img' alt='Resturant Cover'></img>
            </a>
            <div className='businessHeaders'>
                <h3 className='businessTitle'>{props.name}</h3>
                <h3 className='businessType'>{props.businessType}</h3>
            </div>
            <br/><br/>
            <p className='businessDesc'>{props.desc}</p>
        </div>
    );
}

export default ResturantCover