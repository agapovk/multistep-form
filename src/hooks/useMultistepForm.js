import { useState } from 'react';

export function useMultistepForm(steps) {
	const [currentStepIndex, setCurrentStep] = useState(0);

	function next() {
		setCurrentStep((i) => (i >= steps.length - 1 ? i : i + 1));
	}

	function back() {
		setCurrentStep((i) => (i <= 0 ? i : i - 1));
	}

	function goToStep(step) {
		setCurrentStep(step);
	}

	return {
		currentStepIndex,
		steps,
		next,
		back,
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === steps.length - 1,
		goToStep,
	};
}
