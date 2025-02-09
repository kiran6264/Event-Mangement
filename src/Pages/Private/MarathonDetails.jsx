import { Link, useParams } from "react-router-dom";
import { MarathonCountdown, useAxios } from "../../App";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function MarathonDetails() {

  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [marathon, setMarathon] = useState({});
  const [register, setRegister] = useState(true);
  const axiosInstance = useAxios();
  console.log(id)
  const { _id, title, registrationStartDate, registrationEndDate, marathonStartDate, location, runningDistance, description, image, createdAt, totalRegistrations } = marathon || {};

  const marathonStartCountdown = new Date(marathonStartDate);

  function formatDate(dateStr) {
    return new Date(dateStr)
      .toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  useEffect(() => {
    axiosInstance.get(`/marathons/${id}`)
      .then(res => {
        setMarathon(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err.status))
  }, [])


  // A challenging trail run through scenic mountain paths and lush forests.
  const resStartDate = new Date(registrationStartDate);
  const resEndDate = new Date(registrationEndDate);
  const currentDate = new Date();

  useEffect(() => {
    if (resStartDate < currentDate && resEndDate > currentDate) {
      setRegister(false);
    } else {
      setRegister(true);
    }
  }, [resStartDate, resEndDate, currentDate]);

  if (loading) {
    return <div className='text-3xl min-h-[70vh] grid place-items-center'><span className="loading loading-spinner text-info w-20"></span></div>
  }

  return (
    <div className="px-2">
      <Helmet>
        <title>RunRoute | {title || ''}</title>
      </Helmet>
      <div>
        <div className="flex items-center justify-center bg-base-200 py-4">
          <MarathonCountdown targetDate={marathonStartCountdown} />
        </div>
      </div>
      <div className="card card-compact bg-base-100 max-w-[1080px] mx-auto my-12 shadow-xl border md:flex-row p-3 sm:p-5">
        <figure>
          <img className="rounded-xl" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">{title}</h2>
          <div className='flex items-center justify-start gap-3'>
            <p className="badge badge-success text-white p-3">{runningDistance}m.</p>
            <p><b>On.</b> {formatDate(marathonStartDate)}</p>
          </div>
          <p><b>Reg. Start:</b> {formatDate(registrationStartDate)}</p>
          <p><b>Reg. End:</b> {formatDate(registrationEndDate)}</p>
          <p><b>Marathon Create:</b> {formatDate(createdAt)}</p>
          <p className="max-w-full md:max-w-96">{description}</p>
          <p className="underline">{location}</p>
          <div>
            <span><b>Total Reg.</b></span>
            <p className="badge bg-black border-transparent text-white p-3 ml-2">{totalRegistrations}</p>
          </div>
          <div className="card-actions justify-center mt-4">
            <button disabled={register} className="btn btn-sm btn-accent text-lg px-8 disabled:border disabled:border-base-content disabled:text-base-content/40 "><Link to={`/registration/${_id}`} className="w-full">Register</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarathonDetails
