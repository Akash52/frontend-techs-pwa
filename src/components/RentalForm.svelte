<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let isNew = true;

	export let rental = {
		property_type: '',
		address: '',
		city: '',
		state: '',
		zip_code: '',
		rental_price: '',
		available_date: '',
		square_feet: '',
		bedrooms: '',
		bathrooms: '',
		pets_allowed: false,
		contact_name: '',
		contact_email: '',
		contact_phone: '',
		image: ''
	};

	function submitForm(event) {
		// Get all form input values
		const formData = new FormData(event.target);
		const rentalData = Object.fromEntries(formData.entries());

		// Update rental object with form data
		rental = { ...rental, ...rentalData };

		// Dispatch submit event with updated rental object
		dispatch('submit', rental);
		setTimeout(() => {
			closeForm();
		}, 2000);
	}
	function closeForm() {
		dispatch('close');
	}
</script>

<form
	on:submit|preventDefault={submitForm}
	class="px-4 py-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800"
>
	<h2 class="text-xl font-bold mb-4 text-gray-700 dark:text-white">
		{isNew ? 'Create' : 'Update'} Rental
	</h2>
	<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
		<div class="flex flex-col">
			<label for="property_type" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Property Type<span class="text-red-500">*</span></label
			>
			<input
				type="text"
				name="property_type"
				bind:value={rental.property_type}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="address" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Address<span class="text-red-500">*</span></label
			>
			<input
				type="text"
				name="address"
				bind:value={rental.address}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>City<span class="text-red-500">*</span></label
			>
			<input
				type="text"
				name="city"
				bind:value={rental.city}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="state" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>State<span class="text-red-500">*</span></label
			>
			<input
				type="text"
				name="state"
				bind:value={rental.state}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="zip_code" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Zip Code<span class="text-red-500">*</span></label
			>
			<input
				type="text"
				name="zip_code"
				bind:value={rental.zip_code}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="rental_price" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Rental Price($)<span class="text-red-500">*</span></label
			>
			<input
				type="number"
				name="rental_price"
				bind:value={rental.rental_price}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="available_date" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Available Date<span class="text-red-500">*</span></label
			>
			<input
				type="date"
				name="available_date"
				bind:value={rental.available_date}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="image" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Image URL<span class="text-red-500">*</span></label
			>
			<input
				type="text"
				name="image"
				bind:value={rental.image}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="square_feet" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Square Feet<span class="text-red-500">*</span></label
			>
			<input
				type="number"
				name="square_feet"
				bind:value={rental.square_feet}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="bedrooms" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Bedrooms<span class="text-red-500">*</span></label
			>
			<input
				type="number"
				name="bedrooms"
				bind:value={rental.bedrooms}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="bathrooms" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Bathrooms<span class="text-red-500">*</span></label
			>
			<input
				type="number"
				name="bathrooms"
				bind:value={rental.bathrooms}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>

		<div class="flex flex-col">
			<label for="contact_name" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Contact Name<span class="text-red-500">*</span></label
			>
			<input
				type="text"
				name="contact_name"
				bind:value={rental.contact_name}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="contact_email" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Contact Email<span class="text-red-500">*</span></label
			>
			<input
				type="email"
				name="contact_email"
				bind:value={rental.contact_email}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>
		<div class="flex flex-col">
			<label for="contact_phone" class="block text-sm font-medium text-gray-700 dark:text-gray-200"
				>Contact Phone<span class="text-red-500">*</span></label
			>
			<input
				type="tel"
				name="contact_phone"
				bind:value={rental.contact_phone}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			/>
		</div>

		<div class="flex items-center">
			<div class="flex items-center">
				<label
					for="pets_allowed"
					class="block text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
					>Pets Allowed:</label
				>
				<input
					type="checkbox"
					name="pets_allowed"
					bind:checked={rental.pets_allowed}
					class="ml-2 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
				/>
			</div>
			<div class="flex items-center">
				<label
					for="is_furnished"
					class="block text-sm font-medium text-gray-700 dark:text-gray-200 ml-2"
				>
					Furnished:</label
				>
				<input
					type="checkbox"
					name="is_furnished"
					bind:checked={rental.is_furnished}
					class="ml-2 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
				/>
			</div>
		</div>
	</div>
	<div class="flex justify-end mt-6">
		<button
			type="button"
			class="inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:hover:bg-gray-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
			on:click={closeForm}
		>
			Cancel
		</button>
		<button
			type="submit"
			class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
		>
			{isNew ? 'Create' : 'Update'}
		</button>
	</div>
</form>
