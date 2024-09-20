import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"

import MotionTranstion from "./MotionTransition.jsx"

const Contact = () => {

	const formRef = useRef()
	const [form, setForm] = useState({
		name: '',
		email: '',
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({ ...form, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_fb2vxve",
				"template_oghs4rs",
				{
					from_name: form.name,
					to_name: "Jorge",
					from_email: form.email,
					to_email: "jorgetejadolopez@gmail.com",
				},
				"HoUaVJll9lhvzBmRn"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you. I will get back to you as soon as possible.");

					setForm({ name: "", email: ""})
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert("Ahh, something went wrong. Please try again.");
				}
			)
	}

	return (
		<>
		<MotionTranstion />
		<div className={`${styles.paddingX} ${styles.paddingY} flex flex-col w-full h-full overflow-hidden mt-24`}>

			<h3 className={`text-6xl hover:text-accent xl:text-8xl font-tags flex flex-col items-center`}>
				CONTACT ME
			</h3>
			<p className="flex text-accent justify-center  mb-10 font-medium text-md">
				jorgetejadolopez@gmail.com
			</p>


			<form
				ref={formRef}
				onSubmit={handleSubmit}
				className="mb-10 text-white/50"
			>
				<label className="flex flex-col mb-10 ml-10 translate-x-[15vw] xl:translate-x-[30vw]">
					<div className="h-[3rem] w-0.5 bg-white/50 ">
						<input 
							type="text" 
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="YOUR NAME..."
							className="py-4 px-6 placeholder:text-white/50 bg-transparent font-regular outline-none"
						/>
					</div>
				</label>

				<label className='flex flex-col ml-10 translate-x-[15vw] xl:translate-x-[30vw]'>
					<div className="h-[3rem] w-0.5 bg-white/50">
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder="YOUR EMAIL..."
							className='py-4 px-6 placeholder:text-white/50 bg-transparent font-regular outline-none'
						/>
					</div>
				</label>

				<div className="mt-[100px] flex flex-col items-center">
					<button
						type="submit"
						className="py-3 px-8 bg-[#38383e] opacity-45 hover:opacity-85
						outline-none w-fit text-white/80 font-homeSections font-medium"
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</div>

			</form>
		</div>
		</>
	)
}

export default Contact