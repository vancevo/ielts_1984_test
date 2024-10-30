import { memo } from 'react';

const Navbar = ({ point }) => {
    return (
        <div className="w-100 h-[40px] bg-blue-500 text-white gap-4">
            <div className="flex container justify-around items-center h-[40px] font-bold">
                <p>Vinh Vo</p>
                <p id="point">Point: {point}</p>
            </div>
        </div>
    );
};
export default memo(Navbar);
