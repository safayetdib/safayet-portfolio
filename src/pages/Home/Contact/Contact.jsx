const Contact = () => {
	return (
		<section id="contact" className="px-4 pb-20 pt-[72px]">
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
			<div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-screen-xl items-center justify-center p-10">
				<form className="w-full max-w-2xl space-y-4 rounded bg-white p-10 shadow-lg">
					{/* name */}
					<div>
						<label htmlFor="name" className="text-gray-500">
							Name
						</label>
						<input
							type="text"
							name="name"
							placeholder="Enter You Name"
							className="block w-full rounded-lg border p-3"
						/>
					</div>
					{/* email */}
					<div>
						<label htmlFor="email" className="text-gray-500">
							Email
						</label>
						<input
							type="email"
							name="email"
							required
							placeholder="Enter You Email"
							className="block w-full rounded-lg border p-3"
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
							className="block w-full rounded-lg border p-3"></textarea>
					</div>
					{/* button */}
				</form>
			</div>
		</section>
	);
};

export default Contact;
