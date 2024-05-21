import { BsSend } from "react-icons/bs";

const MessageInput = () => {
    return (
        <form className='px-4 my-3 relative'> {/* Added relative positioning to the form container */}
            <div className='relative w-full'> {/* Added relative positioning to the input container */}
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                />
                <button type='submit' className='absolute inset-y-0 end-0 top-0 flex items-center pe-3'> {/* Absolute positioning for the send button */}
                    <BsSend />
                </button>
            </div>
        </form>
    );
};
export default MessageInput;
