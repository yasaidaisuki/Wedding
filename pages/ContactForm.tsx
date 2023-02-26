import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
	const [state, handleSubmit] = useForm('xgebajga');
	const [attending, setAttending] = useState('');
	const [plus, setPlus] = useState('');
	const hasPlusOne = false;

	if (state.succeeded) {
		return (
			<div className="contact-form">
				<h1>Thank you!</h1>
			</div>
		);
	}

	return (
		<form className="contact-form" onSubmit={handleSubmit}>
			<div className="contact-form-pair">
				<label htmlFor="name">Your full name:</label>
				<input id="name" type="text" name="name" required={true} />
			</div>

			<div className="contact-form-pair">
				<label htmlFor="attending">Are you joining us?</label>
				<div>
					<input
						required={true}
						type="radio"
						value="Yes"
						name="attending"
						onClick={() => setAttending('Yes')}
					/>
					Yes
					<input
						required={true}
						type="radio"
						value="No"
						name="attending"
						onClick={() => setAttending('No')}
					/>
					No
				</div>
			</div>

			{attending === 'Yes' && (
				<div className="contact-form-pair">
					<label htmlFor="plus">Do you have another guest with you?</label>
					<div>
						<input
							required={true}
							type="radio"
							value="Yes"
							name="plus"
							onClick={() => setPlus('Yes')}
						/>
						Yes
						<input
							required={true}
							type="radio"
							value="No"
							name="plus"
							onClick={() => setPlus('No')}
						/>
						No
					</div>
				</div>
			)}

			{plus === 'Yes' && attending === 'Yes' && (
				<div className="contact-form-pair">
					<label htmlFor="nameguestone">Full name of your plus one:</label>
					<input id="name" type="text" name="name" required={true} />
				</div>
			)}


			<div className="contact-form-pair">
				<label htmlFor="message">Please leave us a message!</label>
				<textarea id="message" name="message" />
				<ValidationError prefix="Message" field="message" errors={state.errors} />
			</div>

			<button type="submit" disabled={state.submitting}>
				Send now
			</button>
		</form>
	);
}

export default ContactForm;
