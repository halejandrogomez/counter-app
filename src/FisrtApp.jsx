import PropTypes from "prop-types";

export function FirstApp( { title, message } ) {
    return (
        <>
            <h1>{ title }</h1>
            <p>{ message }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    message: 'No hay subtitulo',
}