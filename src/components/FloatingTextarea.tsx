import React from 'react';

const FloatingTextarea = ({ value, valueSetter, label }:{value:string,  valueSetter:(input:any) => void, label?:string}) => {
    return (
        <div className="w-full sm:max-w-sm md:max-w-full lg:max-w-full space-y-3">
            <div className="relative">
                <textarea
                    id="hs-floating-textarea-message"
                    className="peer p-4 block w-full h-40 border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                        focus:pt-6
                        focus:pb-2
                        [&:not(:placeholder-shown)]:pt-6
                        [&:not(:placeholder-shown)]:pb-2"
                    placeholder=" "
                    value={value}
                    onChange={(e) => valueSetter(e.target.value)}
                />
                <label
                    htmlFor="hs-floating-textarea-message"
                    className="absolute top-0 left-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-placeholder-shown:scale-100
                        peer-placeholder-shown:translate-y-0
                        peer-[:not(:placeholder-shown)]:scale-90
                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500">
                    {label || "Please enter your message"}
                </label>
            </div>
        </div>
    );
};

export default FloatingTextarea;
