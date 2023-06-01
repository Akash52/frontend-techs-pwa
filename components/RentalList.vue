<template>
  <div class="bg-gray-100 dark:bg-gray-900 min-h-screen">
    <div class="px-4 py-6 bg-white dark:bg-gray-800 shadow-md sm:px-6 lg:px-8">
      <div class="container mx-auto flex justify-between flex-wrap mb-4">
        <h1 class="text-2xl font-bold dark:text-gray-300 ml-2">
          Rentals Application
        </h1>
        <button
          @click="createNewRental"
          class="bg-green-500 hover:bg-green-600 text-white inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Create Rental
        </button>
      </div>

      <div v-show="modalOpen" class="relative z-30">
        <div
          class="py-4 px-6 container mx-auto absolute inset-0 z-20 bg-opacity-75"
        >
          <RentalForm
            :rental="selectedRental.id ? selectedRental : {}"
            :isNew="isNewRental"
            @submit="saveRental"
            @cancel="closeModal"
          />
        </div>
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          @click="closeModal"
        ></div>
      </div>

      <div
        v-if="isLoading"
        role="status"
        class="flex justify-center items-center min-h-screen"
      >
        <svg
          aria-hidden="true"
          class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
      <div class="flex flex-1">
        <input
          class="block h-full rounded-md shadow-sm border sm:text-sm container mx-auto py-2 px-2 items-center outline-none focus:outline-none"
          placeholder="Search For Rental"
          type="search"
          v-model="searchQuery"
        />
      </div>
      <div
        v-if="!isLoading"
        class="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto dark:bg-gray-800 dark:text-gray-200"
      >
        <div
          v-for="rental in rentals"
          :key="rental.id"
          class="border rounded-lg overflow-hidden shadow-md"
        >
          <img
            :src="rental.image"
            alt="Rental Property"
            class="w-full h-40 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-medium">{{ rental.property_type }}</h3>
            <p
              class="text-gray-600 mb-2 font-normal text-base dark:text-gray-400"
            >
              {{ rental.address }}, {{ rental.city }}, {{ rental.state }}
              {{ rental.zip_code }}
            </p>
            <p
              class="text-green-500 font-bold text-lg mb-2 dark:text-green-400"
            >
              ${{ rental.rental_price }}/month
            </p>
            <p
              class="text-gray-600 font-medium text-base pb-1 dark:text-gray-400"
            >
              Available Date:
              <span class="text-gray-500 font-normal ml-1 dark:text-gray-300">{{
                rental.available_date
              }}</span>
            </p>
            <p class="text-base font-medium pb-1 dark:text-gray-400">
              <span
                :class="`text-gray-600 dark:text-gray-400 ${
                  rental.is_furnished ? 'furnished' : 'not-furnished'
                }`"
                :style="{
                  'text-decoration': rental.is_furnished
                    ? 'none'
                    : 'line-through',
                }"
              >
                {{ rental.is_furnished ? "Furnished" : "Not Furnished" }}
              </span>
            </p>
            <p
              class="pb-1 text-base text-gray-600 font-medium dark:text-gray-400"
            >
              Square Feet:
              <span class="text-gray-500 font-normal ml-1 dark:text-gray-300">{{
                rental.square_feet
              }}</span>
            </p>
            <p
              class="pb-1 text-base text-gray-600 font-medium dark:text-gray-400"
            >
              Bedrooms:
              <span class="text-gray-500 font-normal ml-1 dark:text-gray-300">{{
                rental.bedrooms
              }}</span>
            </p>
            <p
              class="pb-1 text-base text-gray-600 font-medium dark:text-gray-400"
            >
              Bathrooms:
              <span class="text-gray-500 font-normal ml-1 dark:text-gray-300">{{
                rental.bathrooms
              }}</span>
            </p>
            <p
              :class="`pb-1 text-base ${
                rental.pets_allowed
                  ? 'text-gray-600 dark:text-gray-400'
                  : 'text-red-600'
              } font-medium`"
              :style="{
                'text-decoration': rental.pets_allowed
                  ? 'none'
                  : 'line-through',
              }"
            >
              Pets Allowed:
              <span class="text-gray-500 font-normal ml-1 dark:text-gray-300">{{
                rental.pets_allowed ? "Yes" : "No"
              }}</span>
            </p>
            <div class="flex justify-between items-center mt-4">
              <button @click="selectRental(rental)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
              <button @click="handleDeleteRental(rental.id)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-red-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RentalForm from "./RentalForm.vue";
import { ref, onMounted } from "vue";
import {
  getRentals,
  createRental,
  updateRental,
  deleteRental,
} from "../services/ApiService";

const rentals = ref([]);
const selectedRental = ref({});
const isNewRental = ref(true);
const modalOpen = ref(false);
const isLoading = ref(true);
const searchQuery = ref("");

onMounted(async () => {
  rentals.value = await getRentals();
  isLoading.value = false;
});

async function selectRental(rental) {
  selectedRental.value = rental;
  isNewRental.value = false;
  modalOpen.value = true;
}

async function saveRental(rentalData) {
  let updatedRental;
  if (isNewRental.value) {
    // Add new rental
    const newRental = await createRental(rentalData);
    rentals.value.push(newRental);
  } else {
    // Update existing rental
    updatedRental = await updateRental(rentalData);
    let index = rentals.value.findIndex((r) => r.id === rentalData.id);
    rentals.value[index] = updatedRental;
  }
  selectedRental.value = {};
  isNewRental.value = true;
  modalOpen.value = false;
}

const handleDeleteRental = async (id) => {
  if (!confirm("Are you sure you want to delete this rental?")) {
    return;
  }
  try {
    await deleteRental(id);
    rentals.value = rentals.value.filter((r) => r.id !== id);
  } catch (error) {
    console.error(error);
  }
};

function createNewRental() {
  selectedRental.value = {};
  isNewRental.value = true;
  modalOpen.value = true;
}

function closeModal() {
  modalOpen.value = false;
}
function openModal() {
  modalOpen.value = true;
}
</script>
