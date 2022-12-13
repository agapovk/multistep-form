/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export const addons = [
	{
		id: '1',
		name: 'Online service',
		description: 'Access to multiplayer games',
		price: { monthly: 1, yearly: 10 },
	},
	{
		id: '2',
		name: 'Larger storage',
		description: 'Extra 1TB of cloud save',
		price: { monthly: 2, yearly: 20 },
	},
	{
		id: '3',
		name: 'Customizable profile',
		description: 'Custom theme on your profile',
		price: { monthly: 2, yearly: 20 },
	},
];

function Form3({ extra, periodicity, updateFields }) {
	const [activeAddons, setActiveAddons] = useState([]);

	useEffect(() => {
		if (extra.length > 0) setActiveAddons(extra);
	}, []);

	useEffect(() => {
		updateFields({ extra: activeAddons });
	}, [activeAddons]);

	function handleCheck(event, addon) {
		if (event.target.checked) setActiveAddons((prevState) => [...prevState, addon]);

		if (!event.target.checked)
			setActiveAddons(activeAddons.filter((activeAddon) => activeAddon !== addon));
	}

	return (
		<div className='mx-4 rounded-xl bg-white py-8 px-6 drop-shadow-xl md:m-0 md:p-0 md:drop-shadow-none'>
			<h1 className='mb-3 text-xl font-bold text-marine-blue md:text-3xl'>Pick add-ons</h1>
			<p className=' mb-5 text-cool-gray md:mb-10'>Add-ons help enhance youe gaming expirience.</p>

			<form action='#' method='POST' className='space-y-4'>
				{addons.map((addon) => {
					return (
						<label
							key={addon.id}
							htmlFor={addon.id}
							className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 hover:border-marine-blue ${
								activeAddons.includes(addon.name)
									? 'border-marine-blue bg-light-blue'
									: 'border-light-gray'
							}`}>
							<input
								onChange={(e) => handleCheck(e, addon.name)}
								id={addon.id}
								name={addon.name}
								type='checkbox'
								checked={activeAddons.includes(addon.name)}
								className='h-5 w-5 cursor-pointer rounded border-cool-gray focus:ring-0'
							/>
							<span className='ml-3 text-sm'>
								<p className='text-lg font-medium text-marine-blue'>{addon.name}</p>
								<p className='text-sm text-cool-gray'>{addon.description}</p>
							</span>
							<p className='ml-auto text-purplish-blue'>
								{periodicity === 'yearly'
									? `+$${addon.price.yearly}/yr`
									: `+$${addon.price.monthly}/mo`}
							</p>
						</label>
					);
				})}
			</form>
		</div>
	);
}

export default Form3;
