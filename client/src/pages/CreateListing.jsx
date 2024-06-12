import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold my-7 text-center'>Create a Listing</h1>
        <form className='flex flex-col sm:flex-row gap-4'>
            <div className='flex flex-col gap-4 flex-1'>
                <input type="text" placeholder='Name' id='name' className='border rounded-lg p-3' maxLength={62} minLength={3} required />
                <textarea type="text" placeholder='Description' id='description' className='border rounded-lg p-3' required />
                <input type="text" placeholder='Address' id='address' className='border rounded-lg p-3' required />
                <div className="flex gap-6 flex-wrap">
                    <div className='flex gap-2'>
                        <input type="checkbox" className="w-5" id="sell" />
                        <span>Sell</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" className="w-5" id="rent" />
                        <span>Rent</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" className="w-5" id="parking" />
                        <span>Parking spot</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" className="w-5" id="furnished" />
                        <span>Furnished</span>
                    </div>
                    <div className='flex gap-2'>
                        <input type="checkbox" className="w-5" id="offer" />
                        <span>Offer</span>
                    </div>
                </div>
                <div className='flex flex-wrap gap-6'>
                    <div className='flex items-center gap-2'>
                        <input type="number" id="bedrooms" min={1} max={10} required className='p-3 border border-gray-lg rounded-lg ' />
                        <p>Beds</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="number" id="baths" min={1} max={10} required className='p-3 border border-gray-lg rounded-lg ' />
                        <p>Baths</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="number" id="regularPrice" min={499} max={99999999} required className='p-3 border border-gray-lg rounded-lg ' />
                        <div className='flex flex-col items-center'>
                        <p>Regular Price</p>
                        <span className='text-sm'>(₹ / month)</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input type="number" id="discountPrice" min={299} max={99999999} required className='p-3 border border-gray-lg rounded-lg ' />
                        <div className='flex flex-col items-center'>
                        <p>Discounted price</p>
                        <span className='text-sm'>(₹ / month)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-1 gap-4'>
                <p className='font-semibold'>Images:
                <span className='font-normal text-grey-600 ml-2'> The first image will be cover (Max 6)</span>
                </p>
                <div className="flex gap-4">
                    <input className='p-3 border border-gray-300 rounded w-full' type="file" accept="image/*" multiple id="images" />
                    <button className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
                </div>
                <button className='p-3 bg-slate-700 text-white mt-6 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create listing</button>
            </div>
        </form>
    </main>
  )
}
