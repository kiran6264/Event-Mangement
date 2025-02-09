import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAxios } from '../../App';
import toast from 'react-hot-toast';

function MarathonModal({ handelCloseModal, marathon }) {

    const { _id,
        title: prevTitle,
        registrationStartDate: prevRegStartDate,
        registrationEndDate: prevRegEndDate,
        marathonStartDate: prevMarathonStartDate,
        location: prevLocation,
        runningDistance: prevRunDis,
        description: prevDescription,
        image: prevImage,
    } = marathon || {};

    const [title, setTitle] = useState(prevTitle);
    const [registrationStartDate, setRegistrationStartDate] = useState(prevRegStartDate);
    const [registrationEndDate, setRegistrationEndDate] = useState(prevRegEndDate);
    const [marathonStartDate, setMarathonStartDate] = useState(prevMarathonStartDate);
    const [location, setLocation] = useState(prevLocation);
    const [runningDistance, setRunningDistance] = useState(prevRunDis);
    const [description, setDescription] = useState(prevDescription);
    const [image, setImage] = useState(prevImage);
    const axiosInstance = useAxios();

    const handelAddMarathon = (e) => {
        e.preventDefault();
        {/* if there is a button in form, it will close the modal 😊 */ }

        const newMarathon = {
            registrationStartDate,
            registrationEndDate,
            location,
            runningDistance,
            description,
            image
        };
        axiosInstance.put(`/updateMarathon/${_id}`, newMarathon)
            .then((data) => {
                if (data.data.modifiedCount) {
                    toast.success('Successfully Update Data !', {});
                } else {
                    toast.error('Not Modify any Data !', {});
                }
                handelCloseModal();
            })
            .catch((err) => console.log(err))
    }

    return (
        <section>
            <div className="my-6 ml-8">
            </div>
            <div>
                <div className="bg-base-200 w-full shadow-2xl border rounded-2xl py-6">
                    <div className="text-center px-4">

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
                                    placeholder="Campaign Title"
                                    className="input input-bordered"
                                    required
                                    readOnly />
                            </div>
                            {/* Marathon Start Date */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Marathon Start Date</span>
                                </label>
                                <DatePicker
                                    selected={marathonStartDate}
                                    className="input input-bordered w-full"
                                    dateFormat="yyyy-MM-dd"
                                    required
                                    readOnly
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
                            <button className="btn bg-teal-500 text-lg text-white outline-2 outline outline-black outline-offset-0 w-40 sm:w-40 md:w-80 lg:w-96 xl:w-[600px]">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default MarathonModal
