function Form4({ plan, periodicity, extra, goTo }) {
	function planPrice() {
		if (plan === 'Arcade') return periodicity === 'monthly' ? 9 : 90;
		if (plan === 'Advanced') return periodicity === 'monthly' ? 12 : 120;
		if (plan === 'Pro') return periodicity === 'monthly' ? 15 : 150;
	}

	function extraPrice(name) {
		if (name === 'Online service') return periodicity === 'monthly' ? 1 : 10;
		if (name === 'Larger storage') return periodicity === 'monthly' ? 2 : 20;
		if (name === 'Customizable profile') return periodicity === 'monthly' ? 2 : 20;
	}

	function extraTotal() {
		return extra.reduce((accumulator, currentValue) => {
			return accumulator + extraPrice(currentValue);
		}, 0);
	}

	function total() {
		return planPrice() + extraTotal();
	}

	return (
		<>
			<div className='mx-4 rounded-xl bg-white py-8 px-6 drop-shadow-xl md:m-0 md:p-0 md:drop-shadow-none'>
				<h1 className='mb-3 text-xl font-bold text-marine-blue md:text-3xl'>Finishing up</h1>
				<p className='mb-5 text-cool-gray md:mb-10'>
					Double-check everything looks OK before confirming.
				</p>

				<div className='flex flex-col gap-4 divide-y divide-cool-gray rounded-xl bg-light-blue p-4 md:p-6'>
					<div className='flex items-center justify-between'>
						<span>
							<p className='font-medium text-marine-blue'>
								{plan} ({periodicity})
							</p>
							<button
								onClick={() => goTo(1)}
								className='text-cool-gray underline hover:text-marine-blue'>
								Change
							</button>
						</span>
						<p className='font-bold text-marine-blue'>
							${planPrice()}/{periodicity === 'monthly' ? 'mo' : 'yr'}
						</p>
					</div>
					{extra.length > 0 && (
						<div className='flex flex-col gap-4 pt-4'>
							{extra.map((extraElement, i) => {
								return (
									<span key={i} className='flex items-center justify-between'>
										<p className='text-cool-gray'>{extraElement}</p>
										<p className='text-marine-blue'>
											+${extraPrice(extraElement)}/{periodicity === 'monthly' ? 'mo' : 'yr'}
										</p>
									</span>
								);
							})}
						</div>
					)}
				</div>

				<div className='mt-5 flex items-center justify-between px-4 md:mt-6 md:px-6'>
					<p className='text-cool-gray'>Total (per month)</p>
					<p className='text-xl font-bold text-purplish-blue'>+${total()}/mo</p>
				</div>
			</div>
		</>
	);
}

export default Form4;
