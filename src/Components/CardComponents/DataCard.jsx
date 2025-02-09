import { Link } from 'react-router-dom';

function DataCard({ marathon }) {

    const { _id, title, registrationStartDate, location, description, image } = marathon;

    function formatDate(dateStr) {
        return new Date(dateStr)
            .toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    return (
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold">{title}</h2>
                <p className='underline'>{location}</p>
                <p><b>Reg. Start:</b> {formatDate(registrationStartDate)}</p>
                <p>{`${description.slice(0, 80)}...`}</p>
                <div className="card-actions justify-center mt-4">
                    <Link to={`/marathons/${_id}`} className="btn btn-sm text-lg px-8">Details</Link>
                </div>
            </div>
        </div>
    )
}

export default DataCard
