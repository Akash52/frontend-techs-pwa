<template>
  <form
    @submit.prevent="submitForm"
    class="px-4 py-6 bg-gray-100 rounded-lg shadow-md dark:bg-gray-800"
  >
    <h2 class="text-xl font-bold mb-4 text-gray-700 dark:text-white">
      {{ isNew ? "Create" : "Update" }} Rental
    </h2>
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8"
    >
      <div class="flex flex-col">
        <label
          htmlFor="property_type"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Property Type<span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="property_type"
          v-model="rental.property_type"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="address"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Address<span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="address"
          v-model="rental.address"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="city"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          City<span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="city"
          v-model="rental.city"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="state"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          State<span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="state"
          v-model="rental.state"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="zip_code"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Zip Code<span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="zip_code"
          v-model="rental.zip_code"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="rental_price"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Rental Price($)<span class="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="rental_price"
          v-model="rental.rental_price"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="available_date"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Available Date<span class="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="available_date"
          v-model="rental.available_date"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="square_feet"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Image URL<span class="text-red-500">*</span>
        </label>
        <input
          type="url"
          id="image"
          v-model="rental.image"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="square_feet"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Square Feet<span class="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="square_feet"
          v-model="rental.square_feet"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="bedrooms"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Bedrooms<span class="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="bedrooms"
          v-model="rental.bedrooms"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="bathrooms"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Bathrooms<span class="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="bathrooms"
          v-model="rental.bathrooms"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="contact_name"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Contact Name<span class="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact_name"
          v-model="rental.contact_name"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="contact_email"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Contact Email<span class="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="contact_email"
          v-model="rental.contact_email"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex flex-col">
        <label
          htmlFor="contact_phone"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Contact Phone<span class="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="contact_phone"
          v-model="rental.contact_phone"
          class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="flex items-center">
        <div>
          <label
            htmlFor="is_furnished"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Furnished:
            <input
              type="checkbox"
              id="is_furnished"
              v-model="rental.is_furnished"
              :checked="rental.is_furnished"
              class="rounded-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 ml-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </label>
        </div>
        <div class="ml-4">
          <label
            htmlFor="pets_allowed"
            class="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Pets Allowed:
            <input
              type="checkbox"
              id="pets_allowed"
              v-model="rental.pets_allowed"
              :checked="rental.pets_allowed"
              class="rounded-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 ml-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            />
          </label>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-6">
      <button
        type="button"
        class="inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:hover:bg-gray-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
        @click="onCancel"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
      >
        {{ isNew ? "Create" : "Update" }}
      </button>
    </div>
  </form>
</template>

<script setup>
const props = defineProps({
  rental: {
    type: Object,
    default: () => ({
      property_type: "",
      address: "",
      city: "",
      state: "",
      rental_price: "",
      available_date: "",
      square_feet: "",
      bedrooms: "",
      bathrooms: "",
      pets_allowed: false,
      is_furnished: false,
      contact_name: "",
      contact_email: "",
      contact_phone: "",
      image: "",
    }),
  },
  isNew: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits(["submit", "cancel"]);

const submitForm = () => {
  const rental = props.rental;
  emits("submit", rental);

  setTimeout(() => {
    onCancel();
  }, 2000);
};
const onCancel = () => {
  emits("cancel");
};
</script>
