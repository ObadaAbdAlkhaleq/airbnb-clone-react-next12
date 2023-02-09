import React from 'react'

function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600 bg-gray-100'>
            <div className=" space-y-4 text-xs text-gray-800">
                <h5 className='font-bold'>ABOUT</h5>
                <p>How our website works</p>
                <p>Newroom</p>
                <p>Investors</p>
                <p>Service Plus</p>
                <p>Service Luxe</p>
            </div>
            <div className=" space-y-4 text-xs text-gray-800">
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>This is a clone</p>
                <p>Referrals Accepted</p>
                <p>Inquiries</p>
            </div>
            <div className=" space-y-4 text-xs text-gray-800">
                <h5 className='font-bold'>HOST</h5>
                <p>Become a Host</p>
                <p>Learn</p>
                <p>Apply</p>
                <p>Add real estate</p>
                <p>Inquiries</p>
            </div>
            <div className=" space-y-4 text-xs text-gray-800">
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust and Safety</p>
                <p>Complaints</p>
                <p>Report a Host</p>
                <p>Report a User</p>
            </div>
        </div>
    )
}

export default Footer