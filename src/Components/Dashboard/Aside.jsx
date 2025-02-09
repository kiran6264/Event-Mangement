import { NavLink } from 'react-router-dom'

function Aside() {
    return (
        <aside className="menu lg:menu-vertical menu-horizontal col-span-12 lg:col-span-2 gap-4 mt-8 flex justify-center">
            <div>
                <li><NavLink to="/dashboard/addMarathon" className="text-lg font-medium underline max-w-40 inline">Add Marathon</NavLink></li>
            </div>
            <div>
                <li><NavLink to="myMarathons" className="text-lg font-medium underline max-w-40 inline">My Marathons</NavLink></li>
            </div>
            <div>
                <li><NavLink to="myApplies" className="text-lg font-medium underline max-w-40 inline">My Applies</NavLink></li>
            </div>
        </aside>
    )
}

export default Aside
