const steps = [
	{ id: '1', name: 'Step 1', title: 'Your info' },
	{ id: '2', name: 'Step 2', title: 'Select plan' },
	{ id: '3', name: 'Step 3', title: 'Add-ons' },
	{ id: '4', name: 'Step 4', title: 'Summary' },
];

function Sidebar({ index }) {
	return (
		<ul className='flex justify-center gap-4 md:flex-col'>
			{steps.map((step, i) => {
				return (
					<li key={step.id} className='flex items-center gap-4'>
						<span
							className={`flex h-4 w-4 cursor-default items-center justify-center rounded-full border border-white p-5  ${
								index === i ? 'bg-light-blue text-marine-blue' : 'text-white'
							}`}>
							{step.id}
						</span>
						<div className=' hidden md:block'>
							<span className='text-cool-gray'>{step.name.toUpperCase()}</span>
							<span className='whitespace-nowrap font-medium text-white'>
								{step.title.toUpperCase()}
							</span>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default Sidebar;
