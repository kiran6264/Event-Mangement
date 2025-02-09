import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAuth, useAxios } from '../../App';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

function AddMarathon() {

    const { user: { email } = {} } = useAuth();
    const [title, setTitle] = useState("");
    const [registrationStartDate, setRegistrationStartDate] = useState(null);
    const [registrationEndDate, setRegistrationEndDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);
    const [location, setLocation] = useState("");
    const [runningDistance, setRunningDistance] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const axiosInstance = useAxios();

    const handelAddMarathon = (e) => {
        e.preventDefault();

        const newMarathon = {
            title,
            registrationStartDate,
            registrationEndDate,
            marathonStartDate,
            location,
            runningDistance,
            description,
            image,
            createdAt: new Date(),
            creatorEmail: email,
            totalRegistrations: 0,
        };
        axiosInstance.post(`/addMarathon`, newMarathon)
            .then((data) => {
                toast.success('Successfully Submit Data !', {})
            })
            .catch((err) => console.log(err))
    }

    return (
        <section>
            <Helmet>
                <title>RunRoute | Add Marathon</title>
            </Helmet>
            <div>
                <div className="mt-8 bg-base-200 w-full shadow-2xl border rounded-2xl py-6">
                    <div className="text-center px-4">
                        <h2 className="text-3xl font-semibold mb-3">Add New Marathon</h2>
                        <p className="">You can add details like the event name, date, location, distances, participant limits, fees, and route maps. <br /> This tool streamlines event setup, making it easy to promote and manage registrations.</p>
                    </div>
                    {/* From Start Here - */}
                    <form onSubmit={handelAddMarathon} className="card-body ">
                        {/* Marathon Title */}
                        <div className="md:flex justify-between gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Marathon Title</span>
                                </label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Campaign Title"
                                    className="input input-bordered"
                                    required />
                            </div>
                            {/* Marathon Start Date */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Marathon Start Date</span>
                                </label>
                                <DatePicker
                                    selected={marathonStartDate}
                                    onChange={(date) => setMarathonStartDate(date)}
                                    className="input input-bordered w-full"
                                    dateFormat="yyyy-MM-dd"
                                    required
                                />
                            </div>
                        </div>
                        {/* Start Registration Date */}
                        <div className="md:flex justify-between gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Start Registration Date </span>
                                </label>
                                <DatePicker
                                    selected={registrationStartDate}
                                    onChange={(date) => setRegistrationStartDate(date)}
                                    className="input input-bordered w-full"
                                    dateFormat="yyyy-MM-dd"
                                    required
                                />
                            </div>
                            {/* End Registration Date */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">End Registration Date</span>
                                </label>
                                <DatePicker
                                    selected={registrationEndDate}
                                    onChange={(date) => setRegistrationEndDate(date)}
                                    className="input input-bordered w-full"
                                    dateFormat="yyyy-MM-dd"
                                />
                            </div>
                        </div>
                        {/* Marathon Image (URL) */}
                        <div className="md:flex justify-between gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Marathon Image (URL)</span>
                                </label>
                                <input
                                    type="text"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className="input input-bordered"
                                />
                            </div>
                        </div>
                        {/* Marathon Description */}
                        <div className="md:flex justify-between gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Marathon Description</span>
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="input input-bordered h-auto resize-none"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        {/* Marathon Location */}
                        <div className="md:flex justify-between gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="input input-bordered"
                                    placeholder='location'
                                    required
                                />
                            </div>
                            {/* Running Distance */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Running Distance</span>
                                </label>
                                <select
                                    value={runningDistance}
                                    onChange={(e) => setRunningDistance(e.target.value)}
                                    className="input input-bordered">
                                    <option value="3k">3k</option>
                                    <option value="10k">10k</option>
                                    <option value="25k">25k</option>
                                </select>
                            </div>
                        </div>
                        {/* Add Button */}
                        <div className="mt-8 mx-8 text-center">
                            <button className="btn bg-teal-500 text-lg text-white outline-2 outline outline-black outline-offset-0 w-full">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddMarathon
