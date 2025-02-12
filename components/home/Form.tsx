const Form = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Form Title */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">
        REQUEST A QUOTE
      </h2>

      {/* Form */}
      <form className="bg-white space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              E-mail
            </label>
            <input
              type="email"
              placeholder=""
              className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Phone Number & Time Frame */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder=""
              className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Time Frame <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md p-3 bg-white focus:ring focus:ring-blue-300">
              <option>Choose Time Frame</option>
              <option>1-2 Weeks</option>
              <option>1 Month</option>
              <option>3 Months</option>
            </select>
          </div>
        </div>

        {/* Size & Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Size <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md p-3 bg-white focus:ring focus:ring-blue-300">
              <option>Choose Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Quantity <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md p-3 bg-white focus:ring focus:ring-blue-300">
              <option>Choose Quantity</option>
              <option>1-10</option>
              <option>10-50</option>
              <option>50+</option>
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Please Describe Your Project <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            placeholder="Choose a project type"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Terms & Privacy Policy */}
        <p className="text-center text-sm text-gray-500">
          By submitting this form you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition">
            <span>Loerum Ipsum</span>
            <span>→</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
