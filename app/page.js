"use client";

const InputText = ({ label, name }) => {
  return (
    <div className="mb-4">
      <label className="text-gray-600">{label}</label>
      <input
        type="text"
        name={name}
        className="form-input mt-1 p-1 outline-none w-full border"
      />
    </div>
  );
};

const RestaurantForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const map = form.map.value;
    const website = form.website.value;
    const facebook = form.facebook.value;
    const instagram = form.instagram.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const formData = {
      name,
      map,
      website,
      facebook,
      instagram,
      phone,
      email,
    };

    fetch("http://localhost:5000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data submitted successfully:", data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
    form.reset();
  };

  return (
    <>
      <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
        <div>
          <InputText label={"Restaurant Name"} name={"name"} />
          <InputText label={"Restaurant Map"} name={"map"} />
          <InputText label={"Restaurant Website"} name={"website"} />
          <InputText label={"Restaurant Phone"} name={"phone"} />
        </div>
        <div>
          <InputText label={"Restaurant Email"} name={"email"} />
          <InputText label={"Restaurant Facebook"} name={"facebook"} />
          <InputText label={"Restaurant Instagram"} name={"instagram"} />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default RestaurantForm;
