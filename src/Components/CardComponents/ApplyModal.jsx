import toast from 'react-hot-toast';
import { useAuth, useAxios } from '../../App'
import DatePicker from 'react-datepicker';

function ApplyModal({ handelCloseModal, marathon }) {

    const axiosInstance = useAxios();
    const { user: { email, displayName } = {} } = useAuth();
    const [userFastName, userLastName] = displayName.split(' ');
    const { _id, title, marathonStartDate } = marathon || {};

    const formattedStartDate = marathonStartDate ? new Date(marathonStartDate).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }) : '';

    const handelRegisterMarathon = (e) => {
        e.preventDefault();
        {/* if there is a button in form, it will close the modal 😊 */ }

        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const contact = form.contact.value;
        const registrationUpdate = { firstName, lastName, contact };

        axiosInstance.put(`/registrationUpdate/${_id}`, registrationUpdate)
            .then((data) => {
                if (data.data.modifiedCount) {
                    toast.success('Successfully Update Register !', {});
                } else {
                    toast.error('Not Modify any Data !', {});
                }
                handelCloseModal();
            })
            .catch((err) => console.log(err))
    }

    return (
        <section className="my-12">
            <div>
                <div className="bg-base-200 w-full shadow-2xl border rounded-2xl py-6">
                    {/* From Start Her - */}
                    <form onSubmit={handelRegisterMarathon} className="card-body ">
                        {/* Marathon Title - Read Only  */}
                        <div className="md:flex justify-between gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" defaultValue={title} className="input input-bordered" required readOnly />
                            </div>
                            {/* Date - Read Only */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Start Date</span>
                                </label>
                                <DatePicker
                                    selected={formattedStartDate}
                                    className='input input-bordered disabled:text-base-content'
                                    dateFormat="dd MMM yyyy"
                                    disabled
                                />
                            </div>
                        </div>
                        {/* Name */}
                        <div className="md:flex justify-between gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name="firstName" defaultValue={userFastName} className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name="lastName" defaultValue={userLastName} className="input input-bordered" required />
                            </div>
                        </div>
                        {/* Email (Read Only/ user can't edit this field) */}
                        <div className="md:flex justify-between gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={email} readOnly className="input input-bordered" required />
                            </div>
                            {/* Confect Number */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Contact Number</span>
                                </label>
                                <input type="number" name="contact" placeholder="Number" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* Add Button */}
                        <div className="mt-8 mx-8 text-center">
                            <button className="btn btn-accent text-lg text-white outline-2 outline outline-black outline-offset-0 w-full">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ApplyModal
