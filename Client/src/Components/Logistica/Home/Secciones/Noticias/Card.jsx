export default function Card({ title, description, image }) {
    return (
        <div className='card mb-3'>
            <img src={image} className='card-img-top' alt='imagen' style={{ height: '400px' }} />
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
            </div>
        </div>
    );
}