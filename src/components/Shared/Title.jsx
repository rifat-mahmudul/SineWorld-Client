/* eslint-disable react/prop-types */

const Title = ({title, heading}) => {
    
    return (
        <div className='text-center'>
            <p className='text-orange-300'>---{title}---</p>
            <h1 className='font-Cinzel font-bold text-2xl border-t-2 border-b-2 py-2 max-w-sm mx-auto mt-2 mb-8 border-orange-300 uppercase text-orange-600'>{heading}</h1>
        </div>
    )
}


export default Title