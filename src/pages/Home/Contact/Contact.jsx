import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_1vnrm0o',
				'template_32rfgh7',
				form.current,
				'Zk1f1CJLhMPptcA1A'
			)
			.then(
				(result) => {
					console.log(result.text);
					form.current.reset();

					toast.success('Message send successfully!', {
						style: {
							border: '1px solid #000',
							padding: '16px',
							color: '#000',
						},
						iconTheme: {
							primary: '#000',
							secondary: '#FFFAEE',
						},
					});
				},
				(error) => {
					console.log(error.text);
					toast.error('Something went wrong!');
				}
			);
	};

	return (
		<section
			id="contact"
			className="mx-auto min-h-[calc(100vh-72px)] max-w-screen-xl px-4 pb-20 pt-[72px]">
			<div className="mx-auto mt-4 max-w-4xl space-y-4 text-center ">
				<h2 className="text-3xl font-extrabold uppercase md:text-5xl">
					Contact
				</h2>
				<div className="mx-auto h-2 w-10 rounded-full bg-black"></div>
				<p className="text-sm sm:text-base md:text-lg">
					Feel free to Contact me by submitting the form below and I will get
					back to you as soon as possible
				</p>
			</div>

			{/* contact form */}
			<div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-screen-xl items-center justify-center py-10">
				<form
					ref={form}
					onSubmit={sendEmail}
					className="w-full max-w-2xl space-y-4 rounded-lg bg-white px-4 py-6 shadow-lg md:p-10">
					{/* name */}
					<div>
						<label htmlFor="from_name" className="text-gray-500">
							Name
						</label>
						<input
							type="text"
							name="from_name"
							placeholder="Enter You Name"
							className="block w-full rounded-lg border bg-gray-100 p-3"
						/>
					</div>
					{/* email */}
					<div>
						<label htmlFor="from_email" className="text-gray-500">
							Email
						</label>
						<input
							type="email"
							name="from_email"
							required
							placeholder="Enter You Email"
							className="block w-full rounded-lg border bg-gray-100 p-3"
						/>
					</div>
					{/* message */}
					<div>
						<label htmlFor="message" className="text-gray-500">
							Message
						</label>
						<textarea
							name="message"
							placeholder="Enter Your Message"
							required
							cols="30"
							rows="10"
							className="block w-full rounded-lg border bg-gray-100 p-3"></textarea>
					</div>
					{/* button */}
					<div className="w-full text-right">
						<button
							type="submit"
							value="Send"
							className="ml-auto mt-5 rounded-md bg-black px-16 py-2 text-xl uppercase tracking-widest text-white transition duration-200 hover:scale-[102%]">
							Submit
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
