import { useState } from 'react';

function Form1({ name, email, phone, updateFields }) {
	const [nameTouched, setNameTouched] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);
	const [phoneTouched, setPhoneTouched] = useState(false);

	return (
		<div className='mx-4 rounded-xl bg-white py-8 px-6 drop-shadow-xl md:m-0 md:p-0 md:drop-shadow-none'>
			<h1 className='mb-3 text-xl font-bold text-marine-blue md:text-3xl'>Personal info</h1>
			<p className=' mb-5 text-cool-gray md:mb-10'>
				Please provide your name, email, adress and phone number.
			</p>

			<form action='submit' className='flex flex-col'>
				<div className='space-y-4 md:space-y-5'>
					<div>
						<div className='flex'>
							<label htmlFor='name' className='text-sm text-marine-blue'>
								Name
							</label>
							{nameTouched && name.length === 0 && (
								<span className='ml-auto text-sm font-bold text-strawberry-red'>
									This field is required
								</span>
							)}
						</div>
						<input
							value={name}
							onChange={(e) => updateFields({ name: e.target.value })}
							onBlur={() => setNameTouched(true)}
							type='text'
							name='name'
							id='name'
							required
							autoFocus
							placeholder='e.g. Alexander Pushkin'
							className='mt-2 w-full rounded-md border border-cool-gray p-3 font-medium text-marine-blue placeholder:font-normal placeholder:text-cool-gray focus:border-marine-blue focus:ring-0'
						/>
					</div>
					<div>
						<div className='flex'>
							<label htmlFor='email' className='text-sm text-marine-blue'>
								Email Address
							</label>
							{emailTouched && email.length === 0 && (
								<span className='ml-auto text-sm font-bold text-strawberry-red'>
									This field is required
								</span>
							)}
						</div>
						<input
							value={email}
							onChange={(e) => updateFields({ email: e.target.value })}
							onBlur={() => setEmailTouched(true)}
							type='text'
							name='email'
							id='email'
							required
							placeholder='e.g alexpush@lorem.com'
							className='mt-2 w-full rounded-md border border-cool-gray p-3 font-medium text-marine-blue placeholder:font-normal placeholder:text-cool-gray focus:border-marine-blue focus:ring-0'
						/>
					</div>
					<div>
						<div className='flex'>
							<label htmlFor='phone' className='text-sm text-marine-blue'>
								Phone Number
							</label>
							{phoneTouched && phone.length === 0 && (
								<span className='ml-auto text-sm font-bold text-strawberry-red'>
									This field is required
								</span>
							)}
						</div>
						<input
							value={phone}
							onChange={(e) => updateFields({ phone: e.target.value })}
							onBlur={() => setPhoneTouched(true)}
							type='text'
							name='phone'
							id='phone'
							required
							placeholder='e.g. +1 234 567 890'
							className='mt-2 w-full rounded-md border border-cool-gray p-3 font-medium text-marine-blue placeholder:font-normal placeholder:text-cool-gray focus:border-marine-blue focus:ring-0'
						/>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form1;
