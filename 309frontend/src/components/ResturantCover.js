function ResturantCover(props) {


    const styles = {
        wrapper: {
            backgroundColor: 'rgb(241, 241, 241)',
            overflow: 'hidden',
            margin: '5px 20px 5px 20px',
            float: 'left',
            width: '100%',
            marginRight: '20px',
        },
        img: {
            height: '180px',
            width: '200px',
            float: 'left',
            padding: '3px',
            marginRight: '10px'
        },
        resturantName: {
            float: 'left',
            marginTop: '5px',
            marginBottom: '1px',
        },
        resturantDesc: {
            float: 'left',
            marginTop: '-5px',
        }

    }

    return (
        <div style={styles.wrapper}>
            <img src={props.img} style={styles.img} alt='Resturant'></img>
            <h3 style={styles.resturantName}>{props.name}</h3>
            <br/><br/>
            <p style={styles.resturantDesc}>{props.desc}</p>
        </div>
    );
}

export default ResturantCover