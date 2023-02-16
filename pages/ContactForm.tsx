import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});
	const [inputs, setInputs] = useState({
		email: '',
		message: '',
	});

	const handleServerResponse = (ok, msg) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
			setInputs({
				email: '',
				message: '',
			});
		} else {
			setStatus({
				info: { error: true, msg: msg },
			});
		}
	};
	const handleOnChange = (e) => {
		e.persist();
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		axios({
			method: 'POST',
			url: 'https://formspree.io/f/xgebajga',
			data: inputs,
		})
			.then((response) => {
				handleServerResponse(
					true,
					'Thank you, your message has been submitted.'
				);
			})
			.catch((error) => {
				handleServerResponse(false, error.response.data.error);
			});
	};
	return (
		<main>
			<form onSubmit={handleOnSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					id='email'
					type='email'
					name='_replyto'
					onChange={handleOnChange}
					required
					value={inputs.email}
				/>
				<label htmlFor='attending'>A you joinning us?</label>
				<select name='attending' id='attending' required={false}>
                    <option value='0' selected={true}>0</option>
                    <option value='Yes' selected={true}>Yes</option>
                    <option value='No'>No</option>
                </select>
                <label htmlFor='plus'>And do you have more guests?</label>
                <select name='plus' id='plus' required={false}>
                    <option value='0' selected={true}>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
				<button type='submit' disabled={status.submitting}>
					{!status.submitting
						? !status.submitted
							? 'Submit'
							: 'Submitted'
						: 'Submitting...'}
				</button>
                <input type='hidden' name='_subject' id='email-subject' value='ZP and JW Wedding RSVP'></input>
			</form>
			{status.info.error && (
				<div className='error'>Error: {status.info.msg}</div>
			)}
			{!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
		</main>
	);
};

export default ContactForm;
