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
        businessHeaders: {
            marginTop: '10px',
        },
        businessTitle: {
            float: 'left',
            margin: '1px',
        },
        businessType: {
            float: 'right',
            margin: '1px',
            marginRight: '5px',
            fontSize: '10px',
        },
        businessDesc: {
            float: 'left',
            marginTop: '-5px',
        }

    }

    return (
        <div style={styles.wrapper}>
            <img src={props.img} style={styles.img} alt='Resturant'></img>
            <div style={styles.businessHeaders}>
                <h3 style={styles.businessTitle}>{props.name}</h3>
                <h3 style={styles.businessType}>{props.businessType}</h3>
            </div>
            <br/><br/>
            <p style={styles.businessDesc}>{props.desc}</p>
        </div>
    );
}

export default ResturantCover