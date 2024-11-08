import { useForm } from "react-hook-form";
import Button from "./Button";

// Select Component
const Select = ({ label, name, options, placeholder, register, required, error }) => {
    return (
        <label className="">
            <p className="text-blue-600 font-medium text-[13px] uppercase">{label}:</p>
            <select {...register(name, { required })} className="py-2 outline-none border-b-2 border-b-slate-600 text-[13px] font-medium w-full">
                <option value="" disabled className="text-gray-400 text-[13px] font-medium">
                    {placeholder}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value} className="text-[13px] font-medium">
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </label>
    );
};

// InputLabel Component
const InputLabel = ({ title, type, name, placeholder, register, required, error }) => {
    return (
        <label className="relative">
            <p className="text-blue-600 font-medium text-[13px] uppercase">{title}:</p>
            <input
                type={type}
                {...register(name, { required, pattern: type === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/ : undefined })}
                className="text-[13px] font-medium py-2 outline-none border-b-2 border-b-slate-600 w-full"
                placeholder={placeholder}
            />
            {error && <p className="absolute text-red-500 text-sm">{error.message}</p>}
        </label>
    );
};

// AppointmentForm Component
const AppointmentForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        alert("Appointment Made Successfully!");
    };

    return (
        <div className="flex flex-col md:flex-row justify-between shadow-md my-3 md:my-0">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 md:gap-0 md:flex-row grow py-6 px-2 md:items-center justify-around bg-white ">
                <InputLabel
                    title="Name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    register={register}
                    required={{ value: true, message: "Name is required" }}
                    error={errors.name}
                />
                <InputLabel
                    title="Email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    register={register}
                    required={{ value: true, message: "Email is required" }}
                    error={errors.email}
                />

                {/* Service Selection */}
                <Select
                    label="Service"
                    name="service"
                    placeholder="Select Service"
                    options={[
                        { value: "bathroom", label: "Bathroom Cleaning" },
                        { value: "kitchen", label: "Kitchen Cleaning" },
                        { value: "household", label: "Household Cleaning" },
                    ]}
                    register={register}
                    required={{ value: true, message: "Service is required" }}
                    error={errors.service}
                />

                {/* Staff Selection */}
                <Select
                    label="Select Staff"
                    name="staff"
                    placeholder="Select Staff"
                    options={[
                        { value: "john", label: "John Doe" },
                        { value: "william", label: "William Jr" },
                        { value: "josh", label: "Josh Joseph" },
                        { value: "jason", label: "Jason Thompson" },
                    ]}
                    register={register}
                    required={{ value: true, message: "Staff selection is required" }}
                    error={errors.staff}
                />
            </form>
            {/* <button onClick={handleSubmit(onSubmit)} type="submit" className="bg-[#2b98f0] text-center">Make An Appointment</button> */}
            <div onClick={handleSubmit(onSubmit)} className="flex items-center justify-center bg-[#2b98f0]">
                <Button title="Make An Appointment" type="submit" hovertxt="yellow" />
            </div>
        </div>
    );
};

export default AppointmentForm;
