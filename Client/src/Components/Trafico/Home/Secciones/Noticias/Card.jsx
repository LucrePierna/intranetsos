export default function Card({ title, description, image }) {
    return (
        <div className='card cardConteiner mb-3'>
            <img src={image} className='card-img-top' alt='imagen' style={{ height: '400px' }} />
            <div className='card-body mt-3'>
                <h3 className='card-title text-bg-danger rounded'>{title}</h3>
                <p className='card-text fs-5'>{description}</p>
            </div>
        </div>
    );
}