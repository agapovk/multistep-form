import { useState } from 'react';
import { useMultistepForm } from '../hooks/useMultistepForm';

import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import FormFinal from './FormFinal';
import Sidebar from './Sidebar';

const initialData = {
	name: '',
	email: '',
	phone: '',
	plan: '',
	periodicity: '',
	extra: [],
};

function App() {
	const [data, setData] = useState(initialData);
	const { steps, currentStepIndex, next, back, isFirstStep, isLastStep, goToStep } =
		useMultistepForm([
			<Form1 {...data} updateFields={updateFields} />,
			<Form2 {...data} updateFields={updateFields} />,
			<Form3 {...data} updateFields={updateFields} />,
			<Form4 {...data} goTo={goTo} />,
			<FormFinal {...data} />,
		]);

	function goTo(step) {
		goToStep(step);
	}

	function updateFields(fields) {
		setData((prev) => {
			return { ...prev, ...fields };
		});
	}

	function handleNext() {
		if (data.name.length > 0 && data.email.length > 0 && data.phone.length > 0) next();
		else alert('Please fill all fields');
	}

	return (
		<main className='flex h-screen w-full flex-col md:h-[600px] md:w-[940px] md:flex-row md:gap-4 md:rounded-2xl md:bg-white md:p-4 md:drop-shadow-xl'>
			<aside className='bg-aside-mobile-pattern bg-cover bg-bottom pt-[30px] pb-[105px] md:rounded-xl md:bg-aside-desktop-pattern md:bg-center md:py-10 md:px-8 lg:w-[272px]'>
				<Sidebar index={currentStepIndex} />
			</aside>

			<div className='mt-[-73px] flex flex-auto flex-col overflow-y-auto md:mx-auto md:mt-10 md:max-w-[450px]'>
				{steps[currentStepIndex]}

				{!isLastStep && (
					<div className='mt-auto flex bg-white p-4 md:px-0'>
						{!isFirstStep && (
							<button
								onClick={back}
								className='mr-auto font-medium text-cool-gray hover:text-marine-blue'>
								Go Back
							</button>
						)}
						{currentStepIndex === 3 ? (
							<button
								onClick={next}
								className='ml-auto rounded-md bg-purplish-blue px-6 py-3 text-white hover:bg-opacity-75'>
								Confirm
							</button>
						) : (
							<button
								onClick={handleNext}
								className='ml-auto rounded-md bg-marine-blue px-6 py-3 text-white hover:bg-opacity-75'>
								Next Step
							</button>
						)}
					</div>
				)}
			</div>
		</main>
	);
}

export default App;
