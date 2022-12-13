import { useEffect } from 'react';
import img from '../assets/images/icon-thank-you.svg';

function FormFinal({ name, email, phone, plan, periodicity, extra }) {
	const finalData = `user: ${name}\nemail: ${email}\nphone: ${phone}\nchoose: ${plan} plan\nto pay: ${periodicity}\nand choose addons: ${extra.map(
		(addon) => `\n      ${addon}`
	)}\n\nTHE PAGE WILL BE RELOADED`;

	function refreshPage() {
		window.location.reload(true);
	}

	useEffect(() => {
		setTimeout(() => {
			alert(finalData);
			refreshPage();
		}, 1000);
	}, [finalData]);

	return (
		<div className='mx-4 rounded-xl bg-white py-8 px-6 drop-shadow-xl md:m-0 md:p-0 md:drop-shadow-none'>
			<div className='flex h-full flex-col items-center justify-center py-20'>
				<img src={img} alt='Thank you icon' className='h-14 w-14 md:h-20 md:w-20' />
				<h1 className='mb-[10px] mt-5 text-xl font-bold text-marine-blue md:text-3xl'>Thank you</h1>
				<p className='text-center text-cool-gray'>
					Thanks for confirming your subscription! We hope you have fun using our platform. If you
					ever need support, plaease feel free to email us at <span>support@loremgaming.com</span>
				</p>
			</div>
		</div>
	);
}

export default FormFinal;
