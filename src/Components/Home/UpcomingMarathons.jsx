function UpcomingMarathons() {
  return (
    <div className="my-12 max-w-[1380px] mx-auto">
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-16">
        UpComing Marathon's
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 place-items-center">
        {/* Card */}
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img src='https://i.ibb.co.com/B4t26VZ/21.jpg' alt="" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">Autumn Leaves Dash</h2>
            <p className="badge badge-success text-white p-3">2025-04-25</p>
            <p>Dash through vibrant autumn leaves in this picturesque marathon.</p>
            <div className="card-actions justify-center mt-4">
              <button disabled className="btn btn-sm text-lg px-8">Up Coming...</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img src='https://i.ibb.co.com/9Nz5f73/20.jpg' alt="" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">Winter Wonderland Run</h2>
            <p className="badge badge-success text-white p-3">2025-05-15</p>
            <p>A serene winter marathon through snowy trails and crisp air.</p>
            <div className="card-actions justify-center mt-4">
              <button disabled className="btn btn-sm text-lg px-8">Up Coming...</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img src='https://i.ibb.co.com/8bJFc3K/19.jpg' alt="" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">Spring Blossom Race</h2>
            <p className="badge badge-success text-white p-3">2025-02-25</p>
            <p>Celebrate the arrival of spring by running amidst blooming flowers.</p>
            <div className="card-actions justify-center mt-4">
              <button disabled className="btn btn-sm text-lg px-8">Up Coming...</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img src='https://i.ibb.co.com/5YpFXPn/18.jpg' alt="" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">Summer Sun Sprint</h2>
            <p className="badge badge-success text-white p-3">2025-06-25</p>
            <p>A sunny marathon along the beach, perfect for summer enthusiasts.</p>
            <div className="card-actions justify-center mt-4">
              <button disabled className="btn btn-sm text-lg px-8">Up Coming...</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img src='https://i.ibb.co.com/G70z1pm/17.jpg' alt="" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">Mountain Challenge Marathon</h2>
            <p className="badge badge-success text-white p-3">2025-08-25</p>
            <p>Tackle rugged mountain trails in this adventurous marathon</p>
            <div className="card-actions justify-center mt-4">
              <button disabled className="btn btn-sm text-lg px-8">Up Coming...</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card card-compact bg-base-100 max-w-96 shadow-xl border">
          <figure>
            <img src='https://i.ibb.co.com/z2gPyP0/16.jpg' alt="" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">City Night Glow Run</h2>
            <p className="badge badge-success text-white p-3">2025-07-25</p>
            <p>Run under the city lights with glowing gear in this night marathon.</p>
            <div className="card-actions justify-center mt-4">
              <button disabled className="btn btn-sm text-lg px-8">Up Coming...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingMarathons
