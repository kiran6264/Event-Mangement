import { useEffect, useState } from "react"
import { DataCard, useAxios } from "../../App"
import { Helmet } from "react-helmet"

function AllMarathons() {

  const [loading, setLoading] = useState(true);
  const [marathons, setMarathons] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(9);
  const [sort, setSort] = useState(null);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get(`/marathonCount`)
      .then(res => {
        setItemCount(res.data.count);
      }).catch(err => console.log(err))
  }, []);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`/marathons?skip=${(currentPage - 1) * itemPerPage}&limit=${itemPerPage}&sort=${sort}`)
      .then((data) => {
        setMarathons(data.data);
        setLoading(false);
      })
  }, [currentPage, itemPerPage, sort])

  const numberOfPage = Math.ceil(itemCount / itemPerPage);
  const pages = [...Array(numberOfPage).keys()];

  const handelItemParPage = e => {
    setItemPerPage(parseInt(e.target.value))
    setCurrentPage(1)
  }

  const handelSortClick = () => {
    setSort('createdAt')
  }

  const handelPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handelNextPage = () => {
    if (currentPage < numberOfPage) setCurrentPage(currentPage + 1)
  }

  if (loading) {
    return <div className='text-3xl min-h-[70vh] grid place-items-center'><span className="loading loading-spinner text-info w-20"></span></div>
  }

  return (
    <div className="m-8 max-w-[1380px] mx-auto">
      <Helmet>
        <title>RunRoute | All Marathon</title>
      </Helmet>
      <div className="text-right"><button onClick={handelSortClick} className="btn btn-accent btn-outline text-xl">Sort</button></div>
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-16">
        All Marathon's
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 place-items-center">
        {
          marathons?.map((marathon, idx) => <DataCard key={idx} marathon={marathon} />)
        }
      </div>
      <div className="text-center flex justify-center gap-2 my-8">
        <button onClick={handelPrevPage} className="btn btn-sm btn-outline px-6">Prev</button>
        {
          pages?.map(page =>
            <button onClick={() => setCurrentPage(page + 1)} className={`btn btn-sm btn-outline ${currentPage === page + 1 ? 'bg-teal-500' : ''}`} key={page}>
              {page + 1}
            </button>)
        }
        <button onClick={handelNextPage} className="btn btn-sm btn-outline px-6">Next</button>
        <select value={itemPerPage} onChange={handelItemParPage} className="btn btn-sm btn-outline btn-accent">
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
      </div>
    </div>
  )
}

export default AllMarathons
