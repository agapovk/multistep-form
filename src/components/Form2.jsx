import { useEffect, useState } from 'react';
import { Switch, RadioGroup } from '@headlessui/react';

import iconArcade from '../assets/images/icon-arcade.svg';
import iconAvdvanced from '../assets/images/icon-advanced.svg';
import iconPro from '../assets/images/icon-pro.svg';

export const plans = [
	{
		id: '1',
		name: 'Arcade',
		periodicity: 'monthly',
		price: { monthly: 9, yearly: 90 },
		icon: iconArcade,
	},
	{
		id: '2',
		name: 'Advanced',
		periodicity: 'monthly',
		price: { monthly: 12, yearly: 120 },
		icon: iconAvdvanced,
	},
	{
		id: '3',
		name: 'Pro',
		periodicity: 'monthly',
		price: { monthly: 15, yearly: 150 },
		icon: iconPro,
	},
];

function Form2({ plan, periodicity, updateFields }) {
	const [activePeriod, setPeriod] = useState('monthly');
	const [activePlan, setActivePlan] = useState('Arcade');

	useEffect(() => {
		plan.length > 0 && setActivePlan(plan);
		periodicity.length > 0 && setPeriod(periodicity);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		updateFields({ periodicity: activePeriod });
	}, [activePeriod, updateFields]);

	useEffect(() => {
		updateFields({ plan: activePlan });
	}, [activePlan, updateFields]);

	function togglePlan() {
		setPeriod((prev) => {
			return prev === 'monthly' ? 'yearly' : 'monthly';
		});
	}

	return (
		<div className='mx-4 rounded-xl bg-white py-8 px-6 drop-shadow-xl md:m-0 md:p-0 md:drop-shadow-none'>
			<h1 className='mb-3 text-xl font-bold text-marine-blue md:text-3xl'>Select your plan</h1>
			<p className=' mb-5 text-cool-gray md:mb-10'>
				You have the option of monthly or yearly billing.
			</p>

			<RadioGroup
				value={activePlan}
				onChange={setActivePlan}
				className='grid grid-cols-1 justify-between gap-4 lg:grid-cols-3'>
				{plans.map((plan) => {
					return (
						<RadioGroup.Option key={plan.id} value={plan.name} className='cursor-pointer'>
							{({ checked }) => (
								<div
									className={`${
										checked ? 'border-marine-blue bg-light-blue' : 'border-light-gray'
									} flex flex-row gap-4 rounded-xl border p-4 hover:border-marine-blue lg:flex-col lg:gap-10`}>
									<img src={plan.icon} alt='plan icon' className='mb-auto h-10 w-10' />
									<div className='mt-auto'>
										<p className='text-lg font-medium text-marine-blue'>{plan.name}</p>
										<p className='text-sm text-cool-gray'>
											$
											{activePeriod === 'yearly'
												? `${plan.price.yearly}/yr`
												: `${plan.price.monthly}/mo`}
										</p>
										{activePeriod === 'yearly' && (
											<p className='text-sm text-marine-blue'>2 months free</p>
										)}
									</div>
								</div>
							)}
						</RadioGroup.Option>
					);
				})}
			</RadioGroup>

			<div
				className={`mt-5 flex items-center justify-center gap-3 rounded-md bg-light-blue p-3 font-medium lg:mt-[30px]`}>
				<p className={`${activePeriod === 'yearly' ? 'text-cool-gray' : 'text-marine-blue'}`}>
					Monthly
				</p>

				<Switch
					checked={activePeriod === 'yearly'}
					onChange={togglePlan}
					className={`${
						activePeriod === 'yearly' ? 'bg-marine-blue' : 'bg-marine-blue'
					} relative inline-flex h-6 w-11 items-center rounded-full`}>
					<span
						className={`${
							activePeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
						} inline-block h-4 w-4 transform rounded-full bg-white transition`}
					/>
				</Switch>

				<p className={`${activePeriod === 'yearly' ? 'text-marine-blue' : 'text-cool-gray'}`}>
					Yearly
				</p>
			</div>
		</div>
	);
}

export default Form2;
