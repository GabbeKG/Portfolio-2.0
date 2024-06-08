

const Contact = () => {
    return (
        <section className="bg-[#0e0915] h-screen flex flex-col justify-center">
            <h2 id='contact' className=' text-[3rem] mx-auto  flex justify-center font-[FFFFORWARD] text-[#D89340] pt-28 pb-20 '>Contact</h2>
            <h3 className="flex flex-col justify-center mx-auto my-20 text-[1.5rem] text-pink-500">Currently the form is still undergoing setup so feel three to contact me via LinkedIn</h3>
            <form className="flex flex-col items-center justify-center gap-8" >
                <label className="text-white font-mono text-[1.25rem]">Your email:</label>
                <input type="email" className="w-[20rem]" />
                <label className="text-white font-mono text-[1.25rem]">Your message:</label>
                <textarea type="textarea" className="h-[10rem] w-[20rem]" placeholder="Message..." />
                <button>Send</button>
            </form>
            
        </section>
    )
}

export default Contact