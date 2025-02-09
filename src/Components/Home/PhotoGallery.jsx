function PhotoGallery() {
  return (
    <div className="max-w-[1380px] mx-auto my-12">
      <h5 className="text-lime-500 font-semibold text-center">AMAZING PHOTOSTATING</h5>
      <h2 className="text-3xl md:text-5xl font-semibold text-center mt-2 mb-8">The Latest Photos_</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 place-items-center">
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img className="rounded-xl" src="https://i.ibb.co.com/WsyPsD0/Gallery-1.webp" alt="" />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img className="rounded-xl" src="https://i.ibb.co.com/pLX7rKL/Gallery-2.jpg" alt="" />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img className="rounded-xl" src="https://i.ibb.co.com/hWGtP0z/Gallery-4.webp" alt="" />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img className="rounded-xl" src="https://i.ibb.co.com/QCmX6YQ/Gallery-5.jpg" alt="" />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img className="rounded-xl" src="https://i.ibb.co.com/9tTgkFq/Gallery-5.webp" alt="" />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img className="rounded-xl" src="https://i.ibb.co.com/jvQxCv2/Gallery-6.jpg" alt="" />
          </figure>
        </div>
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img className="rounded-xl" src="https://i.ibb.co.com/qBJNnpr/Gallery-6.webp" alt="" />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
