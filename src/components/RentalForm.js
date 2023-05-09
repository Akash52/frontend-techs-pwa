import { useState } from "react";

function RentalForm({ onSubmit, onCancel, rental = {} }) {
  const [newRental, setNewRental] = useState({
    property_type: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    rental_price: 0,
    available_date: "",
    is_furnished: false,
    square_feet: 0,
    bedrooms: 0,
    bathrooms: 0,
    pets_allowed: false,
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    image: "",
    ...rental,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setNewRental({ ...newRental, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newRental);
    setTimeout(() => {
      onCancel();
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 py-6 bg-gray-100 rounded-lg
    shadow-md
    dark:bg-gray-800

    "
    >
      <h2
        className="text-xl font-bold mb-4
      text-gray-700
      dark:text-white
      
      "
      >
        {rental.id ? "Update" : "Create"} Rental:
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        <div className="flex flex-col">
          <label
            htmlFor="property_type"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200
            "
          >
            Property Type<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="property_type"
            name="property_type"
            value={newRental.property_type}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200
            "
          >
            Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={newRental.address}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200
            "
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200
            "
          >
            City<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={newRental.city}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200
            "
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200
            "
          >
            State<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={newRental.state}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200
            "
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="zip_code"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200
            "
          >
            Zip Code<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="zip_code"
            name="zip_code"
            value={newRental.zip_code}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200
            "
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="rental_price"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200
            "
          >
            Rental Price($)<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="rental_price"
            name="rental_price"
            value={newRental.rental_price}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="available_date"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200"
          >
            Available Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="available_date"
            name="available_date"
            value={newRental.available_date}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="square_feet"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200"
          >
            Image URL<span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={newRental.image}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="square_feet"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200"
          >
            Square Feet<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="square_feet"
            name="square_feet"
            value={newRental.square_feet}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="bedrooms"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200"
          >
            Bedrooms<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={newRental.bedrooms}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="bathrooms"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200"
          >
            Bathrooms<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={newRental.bathrooms}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="contact_name"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200"
          >
            Contact Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact_name"
            name="contact_name"
            value={newRental.contact_name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="contact_email"
            className="block text-sm font-medium text-gray-700
          dark:text-gray-200"
          >
            Contact Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="contact_email"
            name="contact_email"
            value={newRental.contact_email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="contact_phone"
            className="block text-sm font-medium text-gray-700
            dark:text-gray-200"
          >
            Contact Phone<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="contact_phone"
            name="contact_phone"
            value={newRental.contact_phone}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div className="flex items-center">
          <div>
            <label
              htmlFor="is_furnished"
              className="block text-sm font-medium text-gray-700
              dark:text-gray-200"
            >
              Furnished:
              <input
                type="checkbox"
                id="is_furnished"
                name="is_furnished"
                checked={newRental.is_furnished}
                onChange={handleInputChange}
                className="rounded-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 ml-2
            dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              />
            </label>
          </div>
          <div className="ml-4">
            <label
              htmlFor="pets_allowed"
              className="block text-sm font-medium text-gray-700
              dark:text-gray-200"
            >
              Pets Allowed:
              <input
                type="checkbox"
                id="pets_allowed"
                name="pets_allowed"
                checked={newRental.pets_allowed}
                onChange={handleInputChange}
                className="rounded-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 ml-2
            dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2     dark:hover:bg-indigo-600
          dark:focus:ring-indigo-400
          dark:focus:ring-offset-gray-800
          dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
        >
          {rental.id ? "Update" : "Create"} Rental
        </button>
      </div>
    </form>
  );
}

export default RentalForm;
