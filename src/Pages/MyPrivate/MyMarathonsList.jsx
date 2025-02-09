import { useEffect, useState } from "react"
import { TableData, useAuth, useAxios } from "../../App";
import { Helmet } from "react-helmet";

function MyMarathonsList() {

  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  const { user: { email } = {} } = useAuth();
  const [marathons, setMarathons] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/marathonByEmail?email=${email}`)
      .then(res => {
        setMarathons(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err.status))
  }, [])

  const handelDeleteMarathon = (id) => {
    return axiosInstance.delete(`/deleteMarathon/${id}`)
  }

  const handelSortClick = () => {
    axiosInstance.get(`/marathonByEmail/sort?email=${email}`)
      .then((res) => {
        setMarathons([...res.data]);
      })
  }

  if (loading) {
    return <div className='text-3xl min-h-[70vh] grid place-items-center'><span className="loading loading-spinner text-info w-20"></span></div>
  }

  return (
    <div className="overflow-x-auto">
      <div className="text-right mr-6">
        <button onClick={handelSortClick} className="btn btn-warning text-black text-xl">Sort</button>
      </div>
      <Helmet>
        <title>RunRoute | My Marathons</title>
      </Helmet>
      <table className="table w-full">
        <caption className="text-3xl md:text-5xl my-6">All My Marathon's</caption>
        {/* head */}
        <thead>
          <tr>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">ID</th>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">Title</th>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">Location</th>
            <th className="text-center text-base text-base-content border border-base-content border-b-2 hidden lg:table-cell">Distance</th>
            <th className="text-center text-base text-base-content border border-base-content border-b-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            marathons?.map((marathon, idx) => <TableData key={idx} marathon={marathon} idx={idx} setMarathons={setMarathons} handelDelete={handelDeleteMarathon} />)
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyMarathonsList
