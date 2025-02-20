interface Step3Props {
  formData: any;
}

const Step3 = ({ formData }: Step3Props) => {
  return (
    <div className="bg-white mt-6 p-6 rounded-lg shadow-lg">
      {/* ส่วนแสดงรูปโปรไฟล์ */}
      {formData.profile_image ? (
        <img
          src={formData.profile_image}
          alt="Profile Preview"
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
      ) : (
        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      {/* เส้นกั้น */}
      <div className="flex justify-center my-4">
        <hr className="border-t-2 w-full sm:w-full md:w-full lg:w-full border-gray-300" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <span className="font-bold">
          ID Card:<span className="font-medium">  {formData.id_card}</span>
        </span>
        <span className="font-bold">
          Student ID: <span className="font-medium"> {formData.student_id}</span>
        </span>
        <span className="font-bold">
          Full Name:<span className="font-medium"> {formData.first_name} {formData.last_name}</span>
        </span>
        <span className="font-bold">
          Nickname:<span className="font-medium"> {formData.nick_name}</span>
        </span>
        <span className="font-bold">
          Email:<span className="font-medium"> {formData.email}</span>
        </span>
        <span className="font-bold">
          Phone Number:<span className="font-medium"> {formData.phone}</span>
        </span>
        <span className="font-bold">
          Line ID:<span className="font-medium"> {formData.line_id}</span>
        </span>
        <span className="font-bold">
          Position:<span className="font-medium"> {formData.position}</span>
        </span>
        <span className="font-bold">
          Date of Birth:<span className="font-medium"> {formData.date_of_birth}</span>
        </span>
        <span className="font-bold">
          Blood Group:<span className="font-medium"> {formData.blood_group}</span>
        </span>
        <span className="font-bold">
          Guardian Name:<span className="font-medium"> {formData.guardian_fname} {formData.guardian_lname}</span>
        </span>
        <span className="font-bold">
          Guardian Phone:<span className="font-medium"> {formData.guardian_phone}</span>
        </span>
      </div>
    </div>
  );
};

export default Step3;
